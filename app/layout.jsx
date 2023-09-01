import NavBar from "@components/NavBar";
import "@styles/globals.css";

export const metadata = {
  title: "PromptHub",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        <NavBar />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
