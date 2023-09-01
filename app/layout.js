import "@styles/globals.css";

export const metadata = {
  title: "PromptHub",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
