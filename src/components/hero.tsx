import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank, FaFileAlt} from "react-icons/fa";

type IntroBodyProps = {
    title: string;
    content: string;
    content2?: string;
    content3?: string;
    imageSrc: string;
    altText: string;
    whiteBg?: boolean;
    link1?: string;
    link2?: string;
    link3?: string;
    link4?: string;
};
export default function Hero({
    title, content, content2, content3, imageSrc, altText, whiteBg, link1, link2, link3, link4
}: IntroBodyProps) {
    return (
        <>
         <style>{`
            .hero { 
                display: flex;
                align-items: stretch;
                justify-content: center;
                padding: 0; 
                background: ${whiteBg ? "#fff" : "transparent"};
                width: 100%;
                max-width: 2800px; /* scale inward like the header */
                margin: 0 auto;
                height: 360px; /* slightly shorter */
                z-index: 1;
            }
            .hero-image-container {
                width: 45%; /* slightly narrower */
                height: 100%;
                display: flex;
                align-items: stretch;
                justify-content: flex-end;
            }
            .hero-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            .hero-content {
                width: 55%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 2rem;
                box-sizing: border-box;
            }
            .hero-title {
                font-size: 1.8rem; /* scaled down */
                font-weight: bold;
                margin-bottom: 1rem;
                color: #222;
            }
            .hero-text {
                font-size: 1.1rem; /* scaled down */
                color: #444;
            }
            .hero-text-gap {
                margin-top: 0.8rem;
            }
                
            .hero-links {
                display: flex;
                gap: 1rem;
                margin-top: 1.5rem;
            }
            .hero-link-icon {
                color: #444;
                font-size: 1.6rem; /* scaled down */
                transition: color 0.2s;
            }
            .hero-link-icon:hover {
                color: #4856a3;
            }
        `}</style>

            <div className="hero">
                <div className="hero-image-container">
                    <img src={imageSrc} alt={altText} className="hero-image" />
                </div>
                <div className="hero-content">
                    <div className="hero-title">{title}</div>
                    <div className="hero-text">{content}</div>
                    <div className="hero-text hero-text-gap">{content2}</div>
                    <div className="hero-text hero-text-gap">{content3}</div>
                    <div className="hero-links">
                        {link1 && (
                            <a href={link1} target="_blank" rel="noopener noreferrer" className="hero-link-icon" title="GitHub">
                                <FaGithub />
                            </a>
                        )}
                        {link2 && (
                            <a href={link2} target="_blank" rel="noopener noreferrer" className="hero-link-icon" title="LinkedIn">
                                <FaLinkedin />
                            </a>
                        )}
                        {link3 && (
                            <a href={link3} target="_blank" rel="noopener noreferrer" className="hero-link-icon" title="HackerRank">
                                <FaHackerrank />
                            </a>
                        )}   
                         {link4 && (
                             <a href={link4} target="_blank" rel="noopener noreferrer" className="hero-link-icon" title="Resume">
                                 <FaFileAlt />
                             </a>
                             )}
                    </div>
                </div>
            </div>
        </>
    );
}