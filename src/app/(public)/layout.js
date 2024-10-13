import Header from "@/components/common/Header";

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <>
    <Header />
        <h1>Publiv layout</h1>

        {children}
    </>
      
  );
}
