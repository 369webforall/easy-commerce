import React from "react";
import Link from "next/link";

const Navbar = () => {
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
        <div className="flex items-center space-x-4">cart</div>
      </div>
    </nav>
  );
};

export default Navbar;
