import CountryCtaSection from "@/components/CountryCtaSection";

type CountryHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  factCheckedDate: string;
  sourcesText: string;
  introText: string;
};

export default function CountryHero({
  eyebrow,
  title,
  subtitle,
  factCheckedDate,
  sourcesText,
  introText,
}: CountryHeroProps) {
  return (
    <section className="rounded-[24px] border border-[#d9e3f5] bg-white p-10 shadow-[0_14px_40px_rgba(22,32,51,0.08)]">
      <div className="mb-[18px] inline-block rounded-full bg-[rgba(31,94,255,0.09)] px-[14px] py-[8px] text-sm font-bold text-[#1546c5]">
        {eyebrow}
      </div>

      <h1 className="mb-4 text-[48px] leading-[1.1] text-[#162033]">
        {title}
      </h1>

      <p className="mb-6 max-w-[700px] text-[20px] leading-[1.5] text-[#5f6c85]">
        {subtitle}
      </p>

      <div className="mb-6 rounded-[18px] border border-[#cfe6d6] bg-[#eff8f2] px-5 py-[18px]">
        <div className="mb-[6px] font-extrabold text-[#21633b]">
          ✔ Verified immigration information
        </div>
        <div className="mb-1 text-[15px] text-[#5f6c85]">
          Last fact-checked: {factCheckedDate}
        </div>
        <div className="text-[15px] text-[#5f6c85]">
          Sources monitored: {sourcesText}
        </div>
      </div>

      <p className="mb-8 max-w-[760px] text-[17px] leading-[1.6] text-[#162033]">
        {introText}
      </p>

      {/* HERO CTA (compact, consistent system, no flag) */}
      <CountryCtaSection
        variant="compact"
        country="Germany"
        visaAdjective="German"
      />
    </section>
  );
}