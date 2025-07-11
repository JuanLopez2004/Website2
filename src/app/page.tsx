import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Hero from '@/components/hero';

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
                    gap: "1.5rem"
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

               






                 </main>

            <Footer />
        </div>
    );
}