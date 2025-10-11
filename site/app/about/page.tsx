import Image from "next/image";

export const metadata = {
  title: "About Calibrx AI - Building AI Solutions Brick by Brick",
  description: "Learn about Calibrx AI's mission to deliver trustworthy, innovative artificial intelligence solutions. Our team combines cutting-edge technology with meticulous attention to detail.",
};

export default function AboutPage() {
  return (
    <section className="about" id="about">
      <Image 
        src="https://assets-persist.lovart.ai/agent_images/b0c59b6e-539b-4f0b-a4ea-1f0e0d4fec57.png" 
        alt="Calibrx AI team working on artificial intelligence solutions" 
        className="about-image" 
        width={600}
        height={400}
      />
      <div className="about-content">
        <h1 className="section-title">About Calibrx AI</h1>
        <p>At Calibrx AI, we&apos;re dedicated to building artificial intelligence solutions that are as reliable as they are innovative. Founded on the principle that great AI is constructed methodically—brick by brick—we combine cutting-edge technology with meticulous attention to detail.</p>
        <p>Our team of AI experts, data scientists, and industry specialists work together to create customized solutions that address real business challenges while maintaining the highest standards of ethics and transparency.</p>

        <div className="values">
          <div className="value-item">
            <div className="value-icon">
              <i className="ri-shield-check-line" />
            </div>
            <div className="value-text">
              <h4>Trust</h4>
              <p>We build AI systems you can rely on, with transparency at every step.</p>
            </div>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <i className="ri-lightbulb-line" />
            </div>
            <div className="value-text">
              <h4>Innovation</h4>
              <p>Pushing boundaries while maintaining practical, applicable solutions.</p>
            </div>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <i className="ri-stack-line" />
            </div>
            <div className="value-text">
              <h4>Modularity</h4>
              <p>Flexible, scalable solutions that grow with your business needs.</p>
            </div>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <i className="ri-team-line" />
            </div>
            <div className="value-text">
              <h4>Collaboration</h4>
              <p>Working closely with clients to ensure AI serves their unique goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}