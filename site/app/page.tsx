import ContactSection from "@/components/ContactSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Build AI,<br />brick by brick</h1>
          <p>Calibrx AI delivers trustworthy, modern artificial intelligence solutions designed to transform your business with precision and innovation.</p>
          <div className="hero-buttons">
            <a href="/products" className="btn">Explore Products</a>
            <a href="/about" className="btn btn-outline">Learn More</a>
          </div>
        </div>
        <Image 
          src="/Calibrx_AI_Hero_Image.png" 
          alt="Calibrx AI - Building AI solutions brick by brick with modern technology" 
          className="hero-image" 
          width={800}
          height={600}
          priority
        />
        <div className="brick-animation" />
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <Image 
          src="https://assets-persist.lovart.ai/agent_images/b0c59b6e-539b-4f0b-a4ea-1f0e0d4fec57.png" 
          alt="Calibrx AI team working on artificial intelligence solutions" 
          className="about-image" 
          width={600}
          height={400}
        />
        <div className="about-content">
          <h2 className="section-title">About Calibrx AI</h2>
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

      {/* Services Section */}
      <section className="services" id="services">
        <div className="services-header">
          <h2 className="section-title">Our Solutions</h2>
          <p>Discover how our modular AI solutions can transform your business operations and drive innovation across your organization.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <i className="ri-robot-line" />
            </div>
            <div className="service-content">
              <h3>Intelligent Automation</h3>
              <p>Streamline operations with AI-powered automation that learns and adapts to your business processes, reducing manual tasks and increasing efficiency.</p>
              <a href="/services" className="service-link">Learn more <i className="ri-arrow-right-line" /></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <i className="ri-brain-line" />
            </div>
            <div className="service-content">
              <h3>Predictive Analytics</h3>
              <p>Harness the power of your data with advanced machine learning models that provide actionable insights and forecast future trends with remarkable accuracy.</p>
              <a href="/services" className="service-link">Learn more <i className="ri-arrow-right-line" /></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <i className="ri-customer-service-2-line" />
            </div>
            <div className="service-content">
              <h3>AI-Powered Customer Experience</h3>
              <p>Enhance customer interactions with intelligent chatbots, personalized recommendations, and sentiment analysis that understands customer needs.</p>
              <a href="/services" className="service-link">Learn more <i className="ri-arrow-right-line" /></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <i className="ri-file-search-line" />
            </div>
            <div className="service-content">
              <h3>Document Intelligence</h3>
              <p>Transform unstructured documents into valuable data with AI that can read, understand, and extract information from any document format.</p>
              <a href="/services" className="service-link">Learn more <i className="ri-arrow-right-line" /></a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <i className="ri-code-box-line" />
            </div>
            <div className="service-content">
              <h3>Custom AI Development</h3>
              <p>Partner with our experts to build bespoke AI solutions tailored to your specific industry challenges and business objectives.</p>
              <a href="/services" className="service-link">Learn more <i className="ri-arrow-right-line" /></a>
            </div>
          </div>
        </div>

        <Image 
          src="https://assets-persist.lovart.ai/agent_images/1e2d39e0-6b4d-4d78-9d74-5cdbecd316f0.png" 
          alt="Calibrx AI solutions showcase - intelligent automation, predictive analytics, and customer experience tools" 
          width={1200}
          height={400}
          style={{ width: "100%", marginTop: 60, borderRadius: 8 }}
        />
      </section>

      {/* Contact Section (shared) */}
      <ContactSection />
    </>
  );
}
