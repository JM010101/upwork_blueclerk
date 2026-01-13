import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-dark mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-neutral-medium">
              This page is coming soon. Check back later for our privacy policy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
