import type { Metadata } from 'next';
import { ServiceSection } from '@/components/services/ServiceSection';
import { BottomCTA } from '@/components/home/BottomCTA';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Systems integration, process automation, custom software, and strategic consulting for manufacturers and e-commerce businesses.',
  openGraph: {
    title: 'Services | Cornerstone Systems',
    description:
      'Explore integration, automation, custom software development, and strategic consulting services from Cornerstone Systems.',
    url: '/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-accent">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Practical delivery for high-impact systems work</h1>
          <p className="mt-5 max-w-3xl text-lg text-white/85">
            We partner with operations and leadership teams to simplify complexity, reduce manual work, and deliver software that reliably supports how your business runs.
          </p>
        </div>
      </section>

      <ServiceSection
        id="systems-integration"
        title="Systems Integration"
        description={[
          'Most teams are not missing data. They are missing alignment. We connect ERP, MES, WMS, e-commerce, QMS, and CRM systems so the right information moves to the right place at the right time.',
          'Our approach combines architecture planning, API development, and disciplined data mapping. Every integration is built for reliability first, then optimized for maintainability and visibility so your team can trust it long term.',
          'We have worked inside enterprise manufacturing systems and understand how to move business-critical data safely without breaking daily operations.',
        ]}
        audience="Manufacturers and e-commerce companies running three or more disconnected systems."
        deliverables={[
          'Integration architecture and sequencing plan',
          'API and middleware development',
          'Data mapping and transformation rules',
          'Validation and integration testing',
          'Go-live support and post-launch stabilization',
          'Operational documentation for internal teams',
        ]}
        example="Example scenario: A manufacturer running SAP and a separate warehouse system needed real-time inventory sync. We built a middleware layer that eliminated 15 hours of weekly manual reconciliation."
      />

      <ServiceSection
        id="process-automation"
        title="Process Automation"
        reverse
        description={[
          'Manual workflows create hidden costs: delays, rework, and preventable errors. We identify repetitive process bottlenecks and design automations that remove unnecessary handoffs.',
          'Instead of forcing a new system on your team, we improve the workflows you already depend on. The result is less copy-paste work, cleaner data, and faster response time across operations.',
          'If your team is still moving data between spreadsheets and systems, there is a better way, and we can implement it with minimal disruption.',
        ]}
        audience="Operations teams that are overloaded by repetitive data entry and fragmented workflows."
        deliverables={[
          'Workflow discovery and bottleneck analysis',
          'Automation opportunity map',
          'Automation implementation and rollout',
          'Exception handling and safeguards',
          'Team enablement and process documentation',
        ]}
        example="Example scenario: A fulfillment team was re-keying order updates across two platforms. We automated status synchronization and reduced order-processing lag by over 40%."
      />

      <ServiceSection
        id="custom-software-development"
        title="Custom Software Development"
        description={[
          'When your process is a competitive advantage, generic software can become a liability. We build focused internal tools, dashboards, and workflow applications around how your business actually operates.',
          'You get software shaped by real requirements, not software that forces your team into awkward workarounds. We emphasize clean architecture, reliable deployment, and straightforward maintenance.',
          'The goal is not feature volume. The goal is measurable operational clarity and control.',
        ]}
        audience="Companies that have outgrown spreadsheets and cannot find off-the-shelf tools that match their workflows."
        deliverables={[
          'Requirements and process definition',
          'Solution architecture and technical design',
          'Application development and QA',
          'Deployment and release planning',
          'Ongoing support and iterative improvements',
        ]}
        example="Example scenario: A multi-site operation needed a unified internal dashboard for production and shipping metrics. We delivered a single source of truth with role-based visibility."
      />

      <ServiceSection
        id="strategic-consulting"
        title="Strategic Consulting"
        reverse
        description={[
          'Major technology decisions are expensive to unwind. We help you evaluate options, define integration implications, and set a practical execution roadmap before implementation starts.',
          'This is high-signal planning designed to reduce risk. You get direct, technical guidance in plain language and clear tradeoffs for each path forward.',
          'A few days of focused planning can save months of rework and prevent costly misalignment across teams.',
        ]}
        audience="Teams preparing for major platform changes, vendor selection, or integration-heavy initiatives."
        deliverables={[
          'Current-state technical and workflow assessment',
          'Integration roadmap and phased execution plan',
          'Vendor and platform comparison guidance',
          'Risk analysis with mitigation strategy',
          'Implementation readiness checklist',
        ]}
        example="Example scenario: A company evaluating ERP migration options needed confidence before signing a contract. We delivered an integration impact assessment and phased migration plan."
      />

      <BottomCTA />
    </>
  );
}
