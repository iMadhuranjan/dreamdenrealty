import About from "@/components/about";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Leadership from "@/components/LeaderShip";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import EngineeringServices from "@/components/ServiceSection";

// Next.js App Router metadata export
export const metadata = {
  title: "Dream Den Realty | Best Real Estate Consultant in Bhiwandi",
  description:
    "Dream Den Realty is a trusted real estate consultancy in Bhiwandi, Maharashtra, helping families find their dream homes since 2015. Discover affordable plots like Amodha Rustic and expert interior solutions with Dream Den – Home Interiors.",
  keywords: [
    "Dream Den Realty",
    "real estate Bhiwandi",
    "plots in Bhiwandi",
    "Amodha Rustic",
    "home interiors Bhiwandi",
    "property consultants",
    "buy plots Maharashtra",
    "Dream Den Interiors",
    "Suraj Gupta"
  ],
  authors: [{ name: "Dream Den Realty" }],
  creator: "Dream Den Realty",
  robots: "index, follow",
  metadataBase: new URL("https://dreamdenrealty.com"),
  openGraph: {
    title: "Dream Den Realty | Trusted Real Estate Experts in Bhiwandi",
    description:
      "Discover dream plots and premium home interior solutions in Bhiwandi with Dream Den Realty. Established in 2015, led by Suraj Gupta.",
    url: "https://dreamdenrealty.com",
    siteName: "Dream Den Realty",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://dreamdenrealty.com/dreamdenlogo.png",
        width: 1200,
        height: 630,
        alt: "Dream Den Realty - Real Estate in Bhiwandi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Den Realty | Trusted Real Estate Experts in Bhiwandi",
    description:
      "Real estate consultancy offering plots, home interiors, and expert advice in Bhiwandi since 2015.",
    images: ["https://dreamdenrealty.com/dreamdenlogo.png"],
    site: "@dreamdenrealty"
  },
   
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Partners />
      <Leadership />
      <EngineeringServices />
      <ContactSection />
      <Footer />
    </>
  );
}

