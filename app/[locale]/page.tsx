import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import IntakeWizard from "@/components/IntakeWizard";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <IntakeWizard />
      <BookingSection />
      <FAQ />
      <Footer />
    </main>
  );
}