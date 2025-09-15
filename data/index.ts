import { links } from "@/config";

export const navItems = [
	{ name: "Home", link: "#" },
	{ name: "Experience", link: "#experience" },
	{ name: "Projects", link: "#projects" },
	{ name: "Resume", link: "#resume" },
	{ name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
	{
		id: 1,
		title:
			"I believe in collaborative learning and effective team communication",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "Eager to learn and contribute to innovative projects",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for DSA, Dev & AI/ML.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "Currently deep diving into GenAI",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Ready to bring fresh ideas to your team?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
] as const;

export const projects = [
	{
		id: 1,
		title: "Health_Tracker",
		des: "A responsive React-based health tracking web app with data visualization, form handling, and smooth animations.",
		img: "/project1.svg",
		iconLists: ["/py.png", "/re.svg", "/ts.svg", "/three.svg", "/tail.svg"],
		sourceCode: "https://github.com/PremKrGuptaOp/health_tracker",
		demoLink: "https://health-tracker-iota-nine.vercel.app/",
	},
	{
		id: 2,
		title: "Portfolio Website",
		des: "A personal developer portfolio designed to showcase my journey, projects, skills, and technical growth. Built using React.js, Next.js, Three.js, and Tailwind CSS with smooth animations, bento-style layout, and dynamic 3D elements.",
		img: "/project5.svg",
		iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/three.svg", "/tail.svg"],
		sourceCode: "https://github.com/PremKrGuptaOp/PremKrGupta_dev",
		liveLink: "https://prem-kr-gupta-dev.vercel.app/",
	},
	// {
	// 	id: 3,
	// 	title: "BuzzHive",
	// 	des: "An AI-powered social media analytics platform designed to help content creators, marketers, and brands optimize their content strategy through actionable insights and real-time data using machine learning and NLP.",
	// 	img: "/project3.svg",
	// 	iconLists: ["/ts.svg", "/py.png", "/re.svg", "/tail.svg", "/vs.png"],
	// 	sourceCode: "https://github.com//BuzzHive",
	// },
	// {
	// 	id: 4,
	// 	title: "MLSA IIIT Dharwad Website",
	// 	des: "Official web platform for the MLSA Chapter at IIIT Dharwad, providing students with access to curated learning resources, community updates, event announcements, and guidance related to the Microsoft Learn Student Ambassador program.",
	// 	img: "/project4.svg",
	// 	iconLists: ["/re.svg", "/tail.svg", "/next.svg", "/ts.svg", "/vs.png"],
	// 	sourceCode: "https://github.com//MLSA_IIITDWD",
	// 	liveLink: "https://.github.io/MLSA_IIITDWD",
	// },
	// {
	// 	id: 5,
	// 	title: "PowerUPResume (PUR)",
	// 	des: "An intelligent resume analysis platform that leverages advanced NLP algorithms and industry-driven heuristics to evaluate resumes beyond basic formatting, providing detailed insights into job-role compatibility and technical keyword density.",
	// 	img: "/project2.svg",
	// 	iconLists: ["/py.png", "/next.svg", "/re.svg", "/tail.svg", "/vs.png"],
	// 	sourceCode: "https://github.com//PowerUpResume",
	// },
] as const;

export const testimonials = [
	{
		quote: 'Engaged in high-level competitive play in Battlegrounds Mobile India, consistently achieving top-tier ranks. As the designated In-Game Leader (IGL) for a 4-person squad, I was responsible for developing adaptive strategies, analyzing opponent positioning, and making critical real-time decisions under pressure. This role honed my skills in leadership, clear communication, and collaborative problem-solving within a fast-paced, goal-oriented environment. • Achieved 1st place in two official college-level gaming tournaments.',
	name: "Krafton - BGMI",
	title: "Competitive Gaming & Strategic Analysis",
		image: "/bgmi-logo.jpg",
	},

	{
		quote: `I’ve actively contributed to impactful community service initiatives such as tree plantation drives, cleanliness campaigns, and awareness programs on environmental sustainability and digital safety. Through these activities, I’ve gained valuable experience in teamwork, leadership, event coordination, and community engagement.`,
		name: "National Service Scheme (NSS)",
		title: "Student Volunteer",
		image: "/NSSf.svg",
	},

	{
		quote: `Achieved top positions🏆 in multiple technical fest competitions, including 1st place in RoboRumble and Goal Against Time, and 2nd place in RoboDiction and Drone Racing. These experiences strengthened my problem-solving, robotics, and teamwork skills under competitive environments.`,
		name: "NIT Meghalaya",
		title: "Robotics & Technical Competitions",
		image: "/NITM.png",
	},

	{
		quote: `Achieved the Oracle Cloud Infrastructure 2025 Generative AI Professional certification, demonstrating expertise in leveraging OCI's powerful suite of AI services. The certification covered foundational large language models (LLMs), advanced prompt engineering techniques, and the practical application of the OCI Generative AI service using models from Cohere and Llama. This accomplishment solidifies my skills in designing and deploying enterprise-grade generative AI solutions, marking a key advancement in my cloud and AI capabilities.`,
		name: "Oracle",
		title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
		image: "/Oracle-Symbol.png",
	},

	{
		quote: `As the Development Head of the Coding Club, I’ve led multiple projects, organized coding sessions, and guided juniors in building real-world applications. I actively contributed to fostering a collaborative learning environment, improving problem-solving skills, and encouraging peers to participate in hackathons and coding competitions.`,
		name: "NIT Meghalaya",
		title: "Head of Development | Coding Club",
		image: "/codingclub.png",
	},
] as const;

export const workExperience = [
{
    id: 1,
    title: "Software Development Engineer Intern | Bluestock Fintech",
    desc: "Contributed to backend systems, API integration, and cloud-native fintech solutions. Designed scalable modules to optimize data processing pipelines and improve system efficiency.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
},
{
    id: 2,
    title: "Cybersecurity Intern | Meghalaya Police – COPS-TAC",
    desc: "Performed vulnerability assessments and hardened Linux servers. Built security solutions, including a browser extension for access control and endpoint monitoring.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
},
{
    id: 3,
    title: "Ethical Hacking & Penetration Testing Intern | C-DAC, Noida",
    desc: "Completed training and a virtual internship under the Cyber Gyan Project. Gained hands-on experience with Metasploit, Wireshark, Nmap, and Kali Linux for penetration testing and threat analysis.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
},
] as const;


export const socialMedia = [
	{
		name: "GitHub",
		img: "/git.svg",
		link: "https://github.com/PremKrGuptaOp",
	},
	{
		name: "X",
		img: "/twit.svg",
		link: "https://x.com/Prem_Kr_Gupta",
	},
	{
		name: "LinkedIn",
		img: "/link.svg",
		link: "https://www.linkedin.com/in/prem-kumar-gupta-a7101726b",
	},
	{
		name: "Instagram",
		img: "/insta.svg",
		link: "https://www.instagram.com/premkrgupta.dev",
	},
	// {
	// 	name: "LeetCode",
	// 	img: "/lc.png",
	// 	link: "https://leetcode.com/",
	
	// },
	// {
	// 	name: "GeeksforGeeks",
	// 	img: "/gfg.png",
	// 	link: "https://www.geeksforgeeks.org/user//",
	// },
] as const;

export const techStack = {
	stack1: ["React", "Node.js", "MongoDB"],
	stack2: ["Express", "Typescript", "Python"],
} as const;
