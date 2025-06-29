import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Ashwin Arora | Full-Stack & Web3 Developer',
  description: 'Full-stack and Web3 developer with a passion for building scalable and efficient web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/icons/fav.png" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}