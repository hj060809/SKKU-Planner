"use client"

import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation"
import MyPageButton from "./MyPageButton";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/about', label: 'About' },
    { href: '/content', label: 'Content' }, // 임시 링크입니다. 개발 상황에 따라 추가
    { href: '/report', label: 'Report' },
  ];

  return (
    <nav id="nav_bar" className="w-full flex items-center justify-around p-2">
      <Link href='/' id="logo" className="flex">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={50}
          height={50}
        />
        <Image
          src={"/title.png"}
          alt="Logo"
          width={100}
          height={100}
        />
      </Link>
      <ul className="flex list-none gap-15">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`
                text-lg
                transition-colors
                font-bold
                hover:text-gray-400
                ${pathname === link.href ? 'font-bold text-blue-400' : ''}
              `}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <MyPageButton
        userName="My Page"
      />
    </nav>
  )
}
