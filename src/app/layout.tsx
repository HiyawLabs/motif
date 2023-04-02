import "./globals.css";
import BlogLayout from './BlogLayout'
import "./cards.min.css"
import { getNavigation, } from "./ghost-client"
import { use } from "react"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const settings = use(getNavigation())

  return (

    <html className='light' lang="en">

      <body
        style={{
          '--bg-color': settings.accent_color,
        }}
        className={` bg-[--bg-color] dark:bg-gray-900`}>

        <BlogLayout setting={settings}>

          {children}

        </BlogLayout>

      </body>

    </html>

  )
}
