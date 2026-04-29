import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import QuickSettings from "@/components/QuickSettings";
import HowItWorks from "@/components/HowItWorks";
import RecentSessions from "@/components/RecentSessions";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <QuickSettings />
      <HowItWorks />
      <RecentSessions />
      <CTASection />
      <Footer />
    </div>
  );
}
