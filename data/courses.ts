import { CourseCategory } from '../types';

export const courseCategories: {
    id: CourseCategory;
    title: string;
    icon: string;
    color: string;
    borderColorHover: string;
    description: string;
}[] = [
        {
            id: 'pharma',
            title: 'Training & Placement in Pharma',
            icon: 'fas fa-pills',
            color: 'text-purple-500',
            borderColorHover: 'hover:border-purple-500',
            description: 'Gain hands-on experience and career-ready skills through professional pharma training and placement support.',
        },
        {
            id: 'language',
            title: 'Language Courses',
            icon: 'fas fa-language',
            color: 'text-blue-500',
            borderColorHover: 'hover:border-blue-500',
            description: 'Master new languages with interactive lessons and native speaker guidance.',
        },
        {
            id: 'academics',
            title: 'Academic Courses',
            icon: 'fas fa-graduation-cap',
            color: 'text-green-500',
            borderColorHover: 'hover:border-green-500',
            description: 'Strengthen your foundation in core subjects with expert tutoring and resources.',
        },
        {
            id: 'tech',
            title: 'Digital Skills & Tech',
            icon: 'fas fa-laptop-code',
            color: 'text-purple-500',
            borderColorHover: 'hover:border-purple-500',
            description: 'Stay ahead with cutting-edge technology and digital literacy programs.',
        },
        {
            id: 'professional',
            title: 'Professional & Job-Oriented',
            icon: 'fas fa-briefcase',
            color: 'text-orange-500',
            borderColorHover: 'hover:border-orange-500',
            description: 'Develop career-focused skills that employers value in today\'s market.',
        },
    ];

export const allCourses = [
    // Training Courses
    {
        category: 'pharma',
        title: 'B.Pharm Training & Placement',
        icon: 'fas fa-capsules',
        iconColor: 'text-indigo-500',
        borderColorHover: 'hover:border-indigo-500',
        description: 'Comprehensive professional training designed to develop research, manufacturing, and clinical practice skills in pharmacy students.',
        details: ['Industry-oriented laboratory sessions', 'Corporate visit and live company exposure', 'Placement preparation and guidance', 'End-to-end career support and job assistance'],
    },
    {
        category: 'pharma',
        title: 'D.Pharm Training & Placement',
        icon: 'fas fa-prescription-bottle-alt',
        iconColor: 'text-teal-500',
        borderColorHover: 'hover:border-teal-500',
        description: 'Practical diploma-focused sessions emphasizing pharmaceutical formulation, dispensing, and healthcare industry readiness.',
        details: ['On-ground pharmacy practice training', 'Hospital and company field visits', 'Soft skills and resume building support', 'Placement mentoring and interview preparation'],
    },
    {
        category: 'pharma',
        title: 'M.Pharm Training & Placement',
        icon: 'fas fa-flask',
        iconColor: 'text-purple-600',
        borderColorHover: 'hover:border-purple-600',
        description: 'Advanced program connecting research expertise with real-world pharmaceutical industry experience and placement support.',
        details: ['Research and analytical skill development', 'Industry collaborations and lab immersion', 'Professional networking and workshops', 'Final phase placement and recruitment drives'],
    },
    // Language Courses
    {
        category: 'language',
        title: 'English Proficiency',
        icon: 'fas fa-globe-americas',
        iconColor: 'text-blue-600',
        borderColorHover: 'hover:border-blue-600',
        description: 'Master English with comprehensive grammar, vocabulary, and conversation skills.',
        details: ['IELTS/TOEFL preparation', 'Business English communication', 'Interactive speaking sessions', 'Writing and grammar mastery'],
    },
    {
        category: 'language',
        title: 'Creative Writing & Public Speaking',
        icon: 'fas fa-flag',
        iconColor: 'text-red-500',
        borderColorHover: 'hover:border-red-500',
        description: 'Master the art of expression and confidence through engaging sessions.',
        details: ['Story crafting and narrative design', 'Stage performance and articulation', 'Speech structure and delivery', 'Real-world communication practice'],
    },
    {
        category: 'language',
        title: 'Regional Dialect',
        icon: 'fas fa-language',
        iconColor: 'text-green-500',
        borderColorHover: 'hover:border-green-500',
        description: 'Explore the richness of local languages and traditions through immersive learning experiences.',
        details: ['Native pronunciation and expressions', 'Folk stories and oral heritage', 'Cultural customs and practices', 'Interactive speaking sessions'],
    },
    // Academic Courses
    {
        category: 'academics',
        title: 'Advanced Mathematics',
        icon: 'fas fa-calculator',
        iconColor: 'text-blue-500',
        borderColorHover: 'hover:border-blue-500',
        description: 'Strengthen your mathematical foundation from algebra to calculus.',
        details: ['Algebra and geometry mastery', 'Calculus and statistics', 'Problem-solving techniques', 'Exam preparation support'],
    },
    {
        category: 'academics',
        title: 'Science Fundamentals',
        icon: 'fas fa-atom',
        iconColor: 'text-purple-500',
        borderColorHover: 'hover:border-purple-500',
        description: 'Explore physics, chemistry, and biology with hands-on experiments.',
        details: ['Laboratory experiments', 'Scientific method application', 'Research and analysis skills', 'STEM career preparation'],
    },
    {
        category: 'academics',
        title: 'Literature & Writing',
        icon: 'fas fa-book-open',
        iconColor: 'text-indigo-500',
        borderColorHover: 'hover:border-indigo-500',
        description: 'Develop critical thinking and writing skills through literature analysis.',
        details: ['Creative and academic writing', 'Literary analysis techniques', 'Research methodology', 'Public speaking and presentation'],
    },
    // Digital Skills & Tech
    {
        category: 'tech',
        title: 'Web Development',
        icon: 'fas fa-code',
        iconColor: 'text-blue-600',
        borderColorHover: 'hover:border-blue-600',
        description: 'Build modern websites and web applications with cutting-edge technologies.',
        details: ['HTML, CSS, JavaScript mastery', 'React and Node.js development', 'Database design and integration', 'Portfolio project creation'],
    },
    {
        category: 'tech',
        title: 'Data Analytics',
        icon: 'fas fa-chart-line',
        iconColor: 'text-green-600',
        borderColorHover: 'hover:border-green-600',
        description: 'Master data analysis tools and techniques for informed decision making.',
        details: ['Python and R programming', 'Statistical analysis methods', 'Data visualization tools', 'Machine learning basics'],
    },
    {
        category: 'tech',
        title: 'Cybersecurity',
        icon: 'fas fa-shield-alt',
        iconColor: 'text-red-500',
        borderColorHover: 'hover:border-red-500',
        description: 'Protect digital assets with comprehensive cybersecurity knowledge.',
        details: ['Network security fundamentals', 'Ethical hacking techniques', 'Risk assessment and management', 'Industry certification prep'],
    },
    // Professional & Job-Oriented
    {
        category: 'professional',
        title: 'Digital Marketing',
        icon: 'fas fa-bullhorn',
        iconColor: 'text-pink-500',
        borderColorHover: 'hover:border-pink-500',
        description: 'Master modern marketing strategies and grow your business online.',
        details: ['Social media marketing', 'SEO and content strategy', 'Google Ads and analytics', 'Email marketing campaigns'],
    },
    {
        category: 'professional',
        title: 'Project Management',
        icon: 'fas fa-users',
        iconColor: 'text-blue-500',
        borderColorHover: 'hover:border-blue-500',
        description: 'Lead successful projects with proven methodologies and tools.',
        details: ['Agile and Scrum frameworks', 'Risk management strategies', 'Team leadership skills', 'PMP certification preparation'],
    },
    {
        category: 'professional',
        title: 'Business Communication',
        icon: 'fas fa-handshake',
        iconColor: 'text-green-500',
        borderColorHover: 'hover:border-green-500',
        description: 'Enhance your professional communication and presentation skills.',
        details: ['Public speaking confidence', 'Business writing excellence', 'Negotiation techniques', 'Cross-cultural communication'],
    },
];