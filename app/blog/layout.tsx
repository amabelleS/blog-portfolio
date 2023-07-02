export const metadata = {
  title: "Amabelle's Portfolio | Blog",
  description: 'Projects using Next.js and Tailwind CSS, React, Node.js MongoDB by Amabelle Trachtenberg',
  favicon: '/favicon.ico',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">{children}</div>
  )
}
