import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
  function goHome() {
    window.location.href = "/"
  }

  return (
    <main className="lg:flex items-center h-full justify-center block p-4 bg-zinc-950">
      <Image
        src="/images/hole.svg"
        width={500}
        height={500}
        alt="404"
      />
      <div className="lg:flex flex-col gap-y-4">
        <div className="items-center gap-2 hidden lg:flex">
          <Image src="/assets/mascot.svg" width={40} height={40} alt="Mascot" />
          <h1 className="text-2xl text-start font-extrabold text-emerald-500 tracking-wide">
            Lingo
          </h1>
        </div>
        <h1 className="text-9xl font-bold text-emerald-500 tracking-wide">404...</h1>
        <span className="text-white text-4xl font-semibold">
          I repeat, 404. Over!
        </span>
        <p className="text-white text-lg">
          I think you&apos;ve reached the edge of the universe.
          The page you requested was not found.
        </p>
        <Button variant="super" className="w-80 items-center mx-auto" asChild>
          <Link href="/">
            Return to the homepage
          </Link>
        </Button>
      </div>
    </main>
  )
}

export default NotFound