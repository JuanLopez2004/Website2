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
                         box-shadow: 0 2px 4px rgba(0, 0, 0, 5.0);
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

                  .header-nav a {
                        color: white;
                        text-decoration: none;
                        font-size: 1.5rem;
                        margin: 0 1rem;
                        transition: color 0.3s ease;
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
                <nav className="header-nav">
                        <Link href="#Skills">Skills</Link>
                        <Link href="#Work">Work</Link>
                        <Link href="#Projects">Projects</Link>
                        <Link href="#Involvement">Involvement</Link>
                        <Link href="/Blog">Blog</Link>
                  </nav>
              </div>
            </header>
        </>
    );
}