import './globals.css'
import NavBar from "../components/NavBar";
import { arsenal } from '../fonts';




export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={`bg-gray-100 ${arsenal.className}`}>
        <NavBar />
        <h1 className='text-3xl text-center p-3 text-orange-500'>Welcome My Store</h1>
        {children}
        </body>
    </html>
  )
}
