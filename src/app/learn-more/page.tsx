import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function LearnMore() {
  return (
    <main className="min-h-screen bg-black text-white py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto space-y-16">
        <header>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Deep Work Enclave</h1>
          <Link href="/">
            <Button className="text-lg px-8 py-3 bg-purple-700 hover:bg-purple-600 text-white">
              Back to Home
            </Button>
          </Link>
        </header>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Who?</h2>
          <p className="text-lg text-neutral-300">For pre-seed and seed startups.</p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What is Deep Work?</h2>
          <ul className="list-none space-y-2 text-lg text-neutral-300">
            <li>We are not economic development.</li>
            <li>We are not an accelerator.</li>
            <li>There is no programming.</li>
            <li>We do not invest.</li>
            <li>We have no affiliations with VC or capital of any kind.</li>
            <li>Zero expectation to HQ here.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What we provide?</h2>
          <p className="text-lg text-neutral-300 mb-4">We cover all costs so you can focus on building.</p>
          <p className="text-lg text-neutral-300 mb-4">You get:</p>
          <ul className="list-disc list-inside space-y-2 text-lg text-neutral-300 mb-4">
            <li>free rent</li>
            <li>free office space</li>
            <li>A reasonable food/grocery stipend</li>
          </ul>
          <p className="text-lg text-neutral-300 mb-4">for one year.</p>
          <p className="text-lg text-neutral-300 font-semibold">
            No strings attached. We take no equity. No covenants. No debt. No quid pro quo. That&apos;s it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stallions</h2>
          <p className="text-lg text-neutral-300">
            We have a stable of 10 summer interns, paid for by us. These interns are the best, of the best, of the best (in Kentucky). There is mutual validation to work for your startup. They will work for your startup for the entirety of the summer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Expectations</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-neutral-300">
            <li>Relocate to Louisville.</li>
            <li>Be a part of the community. Founders and co-founders in-person everyday.</li>
            <li>This is not only for you but for others in the program.</li>
            <li>The only exceptions are YCombinator or Techstars. Please plan accordingly.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Afterwards</h2>
          <p className="text-lg text-neutral-300 mb-4">
            After a year, you can stay, you can move, it doesn&apos;t matter to us.
          </p>
          <p className="text-lg text-neutral-300 mb-4">
            Again, we do not take equity, debt, covenants. The startup is 100% yours.
          </p>
          <p className="text-lg text-neutral-300 mb-4">
            If your startup does not work out. We can make introductions to other startups and companies.
          </p>
          <p className="text-lg text-neutral-300">
            If this setup is not &quot;working out&quot;. We can help you transition.
          </p>
        </section>

        <section className="flex justify-center">
          <Link href="/apply">
            <Button className="text-xl px-12 py-4 bg-purple-700 hover:bg-purple-600 text-white">
              Apply
            </Button>
          </Link>
        </section>
      </div>
    </main>
  )
}

