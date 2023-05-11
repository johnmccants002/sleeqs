import React, { useState, useRef } from "react";
import Image from "next/image";
import closeup1 from "../images/closeup1.jpg";
import closeup2 from "../images/closeup2.jpeg";
import closeup3 from "../images/closeup3.jpeg";
import logolash from "../images/logolash-removebg-preview.png";
import Head from "next/head";

function Navbar() {
  const [dropdown, setDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleDropdown = (event, name) => {
    event.preventDefault();
    setDropdown(name === dropdown ? null : name);
    e.currentTarget.classList.add("active");
  };

  const closeDropdown = () => {
    const active = document.querySelector(".nav-link.active");
    if (active) {
      active.classList.remove("active");
    }
    setTimeout(() => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(document.activeElement)
      ) {
        setDropdown(null);
      }
    }, 0);
  };

  return (
    <>
      <Head>
        <title>Sleeqs - Elegant and Beautiful Lashes</title>
        <meta
          name="description"
          content="Welcome to Sleaqs, where elegance and beauty meet. Discover our collection of premium lashes and elevate your look today."
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className="bg-black shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <a
                href="#"
                className="flex-shrink-0 flex items-center justify-center"
              >
                <Image src={logolash} alt="Logo" width={80} height={80} />
              </a>

              <div className="hidden sm:-my-px sm:ml-6 sm:flex">
                <a
                  href="#"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    dropdown === "category1"
                      ? "border-pink-500 text-gray-900 active"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                  onMouseEnter={(e) => handleDropdown(e, "closeup1")}
                  onMouseLeave={() => closeDropdown()}
                  style={{ fontFamily: "Cormorant, serif" }}
                >
                  NEW
                </a>
                <a
                  href="#"
                  className={`ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    dropdown === "category2"
                      ? "border-pink-500 text-gray-900 active"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                  onMouseEnter={(e) => handleDropdown(e, "closeup2")}
                  onMouseLeave={() => closeDropdown()}
                  style={{ fontFamily: "Cormorant, serif" }}
                >
                  Shop All
                </a>
                <a
                  href="#"
                  className={`ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    dropdown === "category3"
                      ? "border-pink-500 text-gray-900 active"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                  onMouseEnter={(e) => handleDropdown(e, "closeup3")}
                  onMouseLeave={() => closeDropdown()}
                  style={{ fontFamily: "Cormorant, serif" }}
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </div>
        {dropdown && (
          <div
            className="absolute z-10 bg-black shadow-lg w-full py-12"
            ref={dropdownRef}
          >
            <div className="flex">
              <div className="w-1/4 pl-4">
                <Image
                  src={
                    dropdown === "closeup1"
                      ? closeup1
                      : dropdown === "closeup2"
                      ? closeup2
                      : closeup3
                  }
                  alt={`closeup ${
                    dropdown === "closeup1"
                      ? "1"
                      : dropdown === "closeup2"
                      ? "2"
                      : "3"
                  }`}
                  width={300}
                  height={300}
                  style={{ padding: 12 }}
                />
              </div>
              <div className="w-1/4 flex flex-row justify-center p-4 gap-12">
                <div className="mb-4 flex flex-col gap-2">
                  <h3
                    className="text-white font-medium mb-2"
                    style={{ fontFamily: "Cormorant, serif", paddingBottom: 6 }}
                  >
                    Collections
                  </h3>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-brown-600"
                    style={{ color: "white" }}
                  >
                    All Lashes
                  </a>
                  <a
                    href="#"
                    className="mt-2 text-white text-sm hover:text-brown-600"
                    style={{ color: "white" }}
                  >
                    Best Sellers
                  </a>
                  <a
                    href="#"
                    className="mt-2 text-white text-sm hover:text-brown-600"
                    style={{ color: "white" }}
                  >
                    New! VELOUR-XTENSIONS™
                  </a>
                  <a
                    href="#"
                    className="mt-2 text-white text-sm hover:text-brown-600"
                    style={{ color: "white" }}
                  >
                    Plant Fibre
                  </a>
                  <a
                    href="#"
                    className="mt-2 text-white text-sm hover:text-brown-600"
                    style={{ color: "white" }}
                  >
                    Magnetic
                  </a>
                  <a
                    href="#"
                    className="mt-2 text-white text-sm hover:text-brown-600"
                    style={{ color: "white" }}
                  >
                    Effortless
                  </a>
                  <a
                    href="#"
                    className="mt-2 text-white text-sm hover:text-brown-600"
                    style={{ color: "white" }}
                  >
                    Vegan Luxe
                  </a>
                  <a
                    href="#"
                    className="mt-2 text-white text-sm hover:text-brown-600"
                    style={{ color: "white" }}
                  >
                    Lash Guide
                  </a>
                </div>
                <div className="mb-4 flex flex-col gap-2">
                  <h3
                    className="text-white font-medium mb-2"
                    style={{ fontFamily: "Cormorant, serif", paddingBottom: 6 }}
                  >
                    Volume
                  </h3>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-brown-600"
                    style={{ color: "white" }}
                  >
                    Natural
                  </a>
                  <a
                    href="#"
                    className="mt-2 text-white text-sm hover:text-brown-600"
                    style={{ color: "white" }}
                  >
                    Full
                  </a>
                  <a
                    href="#"
                    className="mt-2 text-white text-sm hover:text-brown-600"
                    style={{ color: "white" }}
                  >
                    Glamour
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
