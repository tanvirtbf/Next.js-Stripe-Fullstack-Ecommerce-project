import './globals.css'
import NavBar from "../components/NavBar";
import { arsenal } from '../fonts';


export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={`bg-gray-100 ${arsenal.className}`}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
