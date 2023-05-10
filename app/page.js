"use client";

import React from "react";
import ProductCard from "./components/ProductCard";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

import Head from "next/head";

import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

import closeup1 from "./images/closeup1.jpg";
import closeup2 from "./images/closeup2.jpeg";
import closeup3 from "./images/closeup3.jpeg";
import makeupbg from "./images/makeupbg.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import bgmakeupimage from "./images/bgmakeupimage.png";

export default function Home() {
  return (
    <div style={{ width: "auto" }}>
      <Navbar />
      <Head>
        <title>Sleeqs - Elegant and Beautiful Lashes</title>
        <meta
          name="description"
          content="Welcome to Sleaqs, where elegance and beauty meet. Discover our collection of premium lashes and elevate your look today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="flex justify-center items-center h-screen bg-gradient-to-b from-pink-400 to-purple-500"
        style={{
          backgroundImage: `url(${makeupbg.src})`,
          backgroundSize: "cover",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-6xl text-white font-bold"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            SLEEQS
          </h1>
          <p
            className="text-3xl text-white mt-4"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Where elegance and beauty meet
          </p>
          <p
            className="text-lg text-white mt-8 max-w-2xl mx-auto"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Discover our collection of premium lashes and elevate your look
            today
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <FiChevronDown className="text-white mt-20 text-5xl animate-bounce" />
        </motion.div>
      </div>
      <h2
        className="py-4 text-3xl font-bold text-white-800 mb-8 text-left pl-8 mt-8"
        style={{ fontFamily: "Cormorant, serif" }}
      >
        Effortless Collection
      </h2>

      <div className="py-12 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center justify-content-center">
        <ProductCard image={closeup1} />
        <ProductCard image={closeup2} />
        <ProductCard image={closeup3} />
      </div>

      <div
        className="h-screen bg-cover bg-center flex flex-col justify-center items-start px-4"
        style={{
          backgroundImage: `url(${bgmakeupimage.src})`,
          backgroundSize: "max-content",
        }}
      >
        <h1
          className="text-6xl font-black text-black uppercase text-left bg-white bg-opacity-50 py-6 mb-4 px-4"
          style={{ fontFamily: "Cormorant, serif" }}
        >
          Sleeqs-Xtensions™
          <br />
          Exclusively at sleeqs.com
        </h1>

        <p
          className="text-xl font-medium text-black text-left mb-8 ml-12"
          style={{ fontFamily: "Cormorant, serif" }}
        >
          Elevate your lashes with our Velour-Xtensions™!
        </p>
        <button
          className="py-2 px-6 bg-black text-white uppercase tracking-wide font-medium rounded-md hover:bg-opacity-80 focus:outline-none ml-12"
          style={{ fontFamily: "Cormorant, serif" }}
        >
          Buy Now
        </button>
      </div>

      <div className="mt-8 bg-white py-6">
        <h2
          className=" text-3xl font-bold text-gray-800 mb-8 text-center"
          style={{ fontFamily: "Cormorant, serif", fontWeight: 300 }}
        >
          What We Stand For
        </h2>

        <div className="my-4 grid grid-cols-3 gap-4 justify-items-center justify-content-center">
          <div className="text-center my-12">
            <div className="mb-4 flex justify-center items-center">
              <div
                className="border border-6 rounded-full p-2 w-14 h-14 flex justify-center items-center"
                style={{ borderColor: "black" }}
              >
                <FontAwesomeIcon
                  icon={faSeedling}
                  size="lg"
                  style={{ color: "black" }}
                  className="text-black-500 mx-auto"
                />
              </div>
            </div>
            <h3
              className="text-lg mb-2 text-black"
              style={{ fontFamily: "Cormorant, serif", fontWeight: 300 }}
            >
              Multi-Wear
            </h3>
          </div>
          <div className="text-center my-12">
            <div className="mb-4 flex justify-center items-center">
              <div
                className="border border-6 rounded-full p-2 w-14 h-14 flex justify-center items-center"
                style={{ borderColor: "black" }}
              >
                <FontAwesomeIcon
                  icon={faSeedling}
                  size="lg"
                  style={{ color: "black" }}
                  className="text-black-500 mx-auto"
                />
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-2 text-black"
              style={{ fontFamily: "Cormorant, serif", fontWeight: 300 }}
            >
              Award Winning
            </h3>
          </div>
          <div className="text-center my-12">
            <div className="mb-4 flex justify-center items-center">
              <div
                className="border border-6 rounded-full p-2 w-14 h-14 flex justify-center items-center"
                style={{ borderColor: "black" }}
              >
                <FontAwesomeIcon
                  icon={faSeedling}
                  size="lg"
                  style={{ color: "black" }}
                  className="text-black-500 mx-auto"
                />
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-2 text-black"
              style={{ fontFamily: "Cormorant, serif", fontWeight: 300 }}
            >
              Vegan-Cruelty Free
            </h3>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center items-center">
              <div
                className="border border-6 rounded-full p-2 w-14 h-14 flex justify-center items-center"
                style={{ borderColor: "black" }}
              >
                <FontAwesomeIcon
                  icon={faSeedling}
                  size="lg"
                  style={{ color: "black" }}
                  className="text-black-500 mx-auto"
                />
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-2 text-black"
              style={{ fontFamily: "Cormorant, serif", fontWeight: 300 }}
            >
              Premium Lash Fibres
            </h3>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center items-center">
              <div
                className="border border-6 rounded-full p-2 w-14 h-14 flex justify-center items-center"
                style={{ borderColor: "black" }}
              >
                <FontAwesomeIcon
                  icon={faSeedling}
                  size="lg"
                  style={{ color: "black" }}
                  className="text-black-500 mx-auto"
                />
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-2 text-black"
              style={{ fontFamily: "Cormorant, serif", fontWeight: 300 }}
            >
              Makeup Artist Recommended
            </h3>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center items-center">
              <div
                className="border border-6 rounded-full p-2 w-14 h-14 flex justify-center items-center"
                style={{ borderColor: "black" }}
              >
                <FontAwesomeIcon
                  icon={faSeedling}
                  size="lg"
                  style={{ color: "black" }}
                  className="text-black-500 mx-auto"
                />
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-2 text-black"
              style={{ fontFamily: "Cormorant, serif", fontWeight: 300 }}
            >
              Recyclable Packaging
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
