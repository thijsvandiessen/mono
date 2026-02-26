import { Button, Header } from '@mono/components'
import { Image } from '@mono/next-js'

export default function Home() {
  return (
    <main className="font-sans antialiased">
      <Header
        className="bg-radial-[at_-80%_50%] from-sky-200 via-blue-400 to-indigo-900 to-100% min-h-screen"
        body={
          <div className="grid gap-8 text-center">
            <div className="flex justify-center">
              <Image
                loading="eager"
                alt="logo"
                src={'/logo.png'}
                width={200}
                height={200}
              />
            </div>
            <h1 className="font-bold text-8xl">
              I&apos;m Thijs van Diessen, a creative software engineer
            </h1>
            <p>
              I like to design and develop awesome user experiences and am
              specialized in creating scalable solutions!
            </p>
            <div>
              <Button
                href="https://github.com/thijsvandiessen"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                My github
              </Button>
            </div>
          </div>
        }
      />
    </main>
  )
}
