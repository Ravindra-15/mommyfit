// MommyFit - "Your Journey with MommyFit" Section

import shareStoryIcon from "../../../../assets/sharestory.png";
import buildPlanIcon from "../../../../assets/buildplan.png";
import shareJourneyIcon from "../../../../assets/sharejourney.png";
import thriveIcon from "../../../../assets/thrive.png";

const steps = [
  {
    id: 1,
    number: "01",
    icon: shareStoryIcon,
    title: "Share Your Story",
    description: "Tell us about your phase, your goals, and your concerns",
  },
  {
    id: 2,
    number: "02",
    icon: buildPlanIcon,
    title: "Build Your Plan",
    description: "We create a personalized program just for you",
  },
  {
    id: 3,
    number: "03",
    icon: shareJourneyIcon,
    title: "Start Your Journey",
    description: "Daily guidance, support, and expert check-ins",
  },
  {
    id: 4,
    number: "04",
    icon: thriveIcon,
    title: "Thrive Together",
    description: "Celebrate milestones with our community",
  },
];

export default function OurStructureSection() {
  return (
    <section className="pt-2 sm:pt-4 lg:pt-6 pb-10 sm:pb-12 lg:pb-14 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:mt-10 font-bold text-[#2D3D4A]">
            Your Journey with MommyFit
          </h2>
          <p className="mt-3 text-[#2D3D4A] text-sm sm:text-base lg:text-lg font-medium">
            From your first conversation to lasting transformation, we're with
            you every step.
          </p>
        </div>

        {/* STEP CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-2xl border border-[#F0E4EA] shadow-[0_10px_30px_rgba(16,24,40,0.06)] px-6 pt-7 pb-8 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Faded number */}
              <span className="text-[64px] sm:text-[72px] font-extrabold leading-none text-[#F6C9D9] [mask-image:linear-gradient(to_bottom,transparent_0%,black_85%)]">
                {step.number}
              </span>

              {/* Icon */}
              <div className="mt-3 mb-4 w-12 h-12 rounded-xl bg-[#E27BA3] flex items-center justify-center shadow-[0_8px_20px_rgba(226,123,163,0.35)]">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[16px] sm:text-[18px] font-bold text-[#2D3D4A] mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#7A8A95] text-[13px] sm:text-sm font-medium leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}