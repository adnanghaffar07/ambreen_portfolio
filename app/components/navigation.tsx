"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };


  return (
    <>
      {/* Navigation Bar */}
      <div className="flex justify-between lg:justify-center items-center px-2.5 border border-solid backdrop-blur-[7.5px] bg-neutral-900 border-white border-opacity-50 mt-8 md:mt-10 rounded-[10px] max-w-7xl mx-auto">

        {/* Mobile Logo on the Left */}
        <div className="lg:hidden flex items-center ml-3">
          <Link href="/#home" scroll={true}>
            <div className="flex overflow-hidden gap-2.5 justify-center items-center">
              <img
                loading="lazy"
                src="/amb-nav.png"
                className="object-contain h-10"
                alt="Logo"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden lg:flex flex-wrap gap-5 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <div className="flex gap-4 items-center self-stretch my-auto text-xl tracking-tight text-white min-w-[240px] max-md:max-w-full">
            <Link href="/#services" scroll={true}>
              <div className="overflow-hidden gap-2.5 cursor-pointer self-stretch px-1 xl:px-10   py-5 my-auto rounded-[60px] max-md:px-5">
                Services
              </div>
            </Link>

            <Link href="/#experience" scroll={true}>
              <div className="overflow-hidden gap-2.5 cursor-pointer self-stretch px-1 xl:px-10   py-5 my-auto rounded-[60px] max-md:px-5">
                Professional Experience
              </div>
            </Link>

          </div>
          <Link href="/#home" scroll={true}>
            <div className="flex overflow-hidden gap-2.5 cursor-pointer justify-center items-center self-stretch lg:py-5 lg:pr-9 lg:pl-9 max-md:px-5">
              <img
                loading="lazy"
                src="/amb-nav.png"
                alt="Logo"
                className="object-contain h-10"
              />
            </div>
          </Link>
          <div className="flex flex-wrap gap-10 cursor-pointer items-center self-stretch my-auto text-xl tracking-tight text-white max-md:max-w-full">
            <div className="overflow-hidden gap-2.5 self-stretch px-1 xl:px-8  py-5 my-auto max-md:px-5">
              <Link href="/#tools-section" scroll={true}>
                Tools & Technologies
              </Link>
            </div>
            <Link href="/#hire" scroll={true}>
              <div className="overflow-hidden cursor-pointer gap-2.5 self-stretch px-1 xl:px-10 py-5 my-auto rounded-[60px] max-md:px-5">
                Why Hire Me
              </div>
            </Link>
          </div>
        </div>

        {/* Hamburger Menu for Mobile (Right) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleSidebar} className="p-4">
            <img src="/main-menu.png" alt="Hamburger Menu" className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        >
          <div
            className="fixed right-0 top-0 h-full bg-neutral-900 text-white w-64 p-6 z-50"
            onClick={(e) => e.stopPropagation()} // Prevent closing sidebar when clicking inside it
          >
            <button onClick={closeSidebar} className="text-2xl font-bold mb-8">
              ✕
            </button>
            <ul className="space-y-6">
              <li>
                <Link href="/#services" onClick={closeSidebar}>
                  Services
                </Link>
              </li>

              <li>
                <Link href="/#experience" onClick={closeSidebar}>
                  Professional Experience
                </Link>
              </li>

              <li>
                <Link href="/#tools-section" onClick={closeSidebar}>
                  Tools & Technologies
                </Link>
              </li>

              <li>
                <Link href="/#hire" onClick={closeSidebar}>
                  Why Hire Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
