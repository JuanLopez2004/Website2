import React from "react";

export default function Footer() {
    return (
        <>
            <style>{`
              .footer {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #4856a3;
                    color: white;
                    padding: 1rem 0;
                    position: relative;
                    z-index: 1;
              }
              .footer-text {
                    font-size: 1rem;
              }
            `}</style>
            <footer className="footer">
                <span className="footer-text">
                        © 2025 Juan Lopez. All rights reserved.
                </span>
            </footer>
        </>
    );
}