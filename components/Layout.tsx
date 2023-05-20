import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
