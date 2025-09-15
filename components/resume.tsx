import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";
import {
	SiCplusplus,
	SiJavascript,
	SiTypescript,
	SiPython,
	SiHtml5,
	SiCss3,
	SiMysql,
	SiReact,
	SiNodedotjs,
	SiExpress,
	SiFlask,
	SiTailwindcss,
	SiAmazonaws,
	SiMicrosoftazure,
	SiGooglecloud,
	SiMongodb,
	SiTensorflow,
	SiPytorch,
	SiScikitlearn,
	SiPandas,
	SiNumpy,
	SiGit,
	SiGithub,
	SiVisualstudiocode,
	SiDocker,
	SiLinux,
	SiPostman,
	SiFigma,
	SiOpenai,
	SiThreedotjs,
	SiNextdotjs,
	SiNetlify,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaCog, FaLaptopCode, FaBrain, FaProjectDiagram } from "react-icons/fa";

import { socialMedia } from "@/data";
import { MagicButton } from "@/components/ui/magic-button";


export const Resume = () => {
	const education = [
		{
			institution: "National Institute of Technology, Meghalaya",
			degree: "Bachelor of Technology in Computer Science and Engineering",
			duration: "2022 - 2026",
			location: "Cherrapunji, Meghalaya",
		},
	];

	const experience = [
{
    company: "Meghalaya Police – COPS-TAC",
    position: "Cybersecurity Intern",
    duration: "June 2025 – July 2025",
    location: "Shillong, India",
    responsibilities: [
    "Performed vulnerability assessments and hardened Linux servers to improve system resilience.",
    "Developed security solutions, including a browser extension for access control and endpoint monitoring.",
    "Monitored live network traffic and detected potential threats using Wireshark and IDS tools.",
    "Assisted in drafting security policies and best practices for internal system usage.",
    "Collaborated with senior security officers to analyze incident reports and propose mitigations.",
    ],
},
{
    company: "Bluestock Fintech",
    position: "Software Development Engineer Intern",
    duration: "May 2025 – June 2025",
    location: "Remote",
    responsibilities: [
    "Contributed to back-end systems, API integration, and cloud-native fintech solutions.",
    "Assisted in designing RESTful APIs for transaction processing and user management.",
    "Worked on improving database queries, reducing response latency by optimizing SQL joins.",
    "Implemented secure authentication flows using JWT and OAuth 2.0 standards.",
    "Collaborated with front-end engineers to ensure seamless data exchange between services.",
    ],
},
{
    company: "C-DAC, Noida",
    position: "Ethical Hacking & Penetration Testing Intern",
    duration: "June 2024 – July 2024",
    location: "Noida, India",
    responsibilities: [
    "Completed training and virtual internship on Ethical Hacking and Penetration Testing under the Cyber Gyan Project.",
    "Worked with penetration testing tools including Metasploit, Wireshark, Nmap, and Kali Linux.",
    "Performed reconnaissance and vulnerability scanning on simulated enterprise networks.",
    "Exploited vulnerabilities in controlled environments to demonstrate real-world attack scenarios.",
    "Prepared detailed reports with remediation strategies to mitigate discovered risks.",
    ],
},
];


	const projects = [
		{
			title: "Health_Tracker",
			technologies: [
    { name: "React.js", icon: <SiReact className="w-4 h-4" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
    { name: "Redux Toolkit", icon: <SiJavascript className="w-4 h-4" /> }, // Using JS icon as a placeholder
    { name: "TailwindCSS", icon: <SiTailwindcss className="w-4 h-4" /> },
    { name: "Vite", icon: <SiJavascript className="w-4 h-4" /> }, // Using JS icon as a placeholder
    { name: "Flask", icon: <SiFlask className="w-4 h-4" /> },
    { name: "Azure OpenAI", icon: <SiOpenai className="w-4 h-4" /> },
    { name: "Three.js", icon: <SiThreedotjs className="w-4 h-4" /> },
],
			links: {
				github: "https://github.com/PremKrGuptaOp/health_tracker",
				demo: "https://health-tracker-iota-nine.vercel.app/",
			},
			description: [
    "Developed a Health Tracker web application to provide personalized health insights and wellness recommendations to users.",
    "Built a responsive and dynamic frontend using React 18 with state management via Redux Toolkit.",
    "Styled the UI using TailwindCSS for a clean, modern, and customizable design.",
    "Optimized development and build process using Vite for fast performance and efficient bundling.",
    "Implemented features for tracking activities, sleep, calories, and health anomalies to help users monitor their wellness effectively.",
],

		},
		{
			title: "Personal Portfolio Website",
			technologies: [
				{ name: "React.js", icon: <SiReact className="w-4 h-4" /> },
				{ name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" /> },
				{ name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4" /> },
				{ name: "Three.js", icon: <SiThreedotjs className="w-4 h-4" /> },
			],
			links: {
				live: "https://prem-kr-gupta-dev.vercel.app/",
				github: "https://github.com/PremKrGuptaOp/PremKrGupta_dev",
			},
			description: [
				"Constructed a full-stack interactive portfolio using Next.js and Three.js, achieving 95+ scores on Google Lighthouse for performance and accessibility; deployed via GitHub-integrated CI/CD pipeline on Netlify.",
				"Composed immersive 3D visuals and interactive animations using Three.js, optimizing rendering performance across 10+ device breakpoints for a seamless user experience.",
				"Integrated comprehensive SEO enhancements and responsive design principles, resulting in 40% faster load times and significantly improved user engagement metrics.",
			],
		},
	];

	const technicalSkills = {
		"CS Fundamentals": [
			{
				name: "Data Structures",
				icon: <FaProjectDiagram className="w-5 h-5" />,
			},
			{ name: "Algorithms", icon: <FaBrain className="w-5 h-5" /> },
			{ name: "OOP", icon: <FaLaptopCode className="w-5 h-5" /> },
			{ name: "Operating Systems", icon: <FaCog className="w-5 h-5" /> },
		],
		Languages: [
			{ name: "C++", icon: <SiCplusplus className="w-5 h-5" /> },
			{ name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
			{ name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
			{ name: "Python", icon: <SiPython className="w-5 h-5" /> },
			{ name: "Java", icon: <FaJava className="w-5 h-5" /> },
			{ name: "HTML", icon: <SiHtml5 className="w-5 h-5" /> },
			{ name: "CSS", icon: <SiCss3 className="w-5 h-5" /> },
			{ name: "SQL", icon: <SiMysql className="w-5 h-5" /> },
		],
		"Frameworks/Libraries": [
			{ name: "React.js", icon: <SiReact className="w-5 h-5" /> },
			{ name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
			{ name: "Express.js", icon: <SiExpress className="w-5 h-5" /> },
			{ name: "Flask", icon: <SiFlask className="w-5 h-5" /> },
			{ name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
		],
		"Cloud/Databases": [
			{ name: "AWS", icon: <SiAmazonaws className="w-5 h-5" /> },
			{ name: "Azure", icon: <SiMicrosoftazure className="w-5 h-5" /> },
			{ name: "GCP", icon: <SiGooglecloud className="w-5 h-5" /> },
			{ name: "MySQL", icon: <SiMysql className="w-5 h-5" /> },
			{ name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
		],
		"ML/AI": [
			{ name: "Azure OpenAI", icon: <SiOpenai className="w-5 h-5" /> },
			{ name: "GPT-4.1", icon: <SiOpenai className="w-5 h-5" /> },
			{ name: "TensorFlow", icon: <SiTensorflow className="w-5 h-5" /> },
			{ name: "PyTorch", icon: <SiPytorch className="w-5 h-5" /> },
			{ name: "Scikit-learn", icon: <SiScikitlearn className="w-5 h-5" /> },
			{ name: "Pandas", icon: <SiPandas className="w-5 h-5" /> },
			{ name: "NumPy", icon: <SiNumpy className="w-5 h-5" /> },
		],
		"Tools & DevOps": [
			{ name: "Git", icon: <SiGit className="w-5 h-5" /> },
			{ name: "GitHub", icon: <SiGithub className="w-5 h-5" /> },
			{ name: "VS Code", icon: <SiVisualstudiocode className="w-5 h-5" /> },
			{ name: "Docker", icon: <SiDocker className="w-5 h-5" /> },
			{ name: "Linux", icon: <SiLinux className="w-5 h-5" /> },
			{ name: "Postman", icon: <SiPostman className="w-5 h-5" /> },
			{ name: "Figma", icon: <SiFigma className="w-5 h-5" /> },
		],
	};

		const achievements = [
		"NIT Meghalaya Hackathon 2023 — designed a healthcare data management system.",
		"Flipkart Grid 6.0 (2024) — solved real-world algorithmic and system design problems.",
		"Solved 300+ problems on LeetCode; specialized in arrays, recursion, and dynamic programming.",
		"Active Head of coding clubs and peer programming groups at NIT Meghalaya.",
		"Technical Fest Achievements: 1st in RoboRumble & Goal Against Time; 2nd in RoboDiction & Drone Racing.",
		"SAC Committee Award — recognition for outstanding contribution as Publicity Coordinator.",
	];



	return (
		<section id="resume" className="py-20">
			<div className="max-w-4xl mx-auto">
				<div className="flex justify-between items-center mb-12">
					<h1 className="heading">
						My <span className="text-purple">Resume</span>
					</h1>

					<Link href="PremCV_latest.pdf" target="_blank" rel="noreferrer noopener">
						<MagicButton
							title="Resume"
							icon={<FaDownload />}
							position="right"
							asChild
						/>
					</Link>
				</div>

				<div className="space-y-12">
					{/* Personal Info */}
					<div className="text-center border-b border-white/[0.1] pb-8">
						<h2 className="text-4xl font-bold text-white mb-2">
							Prem Kumar Gupta
						</h2>
						<p className="text-lg text-white-200 mb-4">
							Computer Science Student & Full Stack Developer
						</p>
						<div className="flex justify-center space-x-6 text-white-200 flex-wrap">
							<span>📧 pg8231842@gmail.com</span>
							<span>📍 Tura, Meghalaya</span>
						</div>
						<div className="flex justify-center space-x-4 mt-4 flex-wrap">
							<Link
								href="https://www.linkedin.com/in/prem-kumar-gupta-a7101726b"
								target="_blank"
								rel="noreferrer noopener"
								className="text-purple hover:text-white-100 transition-colors"
							>
								LinkedIn
							</Link>
							<Link
								href="https://github.com/PremKrGuptaOp"
								target="_blank"
								rel="noreferrer noopener"
								className="text-purple hover:text-white-100 transition-colors"
							>
								GitHub
							</Link>
							{/* <Link
								href="https://leetcode.com/UserName"
								target="_blank"
								rel="noreferrer noopener"
								className="text-purple hover:text-white-100 transition-colors"
							>
								LeetCode
							</Link>
							<Link
								href="https://www.geeksforgeeks.org/user/"
								target="_blank"
								rel="noreferrer noopener"
								className="text-purple hover:text-white-100 transition-colors"
							>
								GeeksforGeeks
							</Link> */}
						</div>
					</div>

					{/* Education */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">Education</h3>
						<div className="space-y-4">
							{education.map((edu, index) => (
								<div key={index} className="border-l-2 border-purple pl-6">
									<h4 className="text-xl font-semibold text-white">
										{edu.degree}
									</h4>
									<p className="text-white-200 mb-1">{edu.institution}</p>
									<div className="flex justify-between text-white-100 flex-wrap">
										<span>{edu.duration}</span>
										<span>{edu.location}</span>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Work Experience */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">Experience</h3>
						<div className="space-y-8">
							{experience.map((exp, index) => (
								<div key={index} className="border-l-2 border-purple pl-6">
									<div className="flex justify-between items-start mb-2 flex-wrap">
										<div>
											<h4 className="text-xl font-semibold text-white">
												{exp.position}
											</h4>
											<p className="text-white-200">{exp.company}</p>
										</div>
										<div className="text-right text-white-100">
											<p>{exp.duration}</p>
											<p>{exp.location}</p>
										</div>
									</div>
									<ul className="space-y-2 text-white-100">
										{exp.responsibilities.map((responsibility, idx) => (
											<li key={idx} className="flex items-start">
												<span className="text-purple mr-2 mt-1">•</span>
												<span className="leading-relaxed">
													{responsibility}
												</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					{/* Projects */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">Projects</h3>
						<div className="space-y-8">
							{projects.map((project, index) => (
								<div key={index} className="border-l-2 border-purple pl-6">
									<div className="flex justify-between items-start mb-3 flex-wrap">
										<h4 className="text-xl font-semibold text-white">
											{project.title}
										</h4>
										<div className="flex space-x-4">
											{project.links.github && (
												<Link
													href={project.links.github}
													target="_blank"
													rel="noreferrer noopener"
													className="text-purple hover:text-white-100 transition-colors"
												>
													GitHub
												</Link>
											)}
											{project.links.demo && (
												<Link
													href={project.links.demo}
													target="_blank"
													rel="noreferrer noopener"
													className="text-purple hover:text-white-100 transition-colors"
												>
													Demo
												</Link>
											)}
											{project.links.live && (
												<Link
													href={project.links.live}
													target="_blank"
													rel="noreferrer noopener"
													className="text-purple hover:text-white-100 transition-colors"
												>
													Live
												</Link>
											)}
										</div>
									</div>
									<div className="flex flex-wrap gap-3 mb-4">
										{project.technologies.map((tech, idx) => (
											<div
												key={idx}
												className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#10132e] to-[#1a1a3e] text-white-100 rounded-lg border border-white/[0.1] hover:border-purple/50 transition-all duration-300 hover:scale-105"
											>
												<span className="text-purple">{tech.icon}</span>
												<span className="text-sm font-medium">{tech.name}</span>
											</div>
										))}
									</div>
									<ul className="space-y-2 text-white-100">
										{project.description.map((desc, idx) => (
											<li key={idx} className="flex items-start">
												<span className="text-purple mr-2 mt-1">•</span>
												<span className="leading-relaxed">{desc}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					{/* Technical Skills */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-8">
							Technical Skills
						</h3>
						<div className="space-y-8">
							{Object.entries(technicalSkills).map(([category, skills]) => (
								<div key={category}>
									<h4 className="text-xl font-semibold text-white mb-4">
										{category}
									</h4>
									<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
										{skills.map((skill) => (
											<div
												key={skill.name}
												className="flex flex-col items-center p-4 bg-gradient-to-br from-[#0f0f23] via-[#16213e] to-[#0f0f23] rounded-xl border border-white/[0.1] hover:border-purple/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple/20 group"
											>
												<div className="text-purple group-hover:text-white transition-colors duration-300 mb-2">
													{skill.icon}
												</div>
												<span className="text-sm text-white-100 text-center font-medium">
													{skill.name}
												</span>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Accomplishments & Leadership */}
					<div>
						<h3 className="text-2xl font-bold text-purple mb-6">
							Accomplishments & Leadership
						</h3>
						<div className="grid grid-cols-1 gap-4">
							{achievements.map((achievement, index) => (
								<div
									key={index}
									className="flex items-start p-4 bg-black-200 rounded-lg border border-white/[0.1]"
								>
									<span className="text-purple text-lg mr-3 flex-shrink-0 -mt-1">
										•
									</span>
									<span className="text-white-100 leading-relaxed">
										{achievement}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
