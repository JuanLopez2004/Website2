import Link from "next/link";

export default function Header() {
    return (
        <>
            <style>{`
                  .header {
                        display: flex;
                        padding: 1rem 1rem;
                        align-items: center;
                        background-color: #4856a3;
                        color: white;
                        box-sizing: border-box;
                        position: relative;
                        z-index: 1;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                  }
                  .header-left {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                  }
                  .header-container {
                        width: 100%;
                        max-width: 1000px;
                        margin: 0 auto;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                  }
                  .header-logo {
                        height: 50px;
                  }

                  .header-title {
                        font-size: 1.4rem;
                        font-weight: bold;
                        letter-spacing: 0.5px;
                  }

                  .header-nav a {
                        color: white;
                        text-decoration: none;
                        font-size: 1.1rem;
                        margin: 0 0.7rem;
                        transition: color 0.3s ease;
                  }

                  .header-nav a:hover {
                        color: rgb(255, 255, 255);
                        text-decoration: underline;
                  }

                  .header-logo {
                        transition: opacity 0.3s ease;
                  }
                        
                  .header-logo:hover {
                        opacity: 0.6;
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
