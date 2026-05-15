import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FaCalendarAlt,
  FaTrashAlt,
  FaEye,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const MyBookingPage = async () => {
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const {token} = await auth.api.getToken({
          headers: await headers()
      })

  const user = session?.user;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  const bookings = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black">My Bookings</h1>

        <p className="text-gray-500 mt-2">
          Manage and view your upcoming travel plans
        </p>
      </div>

      {/* Booking List */}
      <div className="space-y-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="border border-gray-200 rounded-xl p-4 md:p-5 flex flex-col lg:flex-row gap-5 lg:items-center justify-between bg-white shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Left Side */}
            <div className="flex flex-col md:flex-row gap-5 flex-1">
              {/* Image */}
              <div className="relative w-full md:w-[280px] h-[220px] md:h-[170px] overflow-hidden rounded-lg">
                <Image
                  src={booking.imageUrl}
                  alt={booking.destinationName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                {/* Status */}
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                    <FaCheckCircle size={12} />
                    Confirmed
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mt-3 text-black">
                  {booking.destinationName}
                </h2>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-600 mt-3">
                  <FaCalendarAlt className="text-sm" />
                  <p className="text-sm">
                    Departure:{" "}
                    {new Date(booking.departureDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>

                {/* Country */}
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <FaClock className="text-sm" />
                  <p className="text-sm">{booking.country}</p>
                </div>

                {/* Booking ID */}
                <p className="text-sm text-gray-500 mt-2">
                  Booking ID: {booking._id}
                  {/* .slice(0, 8) */}
                </p>

                {/* Price */}
                <h3 className="text-3xl font-bold text-cyan-500 mt-4">
                  ${booking.price}
                </h3>
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-3 lg:flex-col xl:flex-row">
              {/* Cancel */}

              <BookingCancelAlert bookingId={booking._id}/>

              

              {/* View */}
              <Link href={`/destinations/${booking.destinationId}`}>
                <button className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white px-5 py-2 rounded-md flex items-center gap-2 text-sm">
                  <FaEye />
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;