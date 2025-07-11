import Link from "next/link";

export default function Header() {
    return (
        <>
            <style>{`
              .header {
                    display: flex;
                    padding: 1.5rem 2.5rem;
                    align-items: center;
                    background-color: #4856a3;
                    color: white;
                    box-sizing: border-box;
                    position: relative;
                    z-index: 1;
              }
              .header-left {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
              }
              .header-container {
                    width: 100%;
                    max-width: 1500px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
              }
              .header-logo {
                    height: 75px;
              }
              .header-title {
                    font-size: 2rem;
                    font-weight: bold;
                    letter-spacing: 1px;
               }
            `}</style>
            <header className="header">
              <div className="header-container">
                <div className="header-left">
                   <Link href="/">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png"
                      alt="Logo" className="header-logo" />
                   </Link>
                    <span className="header-title">Juan Lopez</span>
                </div>
              </div>
            </header>
        </>
    );
}