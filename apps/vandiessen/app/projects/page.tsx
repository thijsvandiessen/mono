import { Button, Header } from '@mono/components'
import { Image, Link } from '@mono/next-js'

const Page = () => (
  <main className="font-sans antialiased">
    <Header
      className="bg-radial-[at_-80%_50%] from-sky-200 via-blue-400 to-indigo-900 to-100%"
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
          <h1 className="font-bold text-8xl">My projects</h1>
          <p>These are some of my projects</p>
          <div>
            <Button
              href="https://github.com/thijsvandiessen"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              GitHub
            </Button>
          </div>
        </div>
      }
    />
    <ul>
      <li className="mt-12 flex flex-col gap-4">
        <h2 className="font-bold text-xl">Making an oscillator</h2>
        <p>
          A simple oscillator that I use to tune my violin or double bass. In
          most orchestras 442 hertz is the A, normaly this is 440 hertz. This
          simply because the woodwinds like it this way. And we like it if the
          woodwinds are in tune.
        </p>
        <Link
          className="text-blue-700 underline hover:no-underline"
          href="/projects/sound-project"
        >
          View project
        </Link>
      </li>
    </ul>
  </main>
)

export default Page
