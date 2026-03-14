import type { Metadata } from "next";
import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export const metadata: Metadata = {
  title: "Move to Europe from the U.S. | Visa & Residency Help | Europe Relocator",
  description:
    "Verified & AI-driven relocation service helping Americans move to Europe with visa guidance, country matching, and application preparation.",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {