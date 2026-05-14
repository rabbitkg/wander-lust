"use client";

import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

import {    
    FaCheck
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);

   const { price, _id, destinationName,imageUrl, country  } = destination;

  const handleBooking = async () => {
    const bookingData = {
        userId: user?.id,
        userImage: user?.image,
        userName: user?.name,
        destinationId: _id,
        destinationName,
        price,
        imageUrl,
        country,
        departureDate: new Date(departureDate)
    }

    const {data:tokenData} = await authClient.token()
    // console.log(tokenData)
    
    const res = await fetch('http://localhost:5000/booking', {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(bookingData),
        // credentials: "include",
    })

    const data = await res.json();
    console.log(data)

    toast.success("You booked successfully!")





  }


    return (
        <div>
            <div className="bg-white border border-gray-200 shadow-md p-6 sticky top-10">

                {/* Price */}
                <p className="text-gray-500 text-sm mb-1">
                    Starting from
                </p>

                <h2 className="text-5xl font-bold text-cyan-500 mb-1">
                    ${price}
                </h2>

                <p className="text-gray-500 text-sm mb-8">
                    per person
                </p>

                {/* Date */}
                <DateField
                    onChange={setDepartureDate}
                    className="w-[256px]" name="date">
                    <Label>Departure Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>

                {/* Book Button */}
                <button
                onClick={handleBooking}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 transition duration-300 mt-3 cursor-pointer">
                    Book Now →
                </button>

                {/* Features */}
                <div className="mt-8 space-y-4">

                    {[
                        "Free cancellation up to 7 days",
                        "Travel insurance included",
                        "24/7 customer support",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3"
                        >
                            <FaCheck
                                className="text-green-500"
                                size={13}
                            />

                            <span className="text-gray-600 text-sm">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default BookingCard;