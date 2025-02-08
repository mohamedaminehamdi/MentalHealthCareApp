"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getPatient, getUser } from "@/lib/actions/patient.actions";
const Navbar: React.FC = () => {
  const pathname = usePathname(); // Get current path

  return (
    
    <nav className="bg-black shadow-lg py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Image
          src="/assets/icons/logo-full.svg"
          height={40}
          width={150}
          alt="logo"
          className="h-10 w-auto"
        />
        <div className="flex space-x-6">
          <NavItem href="http://localhost:3000/patients/67a661410015cf19e720/new-appointment" text="New Appointment" activePath={pathname} />
          <NavItem href="http://localhost:4000/" text="Community Forum" activePath={pathname} />
          <NavItem href="http://localhost:5001/" text="Chatbot" activePath={pathname} />
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  href: string;
  text: string;
  activePath: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, activePath }) => (
  <Link href={href} className="relative">
    <span
      className={`cursor-pointer text-white text-lg transition-all duration-300 ease-in-out ${
        activePath === href ? "font-bold underline" : "opacity-80"
      } hover:text-white-300 hover:scale-105`}
    >
      {text}
    </span>
  </Link>
);

export default Navbar;
