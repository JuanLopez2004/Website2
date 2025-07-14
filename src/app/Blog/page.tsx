import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Blog from '@/components/blog';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Background />
      <Header />

      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '80px', 
        }}
      >
        <Blog
            title="Blog Post 1"
            desc="12/04/2003"
            image1="https://i.imgur.com/XPv0jQR.jpeg"
            image2="https://i.imgur.com/XPv0jQR.jpeg"
            image3="https://i.imgur.com/XPv0jQR.jpeg"
            body1="It started with a foggy morning drive..."
            body2="We hiked through breathtaking trails..."
            body3="The sunset from the peak was unforgettable."
            link1="https://example.com/photo-gallery"
            link2="https://example.com/blog-full"
            link3="https://example.com/map"
			link1Label='Hello'
		/>
		<Blog
            title="Blog Post 1"
            desc="12/04/2003"
            image1="https://i.imgur.com/XPv0jQR.jpeg"
            body1="It started with a foggy morning drive..."
            link1="https://example.com/photo-gallery"
			link1Label='Hello'
		/>
		
      </main>
      <Footer />
    </div>
  );
}
