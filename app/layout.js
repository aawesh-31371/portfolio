import "./globals.css";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

export const metadata = {
  title: "Luvkesh Rawat | Full Stack Developer",
  description:
    "Portfolio of Luvkesh Rawat — Full Stack Developer and Computer Science Engineering student.",
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