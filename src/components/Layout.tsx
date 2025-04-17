import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}