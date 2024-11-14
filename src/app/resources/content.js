import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mostafa",
  lastName: "Esmaeili",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web & Frontend Developer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Turkish", "Persian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mresmaeili",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/lvlresmaeili",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:lvlr.esmaeili@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Web and Frontend Developer</>,
  subline: (
    <>
      <br /> Experienced web and frontend developer with expertise in:
      <br />
      <InlineCode>HTML</InlineCode> <InlineCode>CSS</InlineCode>
      <InlineCode>JavaScript</InlineCode> <InlineCode>React</InlineCode>
      <InlineCode>Next.js</InlineCode>
      <InlineCode>WordPress</InlineCode>
      <InlineCode>PHP</InlineCode>
      <br />
      <br />
      Proficient in Git for version control and skilled in building dynamic,
      responsive websites, integrating APIs, and optimizing for SEO. Adept at
      delivering high-quality, scalable solutions in collaborative, fast-paced
      environments, with a strong focus on performance, user experience, and
      best coding practices.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/mostafa-esmaeili/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Experienced web and frontend developer with expertise in HTML, CSS,
        JavaScript (ES6+), PHP, React, Next.js, and WordPress. Proficient in Git
        for version control and skilled in building dynamic, responsive
        websites, integrating APIs, and optimizing for SEO. Adept at delivering
        high-quality, scalable solutions in collaborative, fast-paced
        environments, with a strong focus on performance, user experience, and
        best coding practices.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "LARSA LLC",
        timeframe: "2020 - 2024",
        role: "Web and Frontend Developer",
        achievements: [
          <>
            Developed and maintained responsive, high-performance web
            applications using React, Next.js, Tailwind CSS, and Bootstrap,
            enhancing user experience and platform functionality.
          </>,
          <>
            Led projects for dynamic websites and e-commerce platforms on CMS
            platforms including WordPress (ACF, WooCommerce), PrestaShop, and
            Drupal, integrating APIs and advanced features.
          </>,
          <>
            Collaborated within Agile teams using Jira and Git to ensure timely,
            high-quality delivery and managed deployments with Docker, cPanel,
            and Plesk for smooth project launches.
          </>,
        ],
        images: [
          // {
          //   src: "/images/projects/larsa/cover-01.jpg",
          //   alt: "LARSA Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Freelance",
        timeframe: "2018 - 2020",
        role: "Web Developer",
        achievements: [
          <>
            Delivered customized WordPress websites for various clients,
            enhancing their online presence and performance with tailored
            themes, ACF, and optimized plugins.
          </>,
          <>
            Improved user experience by applying responsive design principles
            and ensuring cross-browser compatibility, leading to higher client
            satisfaction.
          </>,
          <>
            Optimized websites for speed and SEO performance, increasing client
            website traffic and engagement.
          </>,
        ],
        images: [
          // {
          //   src: "/images/projects/freelance/cover-01.jpg",
          //   alt: "Freelance Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },

  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "MS Computer Engineering",
        description: <>Beykoz University, Istanbul, Turkey</>,
      },
      {
        name: "BS Information Technology Engineering",
        description: <>Payame Noor University</>,
      },
      {
        name: "Mathematics and Physics",
        description: <>Daneshgah High school</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Proficient in HTML, CSS, Bootstrap, Tailwind CSS, and JavaScript for
            creating responsive, user-friendly interfaces.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/frontend/cover-01.jpg",
          //   alt: "Frontend project",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/frontend/cover-02.jpg",
          //   alt: "Frontend project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "API Integration",
        description: (
          <>
            Experienced in integrating APIs using Postman, Axios, and
            Isomorphic-fetch, along with services like SendGrid and Stripe.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/api/cover-01.jpg",
          //   alt: "API Integration project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "JavaScript Libraries & Frameworks",
        description: (
          <>
            Skilled with React, Next.js, Redux, i18n, jQuery, Swiper, and GSAP
            for advanced front-end functionality and animations.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/libraries/cover-01.jpg",
          //   alt: "JavaScript Libraries project",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/libraries/cover-02.jpg",
          //   alt: "JavaScript Libraries project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "CMS & E-commerce Platforms",
        description: (
          <>
            Experienced with WordPress (Theme Development, ACF, WooCommerce),
            PrestaShop, and Drupal for managing content and e-commerce
            solutions.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/cms/cover-01.jpg",
          //   alt: "CMS project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Backend & Database",
        description: (
          <>
            Knowledgeable in PHP, phpMyAdmin, Express, and MongoDB for backend
            development and database management.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/backend/cover-01.jpg",
          //   alt: "Backend project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Version Control",
        description: (
          <>
            Experienced in using Git and GitLab for version control and
            collaborative project workflows.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/version-control/cover-01.jpg",
          //   alt: "Version Control project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Design Tools",
        description: (
          <>
            Proficient in Figma, Adobe XD, and Illustrator for prototyping,
            design, and UI/UX planning.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/design-tools/cover-01.jpg",
          //   alt: "Design Tools project",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/design-tools/cover-02.jpg",
          //   alt: "Design Tools project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Project Management & Collaboration",
        description: (
          <>
            Skilled in using Jira and Trello for project management and team
            collaboration.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/project-management/cover-01.jpg",
          //   alt: "Project Management project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Hosting & Deployment",
        description: (
          <>
            Experienced in Docker, cPanel, Plesk, and FTP for web hosting,
            deployment, and server management.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/hosting-deployment/cover-01.jpg",
          //   alt: "Hosting and Deployment project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
