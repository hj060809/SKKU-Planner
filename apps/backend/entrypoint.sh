#!/bin/sh

set -e

echo "Running Database migrations..."
npx prisma migrate deploy

echo "Starting Skkuduler"
exec node /app/dist/apps/$TARGET/main.js