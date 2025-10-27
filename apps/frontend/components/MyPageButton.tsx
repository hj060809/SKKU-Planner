import Link from 'next/link';

interface MyPageButtonProps {
  userName: string;
  className?: string;
}

export default function MyPageButton({
  userName,
  className
}: MyPageButtonProps) {
  return (
    <Link
      href='/my'
      className={`
        flex items-center justify-center
        bg-blue-600 hover:bg-blue-700
        text-white font-semibold
        py-2 px-8
        rounded-lg
        transition-colors duration-200
        ${className || ''}
      `}
    >
      <span>{userName}</span>
    </Link>
  );
}
