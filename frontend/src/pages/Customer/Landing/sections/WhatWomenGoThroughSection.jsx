import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cure1 from "../../../../../public/images/cure1.png";
import cure2 from "../../../../../public/images/cure2.png";
import cure3 from "../../../../../public/images/cure3.png";

const conditions = [
  {
    title: "Hormonol Diseases",
    items: ["PCOS", "Thyroid", "Irregular periods"],
    icon: "/images/harmonalicon.png",
    image: cure1,
  },
  {
    title: "Ladies Diseases",
    items: ["Obesity & Overweight", "Metabolic Syndrome", "Thyroid Disorders"],
    icon: "/images/ladies.png",
    image: cure2,
  },
  {
    title: "Diabetes Care Diseases",
    items: ["Obesity & Overweight", "Metabolic Syndrome", "Thyroid Disorders"],
    icon: "/images/diabetescare.png",
    image: cure3,
  },
];

// 🃏 Single card — `active` controls the hover/pop styling
const ConditionCard = ({ c, active }) => (
  <div
    className={`rounded-2xl overflow-hidden border bg-white transition-all duration-300 ${
      active
        ? "border-[#F0D9E2] shadow-[0_12px_32px_rgba(226,123,163,0.18)] scale-[1.02]"
        : "border-gray-100 shadow-[0_1px_3px_rgba(16,24,40,0.04)]"
    }`}
  >
    {/* Fixed height keeps layout stable before images load */}
    <img
      src={c.image}
      alt={c.title}
      className="block w-full h-auto grayscale"
    />
    <div className="p-5 sm:p-6 text-center">
      <div className="flex items-center justify-center gap-8 mb-4">
        <img
          src={c.icon}
          alt=""
          className="w-8 h-8 object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <h3 className="font-bold text-[#2D3D4A] text-[17px] sm:text-[19px] leading-tight text-left">
          {c.title.split(" ").slice(0, -1).join(" ")}
          <br />
          {c.title.split(" ").slice(-1)}
        </h3>
      </div>
      <ul className="text-[#2D3D4A] text-sm sm:text-[15px] font-medium space-y-2">
        {c.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function WhatWomenGoThroughSection() {
  const [active, setActive] = useState(1);
  const scrollRef = useRef(null);
  const isProgrammatic = useRef(false); // true while we scroll via code

  // 📱 Scroll the mobile row so card `index` is centered
  const centerCard = (index, behavior = "smooth") => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll("[data-card]");
    const target = cards[index];
    if (!target) return;
    const left =
      target.offsetLeft + target.offsetWidth / 2 - el.clientWidth / 2;

    isProgrammatic.current = true;
    el.scrollTo({ left, behavior });
    // release the lock after the scroll settles
    setTimeout(() => {
      isProgrammatic.current = false;
    }, 450);
  };

  const prev = () => {
    const target = active === 0 ? conditions.length - 1 : active - 1;
    setActive(target);
    centerCard(target);
  };

  const next = () => {
    const target = active === conditions.length - 1 ? 0 : active + 1;
    setActive(target);
    centerCard(target);
  };

  // Desktop carousel — rotating window of 3
  const visible = [
    conditions[(active - 1 + conditions.length) % conditions.length],
    conditions[active],
    conditions[(active + 1) % conditions.length],
  ];

  // 📱 Initial center on mount — wait for images so widths are real
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const doCenter = () => centerCard(1, "instant");

    // center now, and again once every image has loaded
    doCenter();
    const imgs = el.querySelectorAll("img");
    let pending = imgs.length;
    if (pending === 0) return;
    imgs.forEach((img) => {
      if (img.complete) {
        pending -= 1;
        if (pending === 0) doCenter();
      } else {
        img.addEventListener("load", () => {
          pending -= 1;
          if (pending === 0) doCenter();
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 📱 Update active from manual scroll — debounced, ignored while programmatic
  const scrollTimer = useRef(null);
  const handleScroll = () => {
    if (isProgrammatic.current) return; // arrow scroll in progress — don't fight it
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      const el = scrollRef.current;
      if (!el) return;
      const containerCenter = el.scrollLeft + el.clientWidth / 2;
      const cards = el.querySelectorAll("[data-card]");
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - containerCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    }, 120);
  };

  return (
    <section className="py-6 lg:py-8 bg-white">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3D4A] mb-8 sm:mb-10">
          What Women Go Through ?
        </h2>

        {/* 💻 DESKTOP / TABLET — rotating 3-card grid */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          {visible.map((c, i) => (
            <ConditionCard key={c.title} c={c} active={i === 1} />
          ))}
        </div>

        {/* 📱 MOBILE — horizontal scroll, center card highlighted */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="md:hidden flex gap-4 overflow-x-auto pb-4 mb-6 scrollbar-hide -mx-5 px-5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {conditions.map((c, i) => (
            <div key={c.title} data-card className="flex-shrink-0 w-[78%]">
              <ConditionCard c={c} active={i === active} />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-3">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E27BA3] hover:text-[#E27BA3] transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E27BA3] hover:text-[#E27BA3] transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
