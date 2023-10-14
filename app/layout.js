import "./globals.css";
import "/components/navbar/navbar.css";
import Navbar from "@/components/navbar/Navbar";
import './globals.css'
import { Footer } from "@/components";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
   
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Navbar/>
          {children}
          <Footer/>
        </main>
     
    </body>
  </html>
);

export default RootLayout;
