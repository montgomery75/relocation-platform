import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),

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

    canonical: settings?.url,

    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },

    twitter: {
      title: "Move to Europe from the U.S. | Europe Relocator",
      card: "summary_large_image"
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