import "./project.css";
import Link from "next/link";

export default function Projects() {
    const projectList = [
        {
        title: "Portfolio Website",
        description: "A personal portfolio built with Next.js and CSS.",
        link: "https://portfolio-two-nu-86.vercel.app/"
        },
        {
        title: "Wallet System",
        description: "A digital wallet system that securely stores users' payment information, facilitates transactions, and offers features like budgeting tools, transaction history, and rewards tracking.",
        link: "#"
        },
        {
        title: "ToDo Task Manager",
        description: "A smart to-do list application that helps users organize tasks with features like priority setting, deadline reminders, and collaborative sharing for enhanced productivity.",
        link: "#"
        },
        {
        title: "Simple Calculator",
        description: "A straightforward calculator application that performs basic arithmetic operations like addition, subtraction, multiplication, and division, offering users a quick and easy way to perform calculations.",
        link: "https://simple-calculator-ten-orcin.vercel.app/"
        },
        {
        title: "Movie Explorer",
        description: "A user-friendly application that allows users to browse, search, and discover movies, providing detailed information, ratings, and reviews to enhance their cinematic experience.",
        link: "https://movie-explorer-website-with-react.vercel.app/"
        }
    ];

    return (
        <section className="projects container">
        <h1>My Projects</h1>
        <div className="project-grid">
            {projectList.map((project, index) => (
            <div key={index} className="project-card">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Link href={project.link} target="_blank" className="btn">
                View Project
                </Link>
            </div>
            ))}
        </div>
        </section>
    );
}
