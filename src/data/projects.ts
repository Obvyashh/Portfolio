export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  featured: boolean;
  featuredTag?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Visit Tracking System",
    description:
      "Built a comprehensive visit management platform featuring multi-step approval workflows, secure JWT authentication, and SQL Server-backed data pipelines. Developed RESTful API endpoints for scheduling, status updates, and reporting, reducing manual tracking effort for operational teams.",
    tech: [
      "SQL Server",
      "REST APIs",
      "JWT Authentication",
      "Data Pipelines",
    ],
    github: "",
    live: "",
    image: "/projects/visit-tracking.png",
    featured: true,
    featuredTag: "Backend System",
  },
  {
    id: 2,
    title: "Production Management System",
    description:
      "Developed workflow automation and inventory management features using ASP.NET Core and React.js, streamlining production floor operations. Integrated backend data services to synchronize real-time inventory updates and generate production reports.",
    tech: [
      "ASP.NET Core",
      "React.js",
      "Workflow Automation",
      "Real-time Sync",
    ],
    github: "",
    live: "",
    image: "/projects/production-management.png",
    featured: true,
    featuredTag: "Full Stack Platform",
  },
  {
    id: 3,
    title: "CRM System",
    description:
      "Implemented full CRUD operations for customer management with secure role-based authentication, improving customer data accessibility for sales teams. Designed and integrated backend APIs for customer profiling, interaction history, and search functionality.",
    tech: [
      "Role-based Auth",
      "CRUD Operations",
      "Backend APIs",
      "Search Engine",
    ],
    github: "",
    live: "",
    image: "/projects/crm-system.png",
    featured: true,
    featuredTag: "Enterprise Software",
  },
  {
    id: 4,
    title: "PPT Maker Web Application",
    description:
      "Built a full-stack web application enabling users to create, manage, and export presentations with a dynamic React.js frontend and ASP.NET Core backend.",
    tech: [
      "React.js",
      "ASP.NET Core",
      "Dynamic Rendering",
      "Export Systems",
    ],
    github: "",
    live: "",
    image: "/projects/ppt-maker.png",
    featured: true,
    featuredTag: "Web Application",
  },
];
