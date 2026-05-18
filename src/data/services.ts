export interface Service {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "ai-automation",
    number: "01",
    icon: "robot_2",
    title: "Applied AI & Intelligent Automation",
    description:
      "Integrating advanced Large Language Models (LLMs) and custom AI workflows directly into your enterprise ecosystem. We engineer smart automation to streamline data processing, enhance customer interactions, and optimize complex business operations.",
    tags: ["LLM Integration", "Workflow Automation", "NLP", "AI Chatbots"],
  },
  {
    id: "web-architecture",
    number: "02",
    icon: "language",
    title: "Enterprise Web Architecture",
    description:
      "Building robust, highly concurrent backend architectures and scalable microservices. We engineer secure, high-performance web platforms capable of handling complex business logic and massive user traffic without compromising speed.",
    tags: ["Microservices", "API Design", "High Availability", "Security"],
  },
  {
    id: "mobile-development",
    number: "03",
    icon: "smartphone",
    title: "Fluid Mobile App Development",
    description:
      "Crafting high-fidelity, cross-platform mobile experiences that deliver seamless native performance. From complex internal operational tools to sleek consumer-facing apps, we ensure stability, speed, and intuitive user interfaces.",
    tags: ["iOS & Android", "Cross-Platform", "Native Performance", "UX/UI"],
  },
  {
    id: "cloud-operations",
    number: "04",
    icon: "cloud_queue",
    title: "Managed Infrastructure & Cloud Operations",
    description:
      "Providing end-to-end system administration, secure server management, and proactive maintenance. We ensure your digital infrastructure—from expansive enterprise email servers to cloud databases—remains highly available, secure, and resilient.",
    tags: ["Cloud Management", "Server Admin", "24/7 Monitoring", "DevOps"],
  },
];
