
import { Inter } from 'next/font/google'
import './globals.css'
import {GroupProvider} from "./context/GroupsContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Group Division',
  description: 'Group and Division Management Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <GroupProvider>
        <div>
        {children}
        </div>
        
        </GroupProvider>
      </body>
    </html>
  )
}
