import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';

export default function Home() {
    return (
        <div style=
		{{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative" }}>

            <Background />
            <Header />

            <main style={{ flex: 1 }}>
                {/* main content goes here */}
                



            </main>

            <Footer />
        </div>
    );
}