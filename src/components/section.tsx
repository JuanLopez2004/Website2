import React from "react";

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
    link1Label?: string;
};

export default function Section({ title, content, content2, content3, imageSrc, altText, whiteBg,link1, link2, link3, link4, link1Label}: IntroBodyProps) {
    return (
        <>
            <style>{`
                .sectionbody {
                    height: 200px;
                    width: 100%;
                    padding: 1rem 1rem;
                    margin: 1rem auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: ${whiteBg ? "#fff" : "#4856a3"};
                    position: relative;
                    z-index: 1;
                    max-width: 1200px;
                    transition: all 0.3s ease;
                    border-radius: 8px;
                    
                }

                .sectionbody:hover {
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
                    transform: translateY(-2px);
                }

                .section-image-wrapper {
                    padding: 0;
                    height: 100%;
                    width: 25%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 6px;
                    overflow: hidden;
                }

                .section-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .section-content {
                    width: 72%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    padding-left: 1.2rem;
                    box-sizing: border-box;
                    color: white;
                }

                .section-title {
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                    color: white;
                }

                .section-paragraph {
                    margin-bottom: 1.2rem;
                    font-size: 1.5rem;  
                    line-height: 1.3;
                    color: white;
                    font-family: "Segoe UI", Arial, sans-serif;
                }

                .section-links a {
                    display: inline-block;
                    margin-right: 0.75rem;
                    font-size: 0.9rem;
                    color: #007bffff;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .section-links a:hover {
                    color: #7390f7ff;
                }

            `}</style>

            <header className="sectionbody">
                <div className="section-image-wrapper">
                    <img src={imageSrc} alt={altText} className="section-image" />
                </div>

                <div className="section-content">
                    <h1 className="section-title">{title}</h1>
                    <p className="section-paragraph">{content}</p>
                    {content2 && <p className="section-paragraph">{content2}</p>}
                    {content3 && <p className="section-paragraph">{content3}</p>}

                    <div className="section-links">
                        {link1 && <a href={link1}>{link1Label || "Link 1"}</a>}
                        {link2 && <a href={link2}>Link 2</a>}
                        {link3 && <a href={link3}>Link 3</a>}
                        {link4 && <a href={link4}>Link 4</a>}
                    </div>
                </div>
            </header>
        </>
    );
}
