import { Header } from '@mono/components'

const Page = () => (
  <main className="font-sans antialiased">
    <Header
      className="bg-radial-[at_-80%_50%] from-sky-200 via-blue-400 to-indigo-900 to-100%"
      body={
        <div className="grid gap-8 text-center">
          <h1 className="font-bold text-8xl">
            442 hertz to tune your instrument
          </h1>
          <p>Or modify this sound with the sliders below</p>
        </div>
      }
    />
  </main>
)

export default Page
