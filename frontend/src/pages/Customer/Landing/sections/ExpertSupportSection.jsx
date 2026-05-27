// MommyFit - "Join Program with Expert Support" Section

import { useNavigate } from "react-router-dom";
import { getSubscriptionRedirect } from "../../../../utils/subscriptionGuard";
import { BadgeCheck } from "lucide-react";
import expertPhoneImg from "../../../../assets/expertphone.png";

const doctors = [
  {
    id: 1,
    name: "Dr. Shraddha Naik",
    specialty: "Hormonal Health Specialist",
    img: "/images/doctor1.png",
    tags: ["PCOS", "Thyroid", "Weight Management"],
    experience: "10+ years experience",
  },
  {
    id: 2,
    name: "Dr. Rekha Jain",
    specialty: "PCOS Specialist",
    img: "/images/doctor2.png",
    tags: ["PCOS", "Thyroid", "Weight Management"],
    experience: "10+ years experience",
  },
];

const DoctorCard = ({ doctor }) => (
  <div className="bg-white border border-[#EFEFEF] rounded-2xl shadow-[0_6px_20px_rgba(16,24,40,0.06)] px-6 sm:px-8 py-6 sm:py-7">
    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-7">
      {/* Avatar */}
      <div className="shrink-0">
        <div className="w-[78px] h-[78px] sm:w-[88px] sm:h-[88px] rounded-full p-[3px] bg-gradient-to-br from-[#E27BA3] to-[#F0C2D4]">
          <img
            src={doctor.img}
            alt={doctor.name}
            className="w-full h-full rounded-full object-cover bg-[#FBEAF1]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Name + specialty */}
      <div className="text-center sm:text-left min-w-[200px]">
        <div className="flex items-center justify-center sm:justify-start gap-1.5">
          <h4 className="text-[17px] sm:text-[19px] font-bold text-[#2D3D4A]">
            {doctor.name}
          </h4>
          <BadgeCheck size={18} className="text-[#E27BA3] fill-[#FBEAF1]" />
        </div>
        <p className="text-[#5A6B78] text-[14px] sm:text-[15px] mt-0.5 leading-snug">
          {doctor.specialty}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 sm:max-w-[280px]">
        {doctor.tags.map((tag) => (
          <span
            key={tag}
            className="border border-[#E3E3E3] text-[#2D3D4A] text-[13px] sm:text-[14px] font-medium px-4 py-1.5 rounded-full whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Experience */}
      <div className="text-center sm:text-right sm:ml-auto">
        <p className="text-[#2D3D4A] text-[15px] sm:text-[17px] font-semibold leading-snug">
          {doctor.experience}
        </p>
      </div>
    </div>
  </div>
);

export default function ExpertSupportSection() {
  const navigate = useNavigate();

  const handleStartHealing = () => {
    const intendedPath = "/programs/mommyfit/tenure";
    const redirect = getSubscriptionRedirect(intendedPath);
    navigate(redirect || intendedPath);
  };

  const handleMoreDoctors = () => {
    navigate("/book-doctor");
  };

  return (
    <section className="py-8 sm:py-12 lg:py-2 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Rounded card container */}
        <div className="relative rounded-[28px] sm:rounded-[40px] border border-[#E27BA3] bg-white px-5 sm:px-12 lg:px-20 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
          {/* TOP ROW — copy + phone */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8">
            {/* LEFT — copy */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.15] font-bold text-[#2D3D4A]">
                Join Program with Expert Support
              </h2>
              <p className="mt-4 sm:mt-5 text-[#5A6B78] text-[15px] sm:text-[19px] lg:text-[21px] font-medium">
                Includes yoga plan, tracking &amp; expert consultations
              </p>
              <button
                onClick={handleStartHealing}
                className="mt-6 sm:mt-8 bg-[#E27BA3] hover:bg-[#D86A95] text-white text-[15px] sm:text-[17px] font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-[0_10px_30px_rgba(226,123,163,0.35)] transition-all"
              >
                Start Healing Today
              </button>
            </div>

            {/* RIGHT — phone png */}
            <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
              <img
                src={expertPhoneImg}
                alt="Expert consultation on MommyFit App"
                className="w-[340px] sm:w-[460px] lg:w-[560px] h-auto object-contain"
              />
            </div>
          </div>

          {/* DOCTOR CARDS */}
          <div className="mt-10 sm:mt-10 lg:mt-8 max-w-[1100px] mx-auto">
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* First card — normal */}
              <DoctorCard doctor={doctors[0]} />

              {/* Second card — faded with overlay button */}
              <div className="relative">
                <div className="[mask-image:linear-gradient(to_bottom,black_35%,transparent_95%)]">
                  <DoctorCard doctor={doctors[1]} />
                </div>

                {/* Fade overlay (extra safety for browsers without mask support) */}
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-b from-transparent to-white pointer-events-none rounded-b-2xl" />

                {/* CTA button */}
                <button
                  onClick={handleMoreDoctors}
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-14px] bg-[#E27BA3] hover:bg-[#D86A95] text-white text-[14px] sm:text-[16px] font-semibold px-7 sm:px-9 py-3 sm:py-3.5 rounded-full shadow-[0_10px_28px_rgba(226,123,163,0.4)] transition-all whitespace-nowrap"
                >
                  And Many More Doctors To Help You Out !
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}