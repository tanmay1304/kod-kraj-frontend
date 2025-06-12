import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-text-primary">
      <div className="text-center">
        <AnimatedText
          el="h1"
          text="KOD / KRAJ"
          className="font-heading text-6xl md:text-8xl font-bold tracking-tight"
        />
        <AnimatedText
          text="My Journey Through Code and Country."
          className="mt-4 text-lg md:text-xl text-text-primary/80"
        />
      </div>
    </main>
  );
}