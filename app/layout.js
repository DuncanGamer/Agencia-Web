import "/components/navbar/navbar.css";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import Provider from "@/components/Provider";
import { Toaster } from "react-hot-toast";
import { StateContext } from "@/components/context/StateContex";

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
        <StateContext>
          <main className="app">
            <Navbar />
            <Toaster />
            {children}
            <Footer />
          </main>
        </StateContext>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
