

import BookingCard from "@/components/BookingCard";
import { CancelAlert } from "@/components/CancelAlert";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import {
    FaArrowLeft,
    FaStar,
    FaCheck,
    FaRegCalendarAlt,
    FaPencilAlt,
    FaTrash,
} from "react-icons/fa";

import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const {token} = await auth.api.getToken({
        headers: await headers()
    })


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    
    const destination = await res.json();

    const {
        imageUrl,
        destinationName,
        country,
        category,
        price,
        duration,
        description,
    } = destination;

    return (
        <div className="bg-[#f5f5f5] min-h-screen text-black">
            <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">

                {/* Top Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

                    {/* Back Button */}
                    <Link
                        href="/destinations"
                        className="flex items-center gap-2 text-gray-500 hover:text-black transition"
                    >
                        <FaArrowLeft size={14} />
                        <span className="text-sm font-medium">
                            Back to Destinations
                        </span>
                    </Link>

                    {/* Action Buttons */}
                    <div className="flex gap-3">

                        {/* Edit */}
                       <EditModal destination={destination}/>

                        {/* Cancel */}
                        <CancelAlert destination={destination}/>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={destinationName}
                        width={1400}
                        height={700}
                        className="w-full h-[250px] md:h-[450px] lg:h-[520px] object-cover"
                    />
                </div>

                {/* Divider */}
                <div className="border-b border-gray-300 my-8"></div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

                    {/* Left Side */}
                    <div className="lg:col-span-2">

                        {/* Country */}
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                            <LuMapPin size={15} />
                            <span>{country}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-6xl font-light mb-5">
                            {destinationName}
                        </h1>

                        {/* Rating + Duration */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-12">

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <FaStar
                                    className="text-green-500"
                                    size={14}
                                />

                                <span className="font-bold text-black">
                                    4.9
                                </span>

                                <span>(234 reviews)</span>
                            </div>

                            {/* Duration */}
                            <div className="flex items-center gap-2">
                                <FaRegCalendarAlt size={14} />
                                <span className="font-semibold text-black">
                                    {duration}
                                </span>
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="mb-12">
                            <h2 className="text-4xl font-light mb-5">
                                Overview
                            </h2>

                            <p className="text-gray-600 leading-8 max-w-4xl">
                                {description}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div>

                            <h2 className="text-4xl font-light mb-5">
                                Highlights
                            </h2>

                            <p className="text-gray-600 leading-8 mb-8 max-w-4xl">
                                Discover the magic of Bali with pristine beaches,
                                ancient temples, and vibrant culture. Experience
                                luxury resorts, tropical landscapes, and unforgettable
                                sunsets.
                            </p>

                            {/* Highlight List */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">

                                {[
                                    "Luxury beachfront accommodation",
                                    "Traditional Balinese spa treatment",
                                    "Sunrise trek to Mount Batur",
                                    "Visit Uluwatu Temple at sunset",
                                    "Private beach dinner experience",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3"
                                    >
                                        <FaCheck
                                            className="text-green-500"
                                            size={13}
                                        />

                                        <span className="text-gray-700 text-sm">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Booking Card */}
                    <div>

                        <BookingCard destination={destination}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;