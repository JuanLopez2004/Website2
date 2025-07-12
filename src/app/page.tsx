import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Hero from '@/components/hero';
import Section from '@/components/section';
import SplitSection from '@/components/splitsection';
import Showcase from '@/components/showcase';


export default function Home() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                position: "relative"
            }}
        >
            <Background />
            <Header />

            <main
                style={{
                    flex: 1,
                    gap: "1rem"
                }}
            >
                <section style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Hero
                        title="Aspiring Fullstack Developer with an interest in Data Science"
                        content="I’m a Senior studying Computer Science at Northern Illinois University, focused on full-stack web development."
                        content2="I’m comfortable with C++, SQL databases, React, Typescript and have a growing interest in data science and its real-world applications."
                        content3="I enjoy building practical, efficient apps that connect smoothly with databases and provide great user experiences."
                        imageSrc="https://c4.wallpaperflare.com/wallpaper/750/507/586/computers-linux-wallpaper-preview.jpg"
                        altText="Tux"
                        link1="https://github.com/JuanLopez2004"
                        link2="https://www.linkedin.com/in/juan-lopez-6278bb234/"
                        link3="https://www.hackerrank.com/profile/jlopezcs04"
                        whiteBg={true}
                    />
                </section>

                <section style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Section 
                    title="Biography" 
                    content="I am a Senior at NIU! I am in my fourth year learning Computer Science. I have a passion for full-stack web development and data science. I am the Chair of the NIU ACM Chapter, where I help organize fun events and educational workshops for students. I believe in an equitable tech community, and I strive to make tech accessible to everyone. I am an avid fan of College Football, Team Fortresss 2, and Adult Swim."

                    imageSrc="https://i.ibb.co/hRMFKRWw/IMG-20250711-191116-406.jpg"
                    altText="tux"
                    whiteBg={true}
                    />
                </section>
                
                <div id="Skills">
                <SplitSection
                    title1="Skills"
                    content1="C++, SQL, ReactJS, TypeScript, Python,"
                    content2="HTML, CSS, NextJS, Could do Java if forced"
                    title2="Dev Tools"
                    content3="VScode, Git, GitHub, GitLab,"
                    content4="MySQL, Vite, Windows, Linux"
                    whiteBg={true}
                />
                </div>
                
                <div id="Work">
                <section style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <SplitSection
                    title1="Work Experience"
                    content1="ResTech Help Desk Technician - Northern Illinois University · Part-time, Jun 2025 - Present"
                    content2="DeKalb, Illinois, United States"
                    content5="· On-site"
                    title2="Description"
                    content3="Provide IT support to students and staff in the various NIU residence halls and the Student Center, including laptop troubleshooting, hardware/software support, Computer Imaging, Powershell, and Assistance."
                    content4="Tools Learned: Powershell, Windows 11 Support, GitLab"
                    whiteBg={true}
                    large={true}
                />
                </section>
                </div>

             
                </main>

            <Footer />
        </div>
    );
}