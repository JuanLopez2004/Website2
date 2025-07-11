import React from "react";

export default function Footer() {
    return (
        <>
            <style>{`
              .footer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color: #4856a3;
                    color: white;
                    padding: 1rem 0;
                    position: relative;
                    z-index: 1;
              }
              .footer-text {
                    font-size: 1.2rem;
                    text-align: center;
              }
              .footer-link {
                    color: white;
                    font-size: 1.2rem;
                    text-decoration: none;
                    margin-top: 0.5rem;
              }
              .footer-link:hover {
    
              }
            `}</style>

            <footer className="footer">
                <span className="footer-text">
                    Copyright © 2025 Juan Lopez
                </span>
                <a
                    href="mailto:jlopezcs04@gmail.com"
                    className="footer-link"
                >
                    Contact
                </a>
            </footer>
        </>
    );
}