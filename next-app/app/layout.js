import './globals.css'

export const metadata = {
  title: 'Simple Next Languague Switch Example',
  description: 'Simple Next Languague Switch Example',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
