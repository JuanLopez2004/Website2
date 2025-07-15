"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank, FaFileAlt } from "react-icons/fa";

type IntroBodyProps = {
  title: string;
  content: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  content6?: string;
  imageSrc: string;
  altText: string;
  whiteBg?: boolean;
  link1?: string;
  link2?: string;
  link3?: string;
  link4?: string;
};

export default function Hero({
  title,
  content,
  content2,
  content3,
  content4,
  content5,
  content6,
  imageSrc,
  altText,
  whiteBg,
  link1,
  link2,
  link3,
  link4,
}: IntroBodyProps) {
  return (
    <>
   <style>{`
  .hero {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin: 0;
    padding: 3rem 2rem;
    background: ${whiteBg ? "#fff" : "#5a6bbf"}; /* Purple background */
    box-sizing: border-box;
    z-index:1;
  }

  .hero-inner {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .hero-image-container {
    flex: 1 1 40%;
    padding: 1rem;
    display: flex;
    justify-content: center;
  }

  .hero-image {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
  }

  .hero-content {
    flex: 1 1 50%;
    padding: 1.5rem;
  }

  .hero-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: bold;
    margin-bottom: 1rem;
    color: #111;
  }

  .hero-text {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: #444;
  }

  .hero-links {
    display: flex;
    gap: 1.2rem;
    margin-top: 2rem;
  }

  .hero-link-icon {
    color: #444;
    font-size: 1.8rem;
  }

  .hero-link-icon:hover {
    color: #4856a3;
  }

  @media (max-width: 768px) {
    .hero {
      padding: 2rem 1rem;
    }

    .hero-inner {
      flex-direction: column;
      padding: 1rem;
    }

    .hero-title {
      text-align: center;
    }

    .hero-links {
      justify-content: center;
    }
  }
`}</style>

      <div className="hero">
        <div className="hero-image-container">
          <img src={imageSrc} alt={altText} className="hero-image" />
        </div>
        <div className="hero-content">
          <div className="hero-title">{title}</div>
          <div className="hero-text">{content}</div>
          {content2 && <div className="hero-text hero-text-gap">{content2}</div>}
          {content3 && <div className="hero-text hero-text-gap">{content3}</div>}
          {content4 && <div className="hero-text hero-text-gap">{content4}</div>}
          {content5 && <div className="hero-text hero-text-gap">{content5}</div>}
          {content6 && <div className="hero-text hero-text-gap">{content6}</div>}

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
