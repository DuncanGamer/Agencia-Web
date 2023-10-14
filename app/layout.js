import "./globals.css";
import "/components/navbar/navbar.css";
import Navbar from "@/components/navbar/Navbar";
import './globals.css'
import { Footer } from "@/components";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
 <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Navbar/>
          {children}
          <Footer/>
        </main>
    </Provider>
    </body>
  </html>
);

export default RootLayout;
