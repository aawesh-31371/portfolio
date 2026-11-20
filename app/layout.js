import "./globals.css";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

export const metadata = {
  title: "Aawesh khan | Full Stack Developer",
  description:
    "Portfolio of Aawesh khan — Full Stack Developer and Computer Science Engineering student.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />

        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
