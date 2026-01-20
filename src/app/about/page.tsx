"use client"

import { useState, useEffect } from 'react';
import { Github, Linkedin, X, Facebook, Instagram, MapPin, Code, Briefcase } from 'lucide-react';
import Image from 'next/image';
import './about.css';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = {
        frontend: ['JavaScript', 'React', 'Next.js', 'HTML & CSS'],
        backend: ['Python', 'Flask', 'Java', 'Spring Boot', 'Node.js'],
        database: ['MongoDB', 'MySQL', 'PostgreSQL'],
        tools: ['Postman', 'Git', 'Docker', 'kubernetes']
    };

    const stats = [
        { number: '5+', label: 'Projects Completed' },
        { number: '2+', label: 'Years Coding' },
        { number: '9+', label: 'Technologies' }
    ];

    const funFacts = [
        'Playing games',
        'Problem solver at heart',
        'Always learning something new',
        'Watching sci-fi movies'
    ];

    return (
        <div className={`about-page ${isVisible ? 'visible' : ''}`}>
            <div className="about-container">
                {/* Header Section */}
                <div className="about-header-card">
                    <div className="about-content">
                        <div className="about-image-wrapper">
                            <Image
                                src="/imeobong.jpg"
                                alt="Imeobong John"
                                className="about-pic"
                                width={150}
                                height={150}
                            />
                        </div>
                        
                        <div className="about-text">
                            <h1 className="about-name">Imeobong John</h1>
                            <p className="about-role">
                                <Code size={20} />
                                SOFTWARE ENGINEER
                            </p>
                            <div className="about-location">
                                <MapPin size={16} />
                                <span>Lagos, Nigeria</span>
                                <span className="separator">•</span>
                                <span className="status">Open to opportunities</span>
                            </div>
                            
                            <p className="about-bio">
                                I&apos;m a passionate software engineer who transforms ideas into elegant, efficient solutions. 
                                With a strong foundation in full-stack development, I specialize in building scalable web applications 
                                that not only meet technical requirements but create delightful user experiences.
                            </p>
                            <p className="about-bio">
                                Currently diving deep into modern React patterns and microservices architecture. 
                                I thrive in collaborative environments where innovation meets practical problem-solving.
                            </p>
                            
                            {/* Social Links */}
                            <div className="social-links">
                                <a href="https://github.com/BigJohn-dev" className="social-link" target="_blank" rel="noopener noreferrer">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/imeobong-john-80231035b/" className="social-link" target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://x.com/D_Big_John" className="social-link" target="_blank" rel="noopener noreferrer">
                                    <X size={20} />
                                </a>
                                <a href="https://www.facebook.com/John.Imeobong" className="social-link" target="_blank" rel="noopener noreferrer">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://www.instagram.com/im3_0_bong/" className="social-link" target="_blank" rel="noopener noreferrer">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Skills Section */}
                <div className="skills-section">
                    <h2 className="section-title">Technical Skills</h2>
                    
                    <div className="skills-grid">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="skill-category">
                                <h3 className="category-title">
                                    <Briefcase size={20} />
                                    {category}
                                </h3>
                                <div className="skill-tags">
                                    {items.map((skill, index) => (
                                        <span key={index} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fun Facts Section */}
                <div className="fun-facts-section">
                    <h2 className="section-title">When I am Not Coding</h2>
                    <div className="fun-facts-list">
                        {funFacts.map((fact, index) => (
                            <div key={index} className="fun-fact">
                                {fact}
                            </div>
                        ))}
                    </div>
                    
                    <div className="quote">
                        <p>
                            &quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot; - Cory House
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}