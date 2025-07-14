"use client";
import React, { useState } from "react";

type BlogPostProps = {
  title: string;
  desc: string;
  image1?: string;
  image2?: string;
  image3?: string;
  body1: string;
  body2?: string;
  body3?: string;
  link1?: string;
  link2?: string;
  link3?: string;
  link1Label?: string;
  link2Label?: string;
  link3Label?: string;
};

export default function BlogPostContainer({ title, desc, image1, image2, image3, body1, body2, body3, link1, link2, link3, link1Label, link2Label, link3Label,}: BlogPostProps) {
  const [image1Error, setImage1Error] = useState(false);
  const [image2Error, setImage2Error] = useState(false);
  const [image3Error, setImage3Error] = useState(false);

  return (
    <>
      <style>{`
        .blog-container {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          max-width: 1100px;
          width: 1000px;
          margin: 2rem auto;
          padding: 2rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          z-index: 1;
        }

        .blog-title {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .blog-desc {
          font-size: 1rem;
          font-family: Arial, Helvetica, sans-serif;
        }

        .blog-section {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          font-size: 1.2rem;
          font-family: Arial, Helvetica, sans-serif;
          flex-wrap: wrap;
        }

        .blog-section img {
          max-width: 260px;
          height: auto;
          flex-shrink: 0;
        }

        .blog-body {
          flex: 1;
          min-width: 300px;
          padding: 0.5rem;
        }

        .blog-links {
          gap: 1rem;
          display: flex;
          align-items: flex-start;
        }
      `}</style>

      <div className="blog-container">
        <div className="blog-title">{title}</div>
        <div className="blog-desc">{desc}</div>

        <div className="blog-section">
          {!image1Error && image1 && (
            <img
              src={image1}
              alt="Blog Image 1"
              onError={() => setImage1Error(true)}
            />
          )}
          <div className="blog-body">{body1}</div>
        </div>

        {body2 && (
          <div className="blog-section">
            {!image2Error && image2 && (
              <img
                src={image2}
                alt="Blog Image 2"
                onError={() => setImage2Error(true)}
              />
            )}
            <div className="blog-body">{body2}</div>
          </div>
        )}

        {body3 && (
          <div className="blog-section">
            {!image3Error && image3 && (
              <img
                src={image3}
                alt="Blog Image 3"
                onError={() => setImage3Error(true)}
              />
            )}
            <div className="blog-body">{body3}</div>
          </div>
        )}

        <div className="blog-links">
          {link1 && <a href={link1}>{link1Label || "Link 1"}</a>}
          {link2 && <a href={link2}>{link2Label || "Link 2"}</a>}
          {link3 && <a href={link3}>{link3Label || "Link 3"}</a>}
        </div>
      </div>
    </>
  );
}
