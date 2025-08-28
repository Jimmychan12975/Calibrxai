export const metadata = {
  title: "Services",
  description: "Explore Calibrx AI services and solutions.",
};

export default function ServicesPage() {
  return (
    <div className="services">
      <div className="services-header">
        <h1 className="section-title">Our Solutions</h1>
        <p>Discover how our modular AI solutions can transform your business operations and drive innovation across your organization.</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-image"><i className="ri-robot-line" /></div>
          <div className="service-content">
            <h3>Intelligent Automation</h3>
            <p>Streamline operations with AI-powered automation that learns and adapts to your business processes, reducing manual tasks and increasing efficiency.</p>
            <a href="#" className="service-link">Learn more <i className="ri-arrow-right-line" /></a>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image"><i className="ri-brain-line" /></div>
          <div className="service-content">
            <h3>Predictive Analytics</h3>
            <p>Harness the power of your data with advanced machine learning models that provide actionable insights and forecast future trends with remarkable accuracy.</p>
            <a href="#" className="service-link">Learn more <i className="ri-arrow-right-line" /></a>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image"><i className="ri-customer-service-2-line" /></div>
          <div className="service-content">
            <h3>AI-Powered Customer Experience</h3>
            <p>Enhance customer interactions with intelligent chatbots, personalized recommendations, and sentiment analysis that understands customer needs.</p>
            <a href="#" className="service-link">Learn more <i className="ri-arrow-right-line" /></a>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image"><i className="ri-file-search-line" /></div>
          <div className="service-content">
            <h3>Document Intelligence</h3>
            <p>Transform unstructured documents into valuable data with AI that can read, understand, and extract information from any document format.</p>
            <a href="#" className="service-link">Learn more <i className="ri-arrow-right-line" /></a>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image"><i className="ri-code-box-line" /></div>
          <div className="service-content">
            <h3>Custom AI Development</h3>
            <p>Partner with our experts to build bespoke AI solutions tailored to your specific industry challenges and business objectives.</p>
            <a href="#" className="service-link">Learn more <i className="ri-arrow-right-line" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}


