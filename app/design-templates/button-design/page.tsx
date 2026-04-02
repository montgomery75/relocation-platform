import React from "react";

function ArrowLeftRight(props: React.SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  const { strokeWidth = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...rest}>
      <path
        d="M7 7h10M7 7l3-3M7 7l3 3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17H7M17 17l-3-3M17 17l-3 3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheck(props: React.SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  const { strokeWidth = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...rest}>
      <path
        d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ButtonDesignPage() {
  return (
    <main className="min-h-screen w-full bg-[#ececec] p-4 md:p-10">
      {/* ================= Button Design Version 6 ================= */}
      <div>
        <div className="mb-4 text-sm font-semibold text-gray-600">
          Button Design Version 6
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:gap-6">
          {/* LEFT */}
          <button className="group flex items-center gap-3 rounded-xl border-[2px] border-[#5f7f7a] bg-gradient-to-br from-[#CBDF90] via-[#8FAD88] to-[#7F9C96] px-3 py-[0.57rem] shadow-[0_4px_10px_rgba(51,65,85,0.20)] transition duration-200 hover:-translate-y-1 hover:border-[#4e6e69] hover:from-[#d6eaa3] hover:via-[#97b894] hover:to-[#6f8f89] hover:shadow-[0_14px_26px_rgba(51,65,85,0.28)] active:translate-y-0 active:scale-[0.99] md:flex-1 md:gap-4 md:px-4 md:py-[0.765rem]">
            <Version2FreeIcon />
            <div className="min-w-0 flex-1">
              <div className="relative flex flex-col items-center pr-6 md:pr-8">
                <div className="mb-[2px] text-center text-sm font-semibold uppercase tracking-wide text-[#334155]">
                  Free Visa Match Report
                </div>
                <div className="text-center text-[1.7rem] font-bold leading-[1.05] tracking-[-0.02em] text-[#0f172a] md:text-[1.9rem]">
                  Visa Comparison
                </div>
                <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 origin-center scale-y-[1.3] text-[2rem] font-bold leading-none text-white opacity-80 transition duration-200 group-hover:translate-x-1 group-hover:opacity-100 md:scale-y-[1.4] md:text-[2.6rem]">
                  &gt;
                </span>
              </div>
            </div>
          </button>

          {/* RIGHT */}
          <button className="group flex items-center gap-3 rounded-xl border-[2px] border-[#c2410c] bg-gradient-to-br from-[#fde68a] via-[#f59e0b] to-[#ea580c] px-3 py-[0.57rem] shadow-[0_4px_10px_rgba(194,65,12,0.14)] transition duration-200 hover:-translate-y-1 hover:border-[#9a3412] hover:from-[#fcd34d] hover:via-[#f59e0b] hover:to-[#dc2626] hover:shadow-[0_14px_26px_rgba(194,65,12,0.30)] active:translate-y-0 active:scale-[0.99] md:flex-1 md:gap-4 md:px-4 md:py-[0.765rem]">
            <Version2PremiumIcon />
            <div className="min-w-0 flex-1">
              <div className="relative flex flex-col items-center pr-6 md:pr-8">
                <div className="mb-[2px] text-center text-sm font-semibold uppercase tracking-wide text-[#9a3412]">
                  Premium Visa Dashboard
                </div>
                <div className="text-center text-[1.7rem] font-bold leading-[1.05] tracking-[-0.02em] text-white md:text-[1.9rem]">
                  Visa Success Plan
                </div>
                <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 origin-center scale-y-[1.3] text-[2rem] font-bold leading-none text-white opacity-80 transition duration-200 group-hover:translate-x-1 group-hover:opacity-100 md:scale-y-[1.4] md:text-[2.6rem]">
                  &gt;
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* ================= Button Only Version 1 ================= */}
      <div className="mt-10">
        <div className="mb-4 text-sm font-semibold text-gray-600">
          Button Only Version 1
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:gap-6">
          <button className="group flex items-center justify-center rounded-xl border-[2px] border-[#5f7f7a] bg-gradient-to-br from-[#CBDF90] via-[#8FAD88] to-[#7F9C96] px-4 py-[0.57rem] shadow-[0_4px_10px_rgba(51,65,85,0.20)] transition duration-200 hover:-translate-y-1 hover:border-[#4e6e69] hover:from-[#d6eaa3] hover:via-[#97b894] hover:to-[#6f8f89] hover:shadow-[0_14px_26px_rgba(51,65,85,0.28)] active:translate-y-0 active:scale-[0.99] md:flex-1 md:px-6 md:py-[0.765rem]">
            <span className="text-[1.7rem] font-bold text-[#0f172a] md:text-[1.9rem]">
              Visa Comparison
            </span>
          </button>

          <button className="group flex items-center justify-center rounded-xl border-[2px] border-[#c2410c] bg-gradient-to-br from-[#fde68a] via-[#f59e0b] to-[#ea580c] px-4 py-[0.57rem] shadow-[0_4px_10px_rgba(194,65,12,0.14)] transition duration-200 hover:-translate-y-1 hover:border-[#9a3412] hover:from-[#fcd34d] hover:via-[#f59e0b] hover:to-[#dc2626] hover:shadow-[0_14px_26px_rgba(194,65,12,0.30)] active:translate-y-0 active:scale-[0.99] md:flex-1 md:px-6 md:py-[0.765rem]">
            <span className="text-[1.7rem] font-bold text-white md:text-[1.9rem]">
              Visa Success Plan
            </span>
          </button>
        </div>
      </div>

      {/* ================= Button-Hybrid Version 1 ================= */}
      <div className="mt-10">
        <div className="mb-4 text-sm font-semibold text-gray-600">
          Button-Hybrid Version 1
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:gap-6">
          <button className="group flex items-center justify-center gap-2 rounded-xl border-[2px] border-[#5f7f7a] bg-gradient-to-br from-[#CBDF90] via-[#8FAD88] to-[#7F9C96] px-4 py-[0.57rem] shadow-[0_4px_10px_rgba(51,65,85,0.20)] transition duration-200 hover:-translate-y-1 hover:border-[#4e6e69] hover:from-[#d6eaa3] hover:via-[#97b894] hover:to-[#6f8f89] hover:shadow-[0_14px_26px_rgba(51,65,85,0.28)] active:translate-y-0 active:scale-[0.99] md:flex-1 md:px-6 md:py-[0.765rem]">
            <ArrowLeftRight className="h-5 w-5 text-[#2f5f63]" strokeWidth={2.6} />
            <span className="text-[1.7rem] font-bold leading-[1.05] tracking-[-0.02em] text-[#0f172a] md:text-[1.9rem]">
              Visa Comparison
            </span>
          </button>

          <button className="group flex items-center justify-center gap-2 rounded-xl border-[2px] border-[#c2410c] bg-gradient-to-br from-[#fde68a] via-[#f59e0b] to-[#ea580c] px-4 py-[0.57rem] shadow-[0_4px_10px_rgba(194,65,12,0.14)] transition duration-200 hover:-translate-y-1 hover:border-[#9a3412] hover:from-[#fcd34d] hover:via-[#f59e0b] hover:to-[#dc2626] hover:shadow-[0_14px_26px_rgba(194,65,12,0.30)] active:translate-y-0 active:scale-[0.99] md:flex-1 md:px-6 md:py-[0.765rem]">
            <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2.35} />
            <span className="text-[1.7rem] font-bold leading-[1.05] tracking-[-0.02em] text-white md:text-[1.9rem]">
              Visa Success Plan
            </span>
          </button>
        </div>
      </div>

      {/* ================= Button-Hybrid Version 2 ================= */}
      <div className="mt-10">
        <div className="mb-4 text-sm font-semibold text-gray-600">
          Button-Hybrid Version 2
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:gap-6">
          <button className="group flex items-center gap-1 rounded-xl border-[2px] border-[#5f7f7a] bg-gradient-to-br from-[#CBDF90] via-[#8FAD88] to-[#7F9C96] px-3 py-[0.57rem] shadow-[0_4px_10px_rgba(51,65,85,0.20)] transition duration-200 hover:-translate-y-1 hover:border-[#4e6e69] hover:from-[#d6eaa3] hover:via-[#97b894] hover:to-[#6f8f89] hover:shadow-[0_14px_26px_rgba(51,65,85,0.28)] active:translate-y-0 active:scale-[0.99] md:flex-1 md:gap-2 md:px-4 md:py-[0.765rem]">
            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center overflow-visible md:h-[72px] md:w-[72px]">
              <div className="origin-center scale-[0.52] md:scale-[0.62]">
                <Version2FreeIcon />
              </div>
            </div>
            <span className="flex-1 text-center text-[1.7rem] font-bold leading-[1.05] tracking-[-0.02em] text-[#0f172a] md:text-[1.9rem]">
              Visa Comparison
            </span>
          </button>

          <button className="group flex items-center gap-1 rounded-xl border-[2px] border-[#c2410c] bg-gradient-to-br from-[#fde68a] via-[#f59e0b] to-[#ea580c] px-3 py-[0.57rem] shadow-[0_4px_10px_rgba(194,65,12,0.14)] transition duration-200 hover:-translate-y-1 hover:border-[#9a3412] hover:from-[#fcd34d] hover:via-[#f59e0b] hover:to-[#dc2626] hover:shadow-[0_14px_26px_rgba(194,65,12,0.30)] active:translate-y-0 active:scale-[0.99] md:flex-1 md:gap-2 md:px-4 md:py-[0.765rem]">
            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center overflow-visible md:h-[72px] md:w-[72px]">
              <div className="origin-center scale-[0.52] md:scale-[0.62]">
                <Version2PremiumIcon />
              </div>
            </div>
            <span className="flex-1 text-center text-[1.7rem] font-bold leading-[1.05] tracking-[-0.02em] text-white md:text-[1.9rem]">
              Visa Success Plan
            </span>
          </button>
        </div>
      </div>

      {/* ================= Button-Hybrid Version 3 ================= */}
      <div className="mt-10">
        <div className="mb-4 text-sm font-semibold text-gray-600">
          Button-Hybrid Version 3
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:gap-10">
          <div className="relative pt-6 md:flex-1 md:pt-8">
            <button className="group relative z-10 flex w-full items-center justify-end rounded-xl border-[2px] border-[#5f7f7a] bg-gradient-to-br from-[#CBDF90] via-[#8FAD88] to-[#7F9C96] pl-[5.25rem] pr-4 py-[0.57rem] shadow-[0_4px_10px_rgba(51,65,85,0.20)] transition duration-200 hover:-translate-y-1 hover:border-[#4e6e69] hover:from-[#d6eaa3] hover:via-[#97b894] hover:to-[#6f8f89] hover:shadow-[0_14px_26px_rgba(51,65,85,0.28)] active:translate-y-0 active:scale-[0.99] md:pl-[6.8rem] md:pr-5 md:py-[0.765rem]">
              <span className="w-full text-center text-[1.7rem] font-bold leading-[1.05] tracking-[-0.02em] text-[#0f172a] md:text-[1.9rem]">
                Visa Comparison
              </span>
            </button>
            <div className="pointer-events-none absolute left-0 top-0 z-20 translate-x-[-2%] md:translate-x-[-4%]">
              <div className="origin-left scale-[0.78] md:scale-[0.92]">
                <Version2FreeIcon />
              </div>
            </div>
          </div>

          <div className="relative pt-6 md:flex-1 md:pt-8">
            <button className="group relative z-10 flex w-full items-center justify-end rounded-xl border-[2px] border-[#c2410c] bg-gradient-to-br from-[#fde68a] via-[#f59e0b] to-[#ea580c] pl-[5.25rem] pr-4 py-[0.57rem] shadow-[0_4px_10px_rgba(194,65,12,0.14)] transition duration-200 hover:-translate-y-1 hover:border-[#9a3412] hover:from-[#fcd34d] hover:via-[#f59e0b] hover:to-[#dc2626] hover:shadow-[0_14px_26px_rgba(194,65,12,0.30)] active:translate-y-0 active:scale-[0.99] md:pl-[6.8rem] md:pr-5 md:py-[0.765rem]">
              <span className="w-full text-center text-[1.7rem] font-bold leading-[1.05] tracking-[-0.02em] text-white md:text-[1.9rem]">
                Visa Success Plan
              </span>
            </button>
            <div className="pointer-events-none absolute left-0 top-0 z-20 translate-x-[-2%] md:translate-x-[-4%]">
              <div className="origin-left scale-[0.78] md:scale-[0.92]">
                <Version2PremiumIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Icon Button ================= */}
      <div className="mt-10">
        <div className="mb-4 text-sm font-semibold text-gray-600">Icon Button</div>

        <div className="mx-auto flex max-w-3xl flex-col gap-3 md:flex-row md:gap-4">
          <button className="group inline-flex items-center gap-2 rounded-lg border-[2px] border-[#5f7f7a] bg-gradient-to-br from-[#CBDF90] via-[#8FAD88] to-[#7F9C96] px-3 py-[0.45rem] shadow-[0_3px_8px_rgba(51,65,85,0.18)] transition duration-200 hover:-translate-y-0.5 hover:border-[#4e6e69] hover:from-[#d6eaa3] hover:via-[#97b894] hover:to-[#6f8f89] hover:shadow-[0_10px_18px_rgba(51,65,85,0.25)] active:translate-y-0 active:scale-[0.98]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2f5f63] shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
              <ArrowLeftRight className="h-4 w-4 text-white" strokeWidth={2.5} />
            </span>
            <span className="text-[0.95rem] font-semibold tracking-[-0.01em] text-[#0f172a] md:text-[1rem]">
              Visa Comparison
            </span>
          </button>

          <button className="group inline-flex items-center gap-2 rounded-lg border-[2px] border-[#c2410c] bg-gradient-to-br from-[#fde68a] via-[#f59e0b] to-[#ea580c] px-3 py-[0.45rem] shadow-[0_3px_8px_rgba(194,65,12,0.16)] transition duration-200 hover:-translate-y-0.5 hover:border-[#9a3412] hover:from-[#fcd34d] hover:via-[#f59e0b] hover:to-[#dc2626] hover:shadow-[0_10px_18px_rgba(194,65,12,0.28)] active:translate-y-0 active:scale-[0.98]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2f7a22] shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
              <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2.4} />
            </span>
            <span className="text-[0.95rem] font-semibold tracking-[-0.01em] text-white md:text-[1rem]">
              Visa Success Plan
            </span>
          </button>
        </div>
      </div>

      {/* ================= Icon Button (secondary) ================= */}
      <div className="mt-6">
        <div className="mb-3 text-sm font-semibold text-gray-600">
          Icon Button (secondary)
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-3 md:flex-row md:gap-4">
          <button className="group inline-flex items-center gap-2 rounded-lg border border-[#9fb3af] bg-white px-3 py-[0.42rem] shadow-[0_2px_6px_rgba(51,65,85,0.12)] transition duration-200 hover:-translate-y-0.5 hover:border-[#7f9c96] hover:shadow-[0_8px_14px_rgba(51,65,85,0.18)] active:translate-y-0 active:scale-[0.98]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6f8f89]">
              <ArrowLeftRight className="h-4 w-4 text-white" strokeWidth={2.5} />
            </span>
            <span className="text-[0.95rem] font-semibold tracking-[-0.01em] text-[#334155] md:text-[1rem]">
              Visa Comparison
            </span>
          </button>

          <button className="group inline-flex items-center gap-2 rounded-lg border border-[#d6a36a] bg-white px-3 py-[0.42rem] shadow-[0_2px_6px_rgba(194,65,12,0.10)] transition duration-200 hover:-translate-y-0.5 hover:border-[#c2410c] hover:shadow-[0_8px_14px_rgba(194,65,12,0.18)] active:translate-y-0 active:scale-[0.98]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4a9f3a]">
              <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2.4} />
            </span>
            <span className="text-[0.95rem] font-semibold tracking-[-0.01em] text-[#7c2d12] md:text-[1rem]">
              Visa Success Plan
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}

function Version2FreeIcon() {
  return (
    <div className="relative h-[96px] w-[110px] shrink-0 md:h-[122px] md:w-[138px]">
      <div className="absolute left-[18px] top-[6px] h-[70px] w-[56px] rounded-xl border-[2px] border-[#3f6b6f] bg-gradient-to-br from-[#cfe3df] to-[#7f9c96] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_6px_10px_rgba(0,0,0,0.10)] md:h-[92px] md:w-[74px]" />
      <div className="absolute left-[8px] top-[16px] h-[70px] w-[56px] rounded-xl border-[2px] border-[#355e60] bg-gradient-to-br from-[#c8ded9] to-[#7f9c96] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_6px_10px_rgba(0,0,0,0.10)] md:h-[92px] md:w-[74px]" />
      <div className="absolute left-0 top-[26px] h-[70px] w-[56px] rounded-xl border-[2.5px] border-[#2f5558] bg-gradient-to-br from-[#d9ebe7] to-[#6f9088] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_8px_12px_rgba(0,0,0,0.12)] md:h-[92px] md:w-[74px]">
        <div className="space-y-1 px-2 pt-3 md:space-y-2 md:px-3 md:pt-4">
          <div className="h-1.5 w-6 rounded bg-[#2f4f52] md:w-8" />
          <div className="rounded bg-white/80 py-0.5 text-center text-[10px] font-medium text-[#3b5f63] md:py-1 md:text-xs">
            VISA
          </div>
          <div className="h-1.5 w-full rounded bg-white/74" />
          <div className="h-1.5 w-4/5 rounded bg-white/62" />
        </div>
      </div>

      <div className="absolute bottom-[12px] right-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-[#5f8f92] to-[#2f5f63] shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_6px_10px_rgba(0,0,0,0.18)] md:bottom-[18px] md:right-[16px] md:h-[58px] md:w-[58px]">
        <ArrowLeftRight className="h-4 w-4 text-white md:h-6 md:w-6" strokeWidth={2.6} />
      </div>
    </div>
  );
}

function Version2PremiumIcon() {
  return (
    <div className="relative h-[96px] w-[110px] shrink-0 md:h-[122px] md:w-[144px]">
      <div className="absolute left-[4px] top-[8px] h-[82px] w-[68px] rounded-[1.15rem] border-[3px] border-[#c47d22] bg-gradient-to-br from-[#f7e7a4] via-[#efc858] to-[#dc9c1c] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_8px_12px_rgba(0,0,0,0.12)] md:h-[108px] md:w-[90px]">
        <div className="space-y-1 px-2 pt-3 md:space-y-2 md:px-3 md:pt-4">
          <div className="h-1.5 w-6 rounded bg-[#bf7920] md:w-8" />
          <div className="rounded bg-white/80 py-0.5 text-center text-[10px] font-semibold text-[#b5771f] md:py-1 md:text-xs">
            VISA
          </div>
          <div className="h-1.5 w-full rounded bg-white/70" />
          <div className="h-1.5 w-4/5 rounded bg-white/60" />
          <div className="h-1.5 w-3/5 rounded bg-white/50" />
        </div>
      </div>

      <div className="absolute bottom-[12px] right-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-[#74c845] to-[#2f7a22] shadow-[inset_0_1px_0_rgba(255,255,255,0.30),0_6px_10px_rgba(0,0,0,0.18)] md:bottom-[18px] md:right-[16px] md:h-[58px] md:w-[58px]">
        <ShieldCheck className="h-6 w-6 text-white md:h-8 md:w-8" strokeWidth={2.6} />
      </div>
    </div>
  );
}