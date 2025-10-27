"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-yellow-400 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
        <h1 className="text-2xl font-bold text-green-400">Street Flavours</h1>
      </div>
      <div className="flex gap-6 text-lg">
        <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
        <Link href="/posts" className="hover:text-yellow-400 transition-colors">Posts</Link>
      </div>
    </nav>
  );
}
