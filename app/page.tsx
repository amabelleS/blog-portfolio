import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 mx-auto">
      {/* <h1 className="text-4xl font-bold text-center">hy</h1> */}
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Amabelle</span>.
        </span>
      </p>
    </main>
  )
}
