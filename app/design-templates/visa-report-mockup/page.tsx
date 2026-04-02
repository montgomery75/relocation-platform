"use client";

import React, { useEffect, useState } from "react";

type Stage = "loading" | "report";
type CriteriaStatus = "good" | "warn" | "neutral" | "bad";

type Criterion = {
  label: string;
  value: string;
  status: CriteriaStatus;
};

type Visa = {
  name: string;
  score: number;
  status: string;
  tag: string;
  description: string;
  criteria: Criterion[];
};

type PlanStep = {
  step: string;
  title: string;
  text: string;
  bullets: string[];
};

const loadingSteps = [
  "Reviewing your background",
  "Matching visa pathways",
  "Evaluating eligibility signals",
  "Identifying potential issues",
  "Generating your report",
];

const visas: Visa[] = [
  {
    name: "Opportunity Card",
    score: 90,
    status: "Strong fit",
    tag: "Best match",
    description: "Best path if you want to move first and search locally.",
    criteria: [
      { label: "Education", value: "Strong match", status: "good" },
      { label: "Job offer", value: "Not required", status: "good" },
      { label: "Financial proof", value: "Needs confirmation", status: "warn" },
      { label: "Language", value: "Not required", status: "neutral" },
      { label: "Age", value: "Within favorable range", status: "good" },
    ],
  },
  {
    name: "EU Blue Card",
    score: 65,
    status: "Conditional",
    tag: "Alternative",
    description: "Strong option if you secure a qualifying job offer.",
    criteria: [
      { label: "Education", value: "Relevant", status: "good" },
      { label: "Job offer", value: "Missing", status: "bad" },
      { label: "Salary", value: "Unknown", status: "warn" },
      { label: "Experience", value: "Likely sufficient", status: "good" },
    ],
  },
  {
    name: "Freelance Visa",
    score: 30,
    status: "Unlikely",
    tag: "Not recommended",
    description: "Difficult without strong client base and positioning.",
    criteria: [
      { label: "Clients", value: "Not established", status: "bad" },
      { label: "Income", value: "Unclear", status: "warn" },
      { label: "Business case", value: "Weak", status: "bad" },
      { label: "Market demand", value: "Unclear", status: "warn" },
    ],
  },
];

const planSteps: PlanStep[] = [
  {
    step: "00",
    title: "You get a visa dashboard",
    text: "You get a personal dashboard that organizes your entire visa process in one place and guides you step-by-step through your application.",
    bullets: [
      "Track your eligibility and application status in real time.",
      "See exactly what to do next based on your situation.",
      "Get a structured checklist of required documents.",
      "Identify risks and missing items before applying.",
      "Access all your information and progress in one place.",
    ],
  },
  {
    step: "01",
    title: "Confirm your visa path",
    text: "We test whether your current best-match visa still holds once your case is reviewed in more detail.",
    bullets: [
      "You answer a more detailed set of case-specific questions.",
      "You get a clearer yes / maybe / weak-point assessment.",
    ],
  },
  {
    step: "02",
    title: "Check weak points",
    text: "We isolate the exact parts of your case that could delay you, weaken your application, or change your visa strategy.",
    bullets: [
      "You see where your case is still unclear or incomplete.",
      "You get targeted feedback on what needs attention first.",
    ],
  },
  {
    step: "03",
    title: "Build your roadmap",
    text: "We turn the result into a practical sequence, so you know what to do first and what depends on what.",
    bullets: [
      "You get a step-by-step order of actions.",
      "You avoid wasting time on steps that are too early.",
    ],
  },
  {
    step: "04",
    title: "Prepare to apply",
    text: "We show you how to turn your case into a stronger application package before you take any official step.",
    bullets: [
      "You get document guidance and preparation priorities.",
      "You understand what will make your application more credible and complete.",
    ],
  },
];

function getStatusTextClass(status: CriteriaStatus) {
  switch (status) {
    case "good":
      return "text-emerald-700";
    case "warn":
      return "text-amber-700";
    case "neutral":
      return "text-slate-500";
    case "bad":
      return "text-red-700";
    default:
      return "text-slate-700";
  }
}

function getStatusBarClass(status: CriteriaStatus) {
  switch (status) {
    case "good":
      return "bg-emerald-500";
    case "warn":
      return "bg-amber-500";
    case "neutral":
      return "bg-slate-400";
    case "bad":
      return "bg-red-500";
    default:
      return "bg-slate-400";
  }
}

function getStatusWidth(status: CriteriaStatus) {
  switch (status) {
    case "good":
      return "90%";
    case "warn":
      return "60%";
    case "neutral":
      return "40%";
    case "bad":
      return "20%";
    default:
      return "40%";
  }
}

function VisaAccordionCard({
  visa,
  index,
  openVisa,
  setOpenVisa,
}: {
  visa: Visa;
  index: number;
  openVisa: number | null;
  setOpenVisa: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const isOpen = openVisa === index;

  function getVisaBasics(name: string) {
    switch (name) {
      case "Opportunity Card":
        return "A points-based visa that lets you move to Germany without a job offer and search for work locally. You need to meet a minimum points threshold based on education, experience, age, and language.";
      case "EU Blue Card":
        return "A work visa for highly qualified professionals with a recognized degree and a job offer above a minimum salary threshold. It offers a fast path to long-term residence.";
      case "Freelance Visa":
        return "A visa for self-employed professionals who can demonstrate viable clients, sustainable income, and economic benefit in Germany. Approval depends heavily on your business case.";
      default:
        return "";
    }
  }

  return (
    <div className="mb-3 overflow-hidden rounded-2xl border last:mb-0">
      <button
        type="button"
        onClick={() => setOpenVisa(isOpen ? null : index)}
        className={`flex w-full items-center justify-between p-4 text-left transition ${
          isOpen ? "bg-sky-50" : "bg-slate-50"
        }`}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">{visa.name}</span>
            <span className="rounded bg-slate-200 px-2 py-0.5 text-[10px] text-slate-700">
              {visa.tag}
            </span>
          </div>

          <div className="mt-2 h-2 rounded-full bg-slate-200">
            <div
              className={`h-2 rounded-full ${
                visa.score > 80
                  ? "bg-emerald-500"
                  : visa.score > 50
                  ? "bg-amber-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${visa.score}%` }}
            />
          </div>
        </div>

        <div className="ml-4 flex items-center gap-4">
          <div className="text-sm font-semibold text-slate-900">
            {visa.score}%
          </div>
          <div
            className={`text-slate-500 transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
          >
            {">"}
          </div>
        </div>
      </button>

      {isOpen ? (
        <div className="space-y-5 border-t border-slate-200 bg-white p-5">
          <div className="rounded-xl border border-slate-300 bg-slate-50 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
              What this visa is
            </div>
            <p className="mt-2 text-sm text-slate-700">
              {getVisaBasics(visa.name)}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-xl border border-slate-400 bg-slate-100 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-800">
                Assessment
              </div>
              <div className="mt-2 text-sm font-medium text-slate-900">
                {visa.description}
              </div>
              <div className="mt-3 text-sm text-slate-700">
                For profiles like yours, this path is typically{" "}
                <span className="font-semibold text-slate-900">
                  {visa.status.toLowerCase()}
                </span>
                . The current result reflects your present situation, not the
                strongest version of your case.
              </div>
            </div>

            <div className="rounded-xl border border-slate-400 bg-slate-100 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-800">
                Key factors
              </div>
              <div className="mt-3 space-y-3">
                {visa.criteria.slice(0, 3).map((criterion) => (
                  <div key={criterion.label}>
                    <div className="flex justify-between gap-3 text-xs">
                      <span className="font-medium text-slate-700">
                        {criterion.label}
                      </span>
                      <span className={getStatusTextClass(criterion.status)}>
                        {criterion.value}
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 rounded-full bg-slate-200">
                      <div
                        className={`h-2 rounded-full ${getStatusBarClass(
                          criterion.status
                        )}`}
                        style={{ width: getStatusWidth(criterion.status) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
            <div className="text-xs font-semibold text-amber-800">
              Needs attention
            </div>
            <div className="mt-1 text-xs text-slate-700">
              Degree recognition unclear · Financial proof needs strengthening
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function VisaSuccessPlanCard() {
  const features: Array<[string, string]> = [
    ["Eligibility assessment", "Know exactly where you stand before applying"],
    [
      "Complexity score & risk insights",
      "Understand difficulty and potential issues",
    ],
    ["Step-by-step roadmap", "Clear guidance on what to do and when"],
    ["Document checklist", "Only what you actually need to prepare"],
    ["Timeline estimate", "Plan your application with confidence"],
    ["Critical warnings", "Avoid delays and common rejection reasons"],
  ];

  return (
    <div className="rounded-3xl border-2 border-sky-300 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-xs text-slate-500">Get your step-by-step plan</div>
        <div className="rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white">
          $29.00 one-time fee
        </div>
      </div>

      <div className="mt-2 text-lg font-bold text-sky-700">
        VISA SUCCESS PLAN
      </div>

      <div className="my-4 h-px w-full bg-slate-200" />

      <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm text-slate-800">
        A structured plan to improve your chances and avoid mistakes.
      </div>

      <ul className="mt-4 space-y-3 text-sm text-slate-700">
        {features.map(([title, desc]) => (
          <li key={title} className="flex gap-2">
            <span className="text-sky-600">✓</span>
            <div>
              <div className="font-medium text-slate-900">{title}</div>
              <div className="text-xs text-slate-600">{desc}</div>
            </div>
          </li>
        ))}
      </ul>

      <button className="mt-5 w-full rounded-xl bg-sky-700 py-3 text-sm font-semibold text-white">
        See your personalized visa plan
      </button>
    </div>
  );
}

export default function Page() {
  const [stage, setStage] = useState<Stage>("loading");
  const [progress, setProgress] = useState(0);
  const [openVisa, setOpenVisa] = useState<number | null>(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);

      if (current === loadingSteps.length) {
        clearInterval(interval);
        setTimeout(() => setStage("report"), 500);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (stage === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="w-full max-w-xl rounded-3xl border bg-white p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Analyzing your profile...
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Matching your data against German visa requirements
          </p>
          <div className="mt-6 h-2 rounded-full bg-slate-200">
            <div
              className="h-2 rounded-full bg-sky-700"
              style={{ width: `${(progress / loadingSteps.length) * 100}%` }}
            />
          </div>
          <div className="mt-5 space-y-2 text-sm">
            {loadingSteps.map((step, index) => (
              <div
                key={step}
                className={index < progress ? "text-slate-900" : "text-slate-400"}
              >
                {index < progress ? "✓ " : ""}
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <div className="flex items-center justify-between rounded-3xl bg-slate-900 p-6 text-white">
          <div>
            <div className="inline-block rounded-full border border-emerald-400/40 bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Best Match
            </div>
            <div className="text-3xl font-bold">Opportunity Card</div>
            <div className="mt-1 text-sm text-slate-300">
              Strong fit based on your profile
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">90%</div>
            <div className="text-xs text-slate-400">Compatibility</div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="mb-4 font-semibold text-slate-900">
                Visa comparison
              </h3>
              {visas.map((visa, index) => (
                <VisaAccordionCard
                  key={visa.name}
                  visa={visa}
                  index={index}
                  openVisa={openVisa}
                  setOpenVisa={setOpenVisa}
                />
              ))}
            </div>

            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-semibold text-slate-900">Your profile</h3>
              <p className="mt-1 text-sm text-slate-600">
                This section summarizes all answers you provided, grouped into
                strengths and challenges.
              </p>

              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-800">
                    Your strengths
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Education",
                      "Flexible move",
                      "Relevant experience",
                      "Favorable age",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-emerald-200 bg-white px-3 py-2 text-xs font-medium text-emerald-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-800">
                    Your challenges
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Degree recognition",
                      "Financial proof",
                      "Salary",
                      "Housing",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-amber-200 bg-white px-3 py-2 text-xs font-medium text-amber-950"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mt-[10px] rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 pt-10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                      Missing detail analysis
                    </div>
                    <p className="mt-1 text-sm text-slate-600">
                      These are the details not yet confirmed. They directly
                      affect eligibility confidence, timeline, and approval risk.
                    </p>
                  </div>
                  <span className="absolute right-0 top-0 bg-red-700 px-5 py-2 text-sm font-semibold text-white">
                    In Detail Assessment Required
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Degree recognition",
                    "Salary",
                    "Employment contract",
                    "Financial proof",
                    "Health insurance",
                    "Housing",
                    "Timeline",
                    "Language",
                    "Client base",
                    "Family relocation",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="text-sm text-slate-700">
                    Your Visa Success Plan checks each of these in detail and
                    shows exactly how they impact your application.
                  </p>
                  <button className="mt-4 w-full rounded-xl bg-sky-700 py-3 text-sm font-semibold text-white">
                    Get your visa plan
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-white">
                    What happens next in your Visa Success Plan
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    The report gives you direction. The plan shows you exactly
                    what to do with it.
                  </p>
                </div>
                <div className="hidden rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300 sm:block">
                  Step-by-step logic
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {planSteps.map((item, index) => (
                  <div
                    key={item.step}
                    className={`rounded-xl p-4 ${
                      index === 0
                        ? "border-2 border-sky-400 bg-slate-800 shadow-md"
                        : "border border-slate-700 bg-slate-800 min-h-[280px]"
                    }`}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-900">
                      {item.step}
                    </div>
                    <div className="mt-3 text-sm font-semibold text-white">
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.text}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-200">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border bg-white p-5">
              <div className="font-semibold text-slate-900">Save your report</div>
              <p className="mt-1 text-xs text-slate-500">
                Access it anytime in your personal dashboard
              </p>
              <div className="mt-3 flex gap-2">
                <input
                  className="flex-1 rounded-lg border px-3 py-2 text-sm"
                  placeholder="Email"
                />
                <button className="rounded-lg bg-sky-700 px-4 text-sm text-white">
                  Save
                </button>
              </div>
            </div>

            <VisaSuccessPlanCard />
          </div>
        </div>
      </div>
    </div>
  );
}