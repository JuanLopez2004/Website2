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

export default function SplitSection({title1,content1,content2, content5, content6, title2,content3,content4,link1Text,link1Href,link2Text,link2Href,whiteBg,large}: SplitSectionProps) {
  return (
    <>
      <style>{`
        .sectionbody {
          width: 100%;
          max-width: 115rem;
          margin: 2rem auto;
          padding: 2rem;
          background: ${whiteBg ? "#fff" : "transparent"};
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 2rem;
          min-height: 350px;
        }

        .text-block {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          box-sizing: border-box;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #222;
        }

        .section-paragraph {
          margin-bottom: 1rem;
          font-size: 1.5rem;
          color: #444;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .section-link {
          margin-top: auto; /* Push the link to the bottom */
          font-weight: 600;
          color: #007BFF;
          text-decoration: none;
          transition: color 0.3s ease;

      `}</style>

      <section className="sectionbody">

        <div className="text-block">
          <h2 className="section-title">{title1}</h2>
          <p className="section-paragraph">{content1}</p>

          {content2 && <p className="section-paragraph">{content2}</p>}
        {content2 && <p className="section-paragraph">{content5}</p>}

          <a href={link1Href} className="section-link">{link1Text}</a>
        </div>

        <div className="text-block">
          <h2 className="section-title">{title2}</h2>
          <p className="section-paragraph">{content3}</p>
          {content4 && <p className="section-paragraph">{content4}</p>}
        {content2 && <p className="section-paragraph">{content6}</p>}

          <a href={link2Href} className="section-link">{link2Text}</a>
        </div>
      </section>
    </>
  );
}
