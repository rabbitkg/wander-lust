// page.jsx
import DestinationCard from "@/components/DestinationCard";

const DestinationPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
        cache: "no-store",
    });

    const destinations = await res.json();

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Heading */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    Explore Amazing Destinations
                </h1>

                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    Discover beautiful places around the world with unforgettable
                    travel experiences.
                </p>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map((destination) => (
                    <DestinationCard
                        key={destination._id}
                        destination={destination}
                    />
                ))}
            </div>
        </div>
    );
};

export default DestinationPage;