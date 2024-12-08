import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col py-16 px-4 md:px-6">
      <div className="max-w-[800px] mx-auto w-full flex-grow flex flex-col">
        <div className="space-y-6 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Deep Work Enclave</h1>
          <p className="text-neutral-400 text-xl md:text-2xl">
            This is not a pressure cooker, it is sensory deprivation.
            <br />
            <em>— Located in Louisville, KY</em>
          </p>
        </div>
        
        <div className="flex-grow flex flex-col justify-center space-y-16">
          <div className="text-2xl md:text-3xl font-light">
            <p className="text-neutral-200 border-l-4 border-white pl-4 py-2">
              We expect you to focus. No noise.
            </p>
          </div>
          
          <div className="space-y-12">
            <p className="text-2xl md:text-3xl font-serif italic text-neutral-300">
              Where deep work is not just encouraged, it&apos;s required.
            </p>
            <Link href="/learn-more">
              <Button className="text-lg px-8 py-6 bg-purple-700 hover:bg-purple-600" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

