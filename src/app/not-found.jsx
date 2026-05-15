import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaCompass } from "react-icons/fa";

const NotFoundPage = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-emerald-950 flex items-center justify-center px-6 overflow-hidden relative">

            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-emerald-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
            <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

            <div className="relative z-10 text-center max-w-2xl">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-full backdrop-blur-xl">
                        <FaCompass className="text-5xl text-emerald-400 animate-spin-slow" />
                    </div>
                </div>

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-black text-white tracking-widest drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
                    Lost in the Journey?
                </h2>

                {/* Description */}
                <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                    The page you’re looking for doesn’t exist or may have been moved.
                    Let’s get you back to exploring beautiful destinations.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                    <Link href="/">
                        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-500/20 cursor-pointer">
                            <FaArrowLeft />
                            Back To Home
                        </button>
                    </Link>

                    <Link href="/destinations">
                        <button className="border border-white/20 hover:border-emerald-400 hover:bg-white/10 transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold backdrop-blur-md cursor-pointer">
                            Explore Destinations
                        </button>
                    </Link>

                </div>

                {/* Small Footer */}
                <p className="mt-12 text-sm text-gray-500">
                    Wanderlust • Explore the world without limits
                </p>
            </div>
        </section>
    );
};

export default NotFoundPage;