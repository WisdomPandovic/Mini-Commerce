import Link from 'next/link';

const HomeBanner = () => {
  return (
    <div
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-white mb-3"
      style={{
        backgroundImage: "url('/images/banner.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-opacity-50" />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
          Welcome to Mini-Commerce
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Your favorite place for bold looks and unique styles
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/stores/shop"
            className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-yellow-200 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
