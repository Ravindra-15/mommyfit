// MommyFit - Hero Section

import { useNavigate } from "react-router-dom";
import { getSubscriptionRedirect } from "../../../../utils/subscriptionGuard";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    const intendedPath = "/programs/mommyfit/tenure";
    const redirect = getSubscriptionRedirect(intendedPath);
    navigate(redirect || intendedPath);
  };

  const handleConsultDoctor = () => {
    navigate("/book-doctor");
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10">
        {/* Rounded card container */}
        <div className="relative rounded-[28px] sm:rounded-[40px] border border-[#E27BA3] bg-white px-5 sm:px-12 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-24">
          {/* Heading */}
          <div className="text-center max-w-[900px] mx-auto">
            <h1 className="text-[30px] sm:text-[52px] lg:text-[60px] leading-[1.12] font-bold text-[#1F2937]">
              Your Body Tells a Story
              <br />
              <span className="text-[#E27BA3]">We&apos;re Here to Listen.</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-[#475569] text-[15px] sm:text-[20px] lg:text-[24px] font-medium leading-[1.6]">
              Struggling with Hormonal Imbalance,
              <br />
              PCOS, or Daily Fatigue?
            </p>
          </div>

          {/* Middle row — badge + image + CTAs */}
          <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 items-center gap-10 lg:gap-8">
            {/* LEFT — Trust badge */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-[240px] sm:w-[270px] rounded-3xl bg-white shadow-[0_14px_40px_rgba(0,0,0,0.1)] px-8 py-9 text-center">
                <img
                  src="/images/pinkFlower.png"
                  alt="Flower"
                  className="w-12 h-12 sm:w-14 sm:h-14 mx-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <p className="mt-5 text-[#1F2937] text-[16px] sm:text-[18px] font-medium leading-[1.5]">
                  Trusted By Over{" "}
                  <span className="font-bold">5000+</span> Womens
                </p>
              </div>
            </div>

            {/* CENTER — Family image */}
            <div className="flex items-center justify-center order-1 lg:order-2 lg:scale-125">
              <img
                src="/images/mommyfitFamily.png"
                alt="MommyFit Family"
                className="w-[440px] sm:w-[560px] lg:w-[700px] max-w-none h-auto object-contain drop-shadow-[0_35px_35px_rgba(226,123,163,0.58)]"
              />
            </div>

            {/* RIGHT — CTAs */}
            <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-[340px] mx-auto lg:mx-0 lg:ml-auto order-3">
              <button
                onClick={handleStartJourney}
                className="bg-[#E27BA3] hover:bg-[#D86A95] text-white text-[15px] sm:text-[17px] font-semibold px-8 py-4 sm:py-5 rounded-full shadow-[0_10px_30px_rgba(226,123,163,0.35)] transition-all"
              >
                Start Weekly Program
              </button>

              <button
                onClick={handleConsultDoctor}
                className="border border-gray-300 hover:border-[#E27BA3] hover:text-[#E27BA3] text-[#1F2937] text-[15px] sm:text-[17px] font-semibold px-8 py-4 sm:py-5 rounded-full bg-white transition-all"
              >
                Consult A Doctor Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}