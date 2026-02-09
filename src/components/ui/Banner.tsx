import { Button } from "@/components/ui/button" // Shadcn UI button
import { cn } from "@/lib/utils" // Shadcn utility for class merging

export default function Banner() {
  return (
    <section
      className={cn(
        "relative w-full h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
      )}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Track Your Expenses Effortlessly
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Manage your budget, visualize spending, and stay financially fit.
        </p>
        <Button variant="default" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  )
}