import Hero from "@/components/Hero";
import ProductReveal from "@/components/ProductReveal";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <main>
      {/* Hero — full viewport with wordmark, nav, info card, video thumb */}
      <Hero />

      <Divider label="01 — THE OBJECT" />

      {/* Product reveal 1 */}
      <ProductReveal
        id="product"
        heading="ISN'T JUST A COASTER."
        body="Designed to lift, insulate, and grip in all the right ways. Oryzo makes the simplest moment feel considered."
      />

      <Divider label="02 — THE MATERIAL" />

      {/* Product reveal 2 */}
      <ProductReveal
        id="material"
        heading="PRESSED CORK. NOTHING MORE."
        body="Sourced from sustainable Portuguese cork forests. Each piece is pressed and precision-cut to a perfect 8mm thickness — no veneers, no composites."
      />

      {/* Features grid */}
      <Features />

      <Divider label="03 — CONTACT" />

      {/* Contact / CTA */}
      <Contact />
    </main>
  );
}
