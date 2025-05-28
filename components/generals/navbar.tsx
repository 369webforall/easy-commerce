"use client";
import React from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";

const Navbar = () => {
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="sticky top-0 z-50 bg-white py-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="hover:text-blue-500 text-2xl">
          Easy Buy
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/checkout">
            cart <span className="text-red-600 font-semibold">{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
