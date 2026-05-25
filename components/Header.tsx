'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cartStore';
import { useEffect, useState } from 'react';

export default function Header() {
  const items = useCart((state) => state.items);
  const [totalItems, setTotalItems] = useState(0);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setTotalItems(items.reduce((sum, item) => sum + item.quantity, 0));
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [items]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold hover:text-blue-200">
          🍞 Bread, Butter & Jam
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-200 transition">
            Shop
          </Link>
          {user?.role === 'admin' && (
            <Link href="/admin" className="hover:text-blue-200 transition">
              Admin
            </Link>
          )}
          <Link href="/cart" className="hover:text-blue-200 relative transition">
            🛒 Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          {user ? (
            <div className="flex gap-4 items-center">
              <span className="text-sm">{user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}