import Link from 'next/link';
import { ArrowRight, BookOpen, Download, MessageCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="harbor-home">
      <section className="harbor-hero harbor-container">
        <p className="harbor-eyebrow">HarborOS / Help &amp; Resources</p>
        <h1>HarborOS Documentation</h1>
        <p className="harbor-intro">
          Set up your server. Find the right download. Get help when you need it.
        </p>
        <div className="harbor-actions">
          <Link href="/docs/downloads-support/" className="harbor-button harbor-button-primary">
            Downloads &amp; Support <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link href="/docs/getting-started/" className="harbor-button harbor-button-outline">
            Getting Started <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="harbor-resources harbor-container" aria-labelledby="resources-title">
        <h2 id="resources-title">Find what you need</h2>
        <div className="harbor-resource-grid">
          <Link href="/docs/downloads-support/" className="harbor-resource">
            <Download className="harbor-resource-icon" size={24} aria-hidden="true" />
            <h3>Downloads &amp; Support</h3>
            <p>User manual, HarborOS ISO, firmware, utilities, and support contacts.</p>
            <span className="harbor-resource-action">View downloads <ArrowRight size={16} aria-hidden="true" /></span>
          </Link>
          <Link href="/docs/application-guides/" className="harbor-resource">
            <BookOpen className="harbor-resource-icon" size={24} aria-hidden="true" />
            <h3>Application Guides</h3>
            <p>Follow the official Ollama installation tutorial and find configuration help.</p>
            <span className="harbor-resource-action">Read the guides <ArrowRight size={16} aria-hidden="true" /></span>
          </Link>
          <Link href="/docs/configuration-help/" className="harbor-resource">
            <MessageCircle className="harbor-resource-icon" size={24} aria-hidden="true" />
            <h3>Questions &amp; Bug Reports</h3>
            <p>Ask the community about your setup or report something that is not working.</p>
            <span className="harbor-resource-action">Get help <ArrowRight size={16} aria-hidden="true" /></span>
          </Link>
        </div>
      </section>

      <footer className="harbor-footer">
        <div className="harbor-container harbor-footer-content">
          <p>Harbor Innovations <span>HarborOS documentation &amp; support</span></p>
          <nav aria-label="Official Harbor links">
            <a href="https://www.harboros.ai/">Official Website</a>
            <a href="https://harboros.ai/pages/contact-us">Contact Support</a>
            <a href="https://github.com/HarborNAS/community">Community</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
