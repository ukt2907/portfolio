export const techCardsItems = [
    {
      name: "TypeScript",
      description: "JavaScript but better",
      imageUrl: "/imgs/logos/typescript.svg",
      bgColor: "bg-[#3178C6]/20",
    },
    {
      name: "React",
      description: "JavaScript Library",
      imageUrl: "/imgs/logos/react.svg",
      bgColor: "bg-[#61DAFB]/20",
    },
    {
      name: "NextJS",
      description: "React framework",
      imageUrl: "/imgs/logos/nextjs.svg",
      bgColor: "bg-white/60",
    },
    {
        name: "Docker",
        description: "Deployment Tool",
        imageUrl: "/imgs/logos/docker.svg",
        bgColor: "bg-[#0288D1]/20",
      },
      {
        name: "Prisma",
        description: "ORM for SQL",
        imageUrl: "/imgs/logos/prisma.svg.svg",
        bgColor: "bg-white/60",
      }, 
       
    {
        name: "Javascript",
        description: "React framework",
        imageUrl: "/imgs/logos/javaScript.svg",
        bgColor: "bg-[#FFD600]/20",
      },
    {
      name: "Tailwind",
      description: "CSS framework",
      imageUrl: "/imgs/logos/tailwind.svg",
      bgColor: "bg-[#0EA5E9]/20",
    },
    {
      name: "Git",
      description: "Version control",
      imageUrl: "/imgs/logos/git.svg",
      bgColor: "bg-[#F1502F]/20",
    }
  ];


  export const portfolioProjects = [
    {
      id: "shoptidy",
      heading: "Shoptidy",
      subheading: "a modern e-commerce website",
      description:
        "A modern website with all ecommerce functionalities. It includes features like product browsing, shopping cart, user authentication, ordering a product... The application is developed with react + typescript for frontend part, and Supabase as backend.",
      imageUrl: "/imgs/projects/portfolio-mockup2.png",
      techStack: [
        "TypeScript",
        "React",
        "Redux",
        "Supabase",
        "TailwindCSS",
        "shadcn/ui",
      ],
      liveDemoUrl: "https://shoptidy.vercel.app",
      sourceCodeUrl: "https://github.com/andrijaweb/ecommerce-app",
    },
    {
      id: "socialsphere",
      heading: "SocialSphere",
      subheading: "connect with your friends online",
      description:
        "Beautifully designed social media application with all functionalities of modern social app. Users can create, edit, and delete posts, as well as explore posts from others. The app features profile management where users can view and edit their profiles, and also save posts for later.",
      imageUrl: "/imgs/projects/portfolio-mockup1.png",
      techStack: [
        "JavaScript",
        "React",
        "CRUD",
        "Appwrite",
        "TailwindCSS",
        "TanStack",
      ],
      liveDemoUrl: "https://socialspherenetwork.vercel.app",
      sourceCodeUrl: "https://github.com/andrijaweb/socialmedia-reactapp",
    },
    {
      id: "nextcut",
      heading: "NextCut",
      subheading: "a fresh cut in a few clicks",
      description:
        "A responsive web application designed to schedule and manage barber appointments. Potentional customers can create their account and schedule a new haircut. There is clearly defined period of time that is awailable for bookings. Admin have information about all appointments on dashboard page, and he is able to manage them in few clicks.",
      imageUrl: "/imgs/projects/portfolio-mockup3.jpg",
      techStack: [
        "TypeScript",
        "NextJS",
        "Appwrite",
        "TailwindCSS",
        "Advanced forms",
      ],
      liveDemoUrl: "https://nextcut.vercel.app",
      sourceCodeUrl: "https://github.com/andrijaweb/nextCut-app",
    },
  ];
  