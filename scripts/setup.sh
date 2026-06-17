#!/usr/bin/env bash

# Should support both local machine(MacOS/Linux) and devcontainer.

set -e

BASEDIR=$(dirname $(dirname $(realpath "$0")))
cd "$BASEDIR"

if [ -z "$DEVCONTAINER" ]; then
  docker compose up -d
fi

# Install nvm
if [ -z "$NVM_DIR" ]; then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
  NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
fi

# Install Node.js
. "$NVM_DIR/nvm.sh" || true
nvm install

# Install direnv
if [ ! $(command -v direnv) ]; then
  curl -sfL https://direnv.net/install.sh | bash
  echo 'eval "$(direnv hook bash)"' >> ~/.bashrc
  echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc
fi
direnv allow .
eval "$(direnv export bash)"

# If .env does not exist, create one
if [ ! -f apps/backend/.env ] || ! grep -q "DATABASE_URL" apps/backend/.env; then
  cp apps/backend/.env.example apps/backend/.env
fi

if [ ! -f apps/frontend/.env ]; then
  cp apps/frontend/.env.example apps/frontend/.env
fi

# Backward compatibility: remove old .env file
rm -f .env

# Install pnpm and Node.js packages
corepack enable
COREPACK_ENABLE_DOWNLOAD_PROMPT=0 pnpm install

# Enable git auto completion
if [ "$DEVCONTAINER" = "1" ] && ! grep -q "source /usr/share/bash-completion/completions/git" ~/.bashrc; then
  echo "source /usr/share/bash-completion/completions/git" >> ~/.bashrc
fi

for _ in {1..5}; do
  pnpm --filter="backend" exec prisma migrate dev && break # break if migration succeed
  echo -e '\n⚠️ Failed to migrate. Waiting for db to be ready...\n'
  sleep 5
done

echo ""
echo "✅ Project setup has been completed!"
echo ""
