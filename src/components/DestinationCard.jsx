// DestinationCard.jsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

const DestinationCard = ({ destination }) => {
    const {
        _id,
        imageUrl,
        destinationName,
        country,
        category,
        price,
        duration,
        description,
    } = destination;

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
            
            {/* Image */}
            <div className="relative overflow-hidden">
                <Image
                    alt={destinationName}
                    src={imageUrl}
                    height={500}
                    width={500}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-sm font-semibold px-4 py-1 rounded-full shadow">
                        {category}
                    </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded-xl shadow-lg">
                    <h3 className="font-bold text-lg">${price}</h3>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">

                {/* Country */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <LuMapPin className="text-lg text-blue-500" />
                    <span>{country}</span>
                </div>

                {/* Title */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                        {destinationName}
                    </h2>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-gray-600">
                    <SlCalender className="text-blue-500" />
                    <span>{duration}</span>
                </div>

                {/* Description */}
                {/* <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p> */}

                {/* Button */}
                <Link href={`/destinations/${_id}`}><button className="w-full mt-2 bg-black hover:bg-blue-600 text-white py-3 rounded-2xl font-semibold transition duration-300 cursor-pointer flex items-center justify-center gap-1 ">
                    <FaExternalLinkAlt /> <span>Explore Now</span>
                </button></Link>
            </div>
        </div>
    );
};

export default DestinationCard;