import React from "react";

export type Project = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
};

type ShowcaseProps = {
  projects: Project[];
};

export default function Showcase({ projects }: ShowcaseProps) {
  return (
    <div
      style={{
        padding: "1rem",
        zIndex:1,

      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "0", 
          color: "black",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom:"2rem",
          flexWrap: "wrap",
        }}
      >
        {projects.map(({ title, description, imageSrc, link }) => (
          <div
            key={title}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              width: 176,
              backgroundColor: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              zIndex: 1,
            }}
          >
            <img
              src={imageSrc}
              alt={title}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: "1rem", flexGrow: 1 }}>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>{title}</h3>
              <p style={{ margin: 0, flexGrow: 1 }}>{description}</p>
            </div>
            <div style={{ padding: "0 1rem 1rem 1rem" }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0070f3",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
