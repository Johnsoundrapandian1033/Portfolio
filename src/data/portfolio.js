export const profile = {
  name: 'John Soundrapandian',
  role: 'Java Developer',
  tagline: 'Spring Boot · REST APIs · Microservices · AngularJS · PostgreSQL',
  location: 'Chennai, India',
  phone: '9361734589',
  email: 'ijohnsoundrapandian@gmail.com',
  linkedin: 'https://linkedin.com/in/johnsoundrapandian',
  github: 'https://github.com/johnsoundrapandian1033',
  leetcode: 'https://leetcode.com/johnsoundrapandian1033',
  resumeFile: '/John_Soundrapandian_Resume.pdf',
  photo: '/john-transparent.png',
  summary:
    "Java Developer with 8 months of hands-on experience building scalable enterprise applications in the shipping domain using Java 8, Spring Boot, Spring MVC, Spring Security, AngularJS, PostgreSQL and RESTful APIs. Designed and shipped 50+ REST APIs and 20+ UI modules, and improved booking efficiency by 8% through workflow and query optimization. Strong in OOP, Collections, Multithreading, Design Patterns and SOLID principles. Immediate joiner, based in Chennai.",
}

export const stats = [
  { value: 50, suffix: '+', label: 'REST APIs shipped' },
  { value: 20, suffix: '+', label: 'UI modules built' },
  { value: 8, suffix: '%', label: 'Booking efficiency gained' },
  { value: 750, suffix: '+', label: 'LeetCode problems solved' },
]

export const skillGroups = [
  {
    label: 'Languages',
    items: [
      { name: 'Java 8+', level: 90 },
      { name: 'JavaScript (ES6+)', level: 75 },
      { name: 'Python', level: 65 },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Spring Boot 3.x', level: 88 },
      { name: 'Spring MVC / Security', level: 82 },
      { name: 'REST APIs & Microservices', level: 88 },
      { name: 'Hibernate / JPA', level: 78 },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'AngularJS 1.x', level: 80 },
      { name: 'ReactJS', level: 65 },
      { name: 'HTML5 / CSS3 / Bootstrap', level: 78 },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'PostgreSQL 14', level: 82 },
      { name: 'MySQL', level: 78 },
    ],
  },
  {
    label: 'Tools & Concepts',
    items: [

  { name: 'Git · GitHub · CVS', level: 80 },
  { name: 'Postman · EmailJS', level: 82 },
  { name: 'Visual Studio Code', level: 90 },
  { name: 'IntelliJ IDEA · Eclipse', level: 85 },
  { name: 'MySQL Workbench', level: 80 },
  { name: 'OOP · Collections Framework', level: 90 },
  { name: 'SOLID · Design Patterns', level: 75 },
  { name: 'Agile · SDLC · CI/CD', level: 75 }
]
  },
]

export const experience = [
  {
    role: 'Java Developer',
    company: 'Paragon Dynamics Info System',
    location: 'Chennai, Tamil Nadu',
    start: 'Apr 2025',
    end: 'Dec 2025',
    manifestNo: 'RT-001',
    points: [
      'Built and deployed 50+ RESTful APIs for shipment booking, rate calculation and loading workflows using Java 8 and Spring Boot 3.x.',
      'Improved booking operation efficiency by 8% through API workflow optimization and PostgreSQL query tuning with proper indexing.',
      'Developed 20+ dynamic UI screens using AngularJS across booking and CRM modules, improving usability and reducing user errors.',
      'Implemented Spring Security with JWT-based authentication, structured validation and robust exception handling for production reliability.',
      'Owned core modules — booking, pre-booking, transshipment — end-to-end, from requirement analysis through deployment.',
      'Integrated Git-based version control and followed Agile/Scrum practices across multiple feature branches.',
    ],
  },
]

export const projects = [
  {
    id: '001',
    title: 'Course Registration System',
    dates: 'Jan 2025 – Feb 2025',
    status: 'Delivered',
    stack: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JavaScript', 'HTML', 'CSS'],
    description:
      'Backend system for student enrollment, course allocation and academic scheduling with full CRUD operations and MySQL persistence.',
    points: [
      'Designed REST-based workflows for student registration, course assignment and accurate record maintenance.',
      'Integrated backend services with the frontend via REST APIs for seamless real-time communication.',
    ],
    github: 'https://github.com/Johnsoundrapandian1033/Course-Registeration-System',
  },
  {
    id: '002',
    title: 'Online Product Delivery System',
    dates: 'Apr 2024 – May 2024',
    status: 'Delivered',
    stack: ['Core Java', 'OOP', 'Collections', 'Multithreading'],
    description:
      'Product management system for catalog operations, customer registration and order processing, built entirely in core Java.',
    points: [
      'Implemented product ordering workflows, payment selection and order tracking using OOP principles and Java Collections.',
      'Used Java multithreading to simulate order-processing stages and manage concurrent order execution efficiently.',
    ],
    github: 'https://github.com/Johnsoundrapandian1033/Online-Product-Delivery',
  },
  {
  id: '003',
  title: 'GM Groups Corporate Website',
  dates: 'Jun 2026 – Present',
  status: 'Live',
  stack: ['React JS', 'Bootstrap', 'EmailJS', 'React Router'],
  description:
    'A modern, responsive corporate website developed for GM Groups to showcase real estate services, improve online presence, and generate customer enquiries.',
  points: [
    'Designed responsive pages for Home, About, Real Estate, Hotel Management, Manpower Consultancy, and Contact.',
    'Integrated EmailJS contact form, WhatsApp, Google Maps, smooth scrolling, SEO-friendly structure, and mobile-first responsive design.',
  ],
  github: 'https://github.com/Johnsoundrapandian1033/GM-Groups',
  live: 'https://gm-groups.vercel.app/',
},
]

export const achievements = [
  {
    title: '750+ LeetCode Problems',
    detail: 'Arrays, Linked List, BST, Dynamic Programming, Backtracking, Sliding Window.',
  },
  {
    title: 'Self-Taught Engineer',
    detail: 'Built expertise in Spring Boot, SQL and web technologies through hands-on project work.',
  },
  {
    title: 'Production Impact, Month One',
    detail: 'Contributed to a real-time enterprise shipping application within the first month of joining.',
  },
]

export const education = {
  degree: 'Bachelor of Engineering (B.E.)',
  school: 'Thanthai Periyar Government Institute of Technology',
  location: 'Tamil Nadu, India',
  cgpa: '7.46 / 10.0',
  years: '2019 – 2023',
}

export const navLinks = [
  { method: 'GET', path: '/about', label: 'About', target: 'about' },
  { method: 'GET', path: '/work', label: 'Experience', target: 'experience' },
  { method: 'GET', path: '/projects', label: 'Projects', target: 'projects' },
  { method: 'GET', path: '/skills', label: 'Skills', target: 'skills' },
  { method: 'POST', path: '/contact', label: 'Contact', target: 'contact' },
]

export const dsaCon = [
  "Array", "String","Hash Table","Bit Manupulation","Stack", "Queue", "Sliding Window","Prefix Sum","Two Pointer","Linked List",
  "Array List","Recursion","Backtracking","Greedy","Dynamic Programming","Binary Search","BST"
]