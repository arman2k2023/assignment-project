import heroImage from "../assets/banner-stack.png";

function Hero() {
    return (
        <section className="px-4 py-16 sm:px-6 lg:py-24">
            <div className="mx-auto max-w-7xl">

                <div className="grid items-center gap-10 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">

                        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Build Your Ideal
                            <span className="brand-gradient"> Devolopment Stack</span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
                            Explore frontend, backend, database, and tooling option,
                            compare them side by side, and put together the stack that fits your next project.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

                            <button className="gradient-button rounded-full px-6 py-3 font-semibold text-white">
                                Explore Technologies
                            </button>

                            <button className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50">
                                Learn More
                            </button>

                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex justify-center">
                        <img
                            src={heroImage}
                            alt="Dev Stack"
                            className="w-full max-w-lg object-contain"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;