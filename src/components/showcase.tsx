import React from "react";

type ShowcaseProps = {
  whiteBg?: boolean;
  name: string;
  tinydesc: string;
  imageUrl: string;
  link: string;
};

export default function Showcase({ whiteBg = false }: ShowcaseProps) {
  const projects = [
    {
      name: "Project One",
      tinydesc: "This is a short description for project one.",
      imageUrl: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      name: "Project Two",
      tinydesc: "This is a short description for project two.",
      imageUrl: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      name: "Project Three",
      tinydesc: "This is a short description for project three.",
      imageUrl: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      name: "Project Four",
      tinydesc: "This is a short description for project four.",
      imageUrl: "https://via.placeholder.com/300x200",
      link: "#",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "3rem 1rem",
        backgroundColor: whiteBg ? "#fff" : "#1a1a1a",
        color: whiteBg ? "#000" : "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              backgroundColor: whiteBg ? "#f0f0f0" : "#2a2a2a",
              borderRadius: 12,
              padding: "1rem",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <img
              src={p.imageUrl}
              alt={p.name}
              style={{
                width: "100%",
                height: 160,
                objectFit: "cover",
                borderRadius: 8,
                marginBottom: 16,
              }}
            />
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>{p.name}</h3>
            <p style={{ fontSize: 14, marginBottom: 16 }}>{p.tinydesc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "8px 16px",
                backgroundColor: "#0070f3",
                color: "#fff",
                borderRadius: 6,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
