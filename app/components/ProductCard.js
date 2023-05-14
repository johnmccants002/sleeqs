import React, { useState } from "react";
import Image from "next/image";
import lashhover from "../images/lashhover.png";
import { FaStar } from "react-icons/fa";

function ProductCard(props) {
  const [hovered, setHovered] = useState(false);
  const { image, title } = props;

  return (
    <div className="shadow-lg overflow-hidden">
      <div className="relative">
        <Image
          src={!hovered ? lashhover : image}
          alt="Product 3"
          width={360}
          height={360}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600">$29.99</p>
        </div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-500 text-sm">Natural: 8-12.5mm</p>
          <div className="flex items-center">
            <FaStar className="mr-1" color="tan" />
            <p className="text-gray-500 text-sm">(5)</p>
          </div>
        </div>
        <a href="https://buy.stripe.com/00g9DN3JZh1I4P6003">
          <button
            className="w-full mt-4 py-2 px-4 text-white hover:bg-brown-900 focus:outline-none"
            style={{ backgroundColor: "rgb(101, 67, 33)" }}
          >
            Add to Bag
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
