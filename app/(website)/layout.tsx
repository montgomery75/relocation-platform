import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    metadataBase: new URL("https://www.europerelocator.com"),

    title: {
      default:
        "Move to Europe from the U.S. | Visa & Residency Help | Europe Relocator",
      template: "%s | Europe Relocator"
    },

    description:
      "Verified & AI-driven relocation service helping Americans move to Europe with visa guidance, country matching, and application preparation.",

    icons: {
      icon: "/favicon.png"
    },

    keywords: ["Move to Europe", "Visa Help", "Residency", "Europe Relocator"],

    authors: [{ name: "Europe Relocator" }],

    alternates: {
      canonical: settings?.url
    },

    openGraph: {
      title: "Move to Europe from the U.S. | Europe Relocator",
      description:
        "Verified & AI-driven relocation service helping Americans move to Europe with visa guidance, country matching, and application preparation.",
      url: settings?.url,
      siteName: "Europe Relocator",
      images: [
        {
          url: "/og/homepage.png",
          width: 1200,
          height: 630
        }
      ],
      type: "website"
    },

    twitter: {
      title: "Move to Europe from the U.S. | Europe Relocator",
      description:
        "Verified & AI-driven relocation service helping Americans move to Europe with visa guidance, country matching, and application preparation.",
      card: "summary_large_image",
      images: ["/og/homepage.png"]
    },

    robots: {
      index: false,
      follow: false
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();

  return (
    <>
      <Navbar {...settings} />
      <div>{children}</div>
      <Footer {...settings} />
    </>
  );
}

// enable revalidate for all pages in this layout
// export const revalidate = 60;