export const metadata = {
  title: "Amabelle's Portfolio | Projects",
  description: 'Projects using Next.js and Tailwind CSS, React, Node.js MongoDB by Amabelle Trachtenberg',
  favicon: '/favicon.ico',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}
