import React from "react";

type SplitSectionProps = {
  title1: string;
  content1?: string;
  content2?: string;
  content5?: string;

  title2: string;
  content3: string;
  content4?: string;
  content6?: string;

  large?: boolean;

  link1Text?: string;
  link1Href?: string;

  link2Text?: string;
  link2Href?: string;

  whiteBg?: boolean;
};

export default function SplitSection({
  title1,
  content1,
  content2,
  content5,
  content6,
  title2,
  content3,
  content4,
  link1Text,
  link1Href,
  link2Text,
  link2Href,
  whiteBg,
}: SplitSectionProps) {
  return (
    <>
      <style>{`
        .sectionbody {
        height: 200px;
        width: 100%;
        margin: 1rem auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: ${whiteBg ? "#fff" : "transparent"};
        position: relative;
        z-index: 1;
        max-width: 1200px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 

        .text-block {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          box-sizing: border-box;
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #222;
        }

        .section-paragraph {
          margin-bottom: 0.3rem;
          font-size: 0.95rem;
          color: #444;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .section-link {
          margin-top: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #007BFF;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .section-link:hover {
          color: #0056b3;
        }
      `}</style>

      <section className="sectionbody">
        <div className="text-block">
          <h2 className="section-title">{title1}</h2>
          {content1 && <p className="section-paragraph">{content1}</p>}
          {content2 && <p className="section-paragraph">{content2}</p>}
          {content5 && <p className="section-paragraph">{content5}</p>}
          {link1Text && link1Href && (
            <a href={link1Href} className="section-link">
              {link1Text}
            </a>
          )}
        </div>

        <div className="text-block">
          <h2 className="section-title">{title2}</h2>
          <p className="section-paragraph">{content3}</p>
          {content4 && <p className="section-paragraph">{content4}</p>}
          {content6 && <p className="section-paragraph">{content6}</p>}
          {link2Text && link2Href && (
            <a href={link2Href} className="section-link">
              {link2Text}
            </a>
          )}
        </div>
      </section>
    </>
  );
}
