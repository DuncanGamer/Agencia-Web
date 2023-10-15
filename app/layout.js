import "/components/navbar/navbar.css";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import Provider from "@/components/Provider";

export const metadata = {
  title: "DigitalToile",
  description: "creation of digital products",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Navbar />
          {children}
          <Footer />
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
