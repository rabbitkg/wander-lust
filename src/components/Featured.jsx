import { Button } from "@heroui/react";
import DestinationCard from "./DestinationCard";
import Link from "next/link";

const Featured = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/featured`,
    {
      cache: "no-store",
    }
  );

  const destinations = await res.json();

  return (
    <section className="mt-14 lg:mt-24 w-11/12 max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Featured Destinations
          </h1>

          <p className="text-base-content/60 mt-2 text-sm sm:text-base">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>

        {/* Button */}
        <Link href="/destinations">
          <Button
            variant="bordered"
            className="rounded-sm border-cyan-500 border-3 text-cyan-500 px-6 py-6 uppercase tracking-wide w-full sm:w-fit font-semibold hover:bg-cyan-50"
          >
            All Destinations
          </Button>
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;