import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Calipet - Playful AI Nutrition Companion",
  description: "Calipet is a playful AI nutrition coach that turns your meals into XP for a cute companion, making healthy habits stick with gamification and smart meal scanning.",
  keywords: ["Calipet", "AI nutrition coach", "meal tracking", "gamification", "health app", "AI companion"],
};

export default function CalipetPage() {
  return (
    <div className="theme-calipet">
      {/* Header */}
      <section className="services" style={{ paddingTop: 140, paddingBottom: 24 }}>
        <div className="services-header">
          <h1 className="section-title">Calipet</h1>
          <p>A playful nutrition coach that turns your meals into XP for a cute companion—making healthy habits stick.</p>
          <div style={{ marginTop: 24 }}>
            <Link href="/products" className="btn btn-outline">Back to Products</Link>
          </div>
        </div>
      </section>

      {/* Image gallery with descriptions */}
      <section className="services" style={{ paddingTop: 8 }}>
        <div className="services-grid grid-4">
          <div className="service-card">
            <Image src="/Calipet_Hero_Image.png" alt="Calipet dashboard showing nutrition progress with friendly pet characters" width={400} height={300} style={{ width: "100%", borderRadius: 8, display: "block" }} />
            <div className="service-content">
              <h3>Your friendly nutrition companion</h3>
              <p>See calories and macros at a glance, with quick actions to scan a meal or enter it manually.</p>
            </div>
          </div>

          <div className="service-card">
            <Image src="/Calipet_Character_Progression.png" alt="Calipet character progression from Level 1 to Level 4 with XP rewards" width={400} height={300} style={{ width: "100%", borderRadius: 8, display: "block" }} />
            <div className="service-content">
              <h3>Level up with real‑life habits</h3>
              <p>Hit your daily targets to earn XP and evolve your pet—gentle motivation that rewards consistency.</p>
            </div>
          </div>

          <div className="service-card">
            <Image src="/Calipet_Meal_Scanning_Feature.png" alt="Phone scanning a plate of food with AI estimating macros and calories" width={400} height={300} style={{ width: "100%", borderRadius: 8, display: "block" }} />
            <div className="service-content">
              <h3>Scan your meal in seconds</h3>
              <p>Use the camera to recognize foods and estimate calories, protein, carbs, and fats automatically.</p>
            </div>
          </div>

          <div className="service-card">
            <Image src="/Calipet_Advertisement_Banner.png" alt="Feed your pet, feed your health banner with pets and food diary" width={400} height={300} style={{ width: "100%", borderRadius: 8, display: "block" }} />
            <div className="service-content">
              <h3>Feed your pet, feed your health</h3>
              <p>Calipet is a light‑hearted, positive space to build better eating habits—one meal at a time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}