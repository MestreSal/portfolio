import categoryPlaceholder from "../assets/icons/category-placeholder.svg";
import projectPlaceholder from "../assets/icons/project-placeholder.svg";
import pencilLine from "../assets/icons/pencil-line.svg";
import shape2Line from "../assets/icons/shape-2-line.svg";
import layoutLine from "../assets/icons/layout-line.svg";
import settings3Line from "../assets/icons/settings-3-line.svg";
import type { Project } from "../types";

const projects: Project[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    link: "/projects/1",
  },
  {
    id: 2,
    name: "Mobile Chat App",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Real-time messaging application built with React Native and Firebase",
    link: "/projects/2",
  },
  {
    id: 3,
    name: "Design System",
    img: projectPlaceholder,
    group: {
      id: 2,
      name: "Recent",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
    },
    category: {
      id: 1,
      name: "Figma",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Comprehensive component library with 50+ reusable UI components",
    link: "/projects/3",
  },
  {
    id: 4,
    name: "Microservices Architecture",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Scalable microservices using Docker, Kubernetes, and PostgreSQL",
    link: "/projects/4",
  },
  {
    id: 5,
    name: "Analytics Dashboard",
    img: projectPlaceholder,
    group: {
      id: 2,
      name: "Recent",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Real-time data visualization dashboard with D3.js and Express.js",
    link: "/projects/5",
  },
  {
    id: 6,
    name: "CI/CD Pipeline",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Automated deployment pipeline using GitHub Actions and AWS CloudFormation",
    link: "/projects/6",
  },
  {
    id: 7,
    name: "Fitness Tracker App",
    img: projectPlaceholder,
    group: {
      id: 3,
      name: "Pinned",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Grupos fixados para acesso rápido, com presença constante na navegação principal.",
    },
    category: {
      id: 3,
      name: "HTML + CSS",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "iOS and Android fitness tracking application with health data integration",
    link: "/projects/7",
  },
  {
    id: 8,
    name: "Predictive Analytics Model",
    img: projectPlaceholder,
    group: {
      id: 4,
      name: "Archived",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Conteúdo histórico mantido apenas para referência e organização do acervo.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Machine learning model for sales forecasting using Python and TensorFlow",
    link: "/projects/8",
  },
  {
    id: 9,
    name: "Social Media Website",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Next.js social platform with real-time notifications and user authentication",
    link: "/projects/9",
  },
  {
    id: 10,
    name: "Brand Identity System",
    img: projectPlaceholder,
    group: {
      id: 3,
      name: "Pinned",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Grupos fixados para acesso rápido, com presença constante na navegação principal.",
    },
    category: {
      id: 1,
      name: "Figma",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Complete brand guidelines including typography, color palette, and iconography",
    link: "/projects/10",
  },
  {
    id: 11,
    name: "API Gateway Service",
    img: projectPlaceholder,
    group: {
      id: 4,
      name: "Archived",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Conteúdo histórico mantido apenas para referência e organização do acervo.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "RESTful API gateway with rate limiting and request authentication",
    link: "/projects/11",
  },
  {
    id: 12,
    name: "Weather Forecast App",
    img: projectPlaceholder,
    group: {
      id: 2,
      name: "Recent",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
    },
    category: {
      id: 3,
      name: "HTML + CSS",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Cross-platform weather application with location services and notifications",
    link: "/projects/12",
  },
  {
    id: 13,
    name: "Portfolio Redesign",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 1,
      name: "Figma",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Visual redesign for a personal portfolio with a sharper content hierarchy and stronger brand presence",
    link: "/projects/13",
  },
  {
    id: 14,
    name: "Task Manager SPA",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Single-page task manager with drag and drop columns, filters, and local persistence",
    link: "/projects/14",
  },
  {
    id: 15,
    name: "Landing Page Kit",
    img: projectPlaceholder,
    group: {
      id: 3,
      name: "Pinned",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Grupos fixados para acesso rápido, com presença constante na navegação principal.",
    },
    category: {
      id: 3,
      name: "HTML + CSS",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Responsive marketing page built with semantic HTML, flexbox, and grid-based layouts",
    link: "/projects/15",
  },
  {
    id: 16,
    name: "Inventory API",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "REST API for warehouse inventory control with authentication, pagination, and status tracking",
    link: "/projects/16",
  },
  {
    id: 17,
    name: "Design Tokens Explorer",
    img: projectPlaceholder,
    group: {
      id: 2,
      name: "Recent",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
    },
    category: {
      id: 1,
      name: "Figma",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Documentation workspace for color, spacing, and typography tokens used across the system",
    link: "/projects/17",
  },
  {
    id: 18,
    name: "Customer Portal",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Client portal with account overview, document uploads, and live status updates",
    link: "/projects/18",
  },
  {
    id: 19,
    name: "Email Signature Pack",
    img: projectPlaceholder,
    group: {
      id: 4,
      name: "Archived",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Conteúdo histórico mantido apenas para referência e organização do acervo.",
    },
    category: {
      id: 3,
      name: "HTML + CSS",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Collection of reusable HTML email signatures styled for desktop and mobile clients",
    link: "/projects/19",
  },
  {
    id: 20,
    name: "Order Processing Service",
    img: projectPlaceholder,
    group: {
      id: 3,
      name: "Pinned",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Grupos fixados para acesso rápido, com presença constante na navegação principal.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Background service that handles order events, retries, and integration with payment workflows",
    link: "/projects/20",
  },
  {
    id: 21,
    name: "Mobile Onboarding Flow",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 1,
      name: "Figma",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Prototype for a mobile onboarding journey with guided steps, onboarding cards, and success states",
    link: "/projects/21",
  },
  {
    id: 22,
    name: "Analytics Widgets Library",
    img: projectPlaceholder,
    group: {
      id: 2,
      name: "Recent",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Set of reusable charts, metric cards, and filter components for dashboard experiences",
    link: "/projects/22",
  },
  {
    id: 23,
    name: "Pricing Page Concept",
    img: projectPlaceholder,
    group: {
      id: 4,
      name: "Archived",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Conteúdo histórico mantido apenas para referência e organização do acervo.",
    },
    category: {
      id: 3,
      name: "HTML + CSS",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Static pricing page with comparison tables, emphasis cards, and responsive CTA sections",
    link: "/projects/23",
  },
  {
    id: 24,
    name: "Authentication Gateway",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Token-based authentication gateway with refresh handling and access policy checks",
    link: "/projects/24",
  },
  {
    id: 25,
    name: "Real-time Notification Service",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Pub/sub messaging system with WebSocket support for live updates across multiple clients",
    link: "/projects/25",
  },
  {
    id: 26,
    name: "Component Storybook",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 1,
      name: "Figma",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Interactive component showcase with live previews and documentation for designers and developers",
    link: "/projects/26",
  },
  {
    id: 27,
    name: "Payment Gateway Integration",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Secure payment processing with support for multiple payment methods and currencies",
    link: "/projects/27",
  },
  {
    id: 28,
    name: "Blog Platform",
    img: projectPlaceholder,
    group: {
      id: 2,
      name: "Recent",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Headless CMS-powered blog with markdown support, tagging, and SEO optimization",
    link: "/projects/28",
  },
  {
    id: 29,
    name: "Mobile App Redesign",
    img: projectPlaceholder,
    group: {
      id: 2,
      name: "Recent",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
    },
    category: {
      id: 1,
      name: "Figma",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Complete mobile interface redesign focusing on accessibility and modern aesthetics",
    link: "/projects/29",
  },
  {
    id: 30,
    name: "Database Migration Tool",
    img: projectPlaceholder,
    group: {
      id: 2,
      name: "Recent",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Automated database schema migration with rollback support and data transformation",
    link: "/projects/30",
  },
  {
    id: 31,
    name: "Responsive Email Templates",
    img: projectPlaceholder,
    group: {
      id: 3,
      name: "Pinned",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Grupos fixados para acesso rápido, com presença constante na navegação principal.",
    },
    category: {
      id: 3,
      name: "HTML + CSS",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Fully responsive email template collection for newsletters, promotions, and transactional emails",
    link: "/projects/31",
  },
  {
    id: 32,
    name: "Social Media Dashboard",
    img: projectPlaceholder,
    group: {
      id: 3,
      name: "Pinned",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Grupos fixados para acesso rápido, com presença constante na navegação principal.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Unified dashboard for managing multiple social media accounts and scheduling posts",
    link: "/projects/32",
  },
  {
    id: 33,
    name: "API Documentation Generator",
    img: projectPlaceholder,
    group: {
      id: 3,
      name: "Pinned",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Grupos fixados para acesso rápido, com presença constante na navegação principal.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Automatic API documentation generation from code comments and OpenAPI specifications",
    link: "/projects/33",
  },
  {
    id: 34,
    name: "Legacy System Modernization",
    img: projectPlaceholder,
    group: {
      id: 4,
      name: "Archived",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Conteúdo histórico mantido apenas para referência e organização do acervo.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Refactoring of monolithic application into microservices with improved maintainability",
    link: "/projects/34",
  },
  {
    id: 35,
    name: "Video Streaming Service",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "On-demand video streaming platform with adaptive bitrate and offline playback support",
    link: "/projects/35",
  },
  {
    id: 36,
    name: "Time Tracking Application",
    img: projectPlaceholder,
    group: {
      id: 2,
      name: "Recent",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
    },
    category: {
      id: 3,
      name: "HTML + CSS",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Timesheet management tool with automated invoicing and productivity insights",
    link: "/projects/36",
  },
  {
    id: 37,
    name: "Content Management System",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Headless CMS with multi-language support, custom workflows, and version control",
    link: "/projects/37",
  },
  {
    id: 38,
    name: "Interactive Data Visualization",
    img: projectPlaceholder,
    group: {
      id: 3,
      name: "Pinned",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Grupos fixados para acesso rápido, com presença constante na navegação principal.",
    },
    category: {
      id: 1,
      name: "Figma",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Design system for interactive charts, graphs, and real-time data dashboards",
    link: "/projects/38",
  },
  {
    id: 39,
    name: "File Management System",
    img: projectPlaceholder,
    group: {
      id: 2,
      name: "Recent",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Cloud storage solution with file versioning, collaboration features, and granular permissions",
    link: "/projects/39",
  },
  {
    id: 40,
    name: "Performance Monitoring Tool",
    img: projectPlaceholder,
    group: {
      id: 4,
      name: "Archived",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Conteúdo histórico mantido apenas para referência e organização do acervo.",
    },
    category: {
      id: 3,
      name: "HTML + CSS",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Application performance monitoring with real-time alerts and historical analysis",
    link: "/projects/40",
  },
  {
    id: 41,
    name: "Appointment Booking System",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Scheduling platform with automated reminders, calendar sync, and availability management",
    link: "/projects/41",
  },
  {
    id: 42,
    name: "Inventory Management System",
    img: projectPlaceholder,
    group: {
      id: 2,
      name: "Recent",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Stock tracking system with barcode scanning, automated reordering, and multi-location support",
    link: "/projects/42",
  },
  {
    id: 43,
    name: "Customer Relationship Manager",
    img: projectPlaceholder,
    group: {
      id: 3,
      name: "Pinned",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Grupos fixados para acesso rápido, com presença constante na navegação principal.",
    },
    category: {
      id: 1,
      name: "Figma",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "CRM platform for managing customer interactions, sales pipelines, and support tickets",
    link: "/projects/43",
  },
  {
    id: 44,
    name: "Accessibility Testing Suite",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 3,
      name: "HTML + CSS",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Automated accessibility testing tool for WCAG compliance and assistive technology support",
    link: "/projects/44",
  },
  {
    id: 45,
    name: "Multi-tenant SaaS Platform",
    img: projectPlaceholder,
    group: {
      id: 2,
      name: "Recent",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Scalable SaaS architecture with isolated tenants, custom branding, and flexible billing",
    link: "/projects/45",
  },
  {
    id: 46,
    name: "Progressive Web App",
    img: projectPlaceholder,
    group: {
      id: 1,
      name: "Featured",
      img: categoryPlaceholder,
      icon: pencilLine,
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "PWA with offline support, push notifications, and installable app capabilities",
    link: "/projects/46",
  },
  {
    id: 47,
    name: "Security Audit Framework",
    img: projectPlaceholder,
    group: {
      id: 4,
      name: "Archived",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Conteúdo histórico mantido apenas para referência e organização do acervo.",
    },
    category: {
      id: 4,
      name: "C#",
      img: categoryPlaceholder,
      icon: settings3Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Comprehensive security testing framework with vulnerability scanning and compliance reporting",
    link: "/projects/47",
  },
  {
    id: 48,
    name: "Collaborative Whiteboard",
    img: projectPlaceholder,
    group: {
      id: 3,
      name: "Pinned",
      img: categoryPlaceholder,
      icon: layoutLine,
      description:
        "Grupos fixados para acesso rápido, com presença constante na navegação principal.",
    },
    category: {
      id: 2,
      name: "React",
      img: categoryPlaceholder,
      icon: shape2Line,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Real-time collaborative drawing and brainstorming tool with version history and exports",
    link: "/projects/48",
  },
];

export default projects;
