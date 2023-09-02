import NavBar from "@components/NavBar";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "PromptHub",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <NavBar />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
