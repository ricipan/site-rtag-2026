import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Services from "@/components/landing/Services";
import Stats from "@/components/landing/Stats";
import CaseStudies from "@/components/landing/CaseStudies";
import VideoTestimonials from "@/components/landing/VideoTestimonials";
import Comparison from "@/components/landing/Comparison";
import Process from "@/components/landing/Process";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Stats />
        <CaseStudies />
        <VideoTestimonials />
        <Comparison />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
