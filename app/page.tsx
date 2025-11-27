export default function Home() {
  return (
    <div className="min-h-screen bg-[#1d1c1f] text-[#fafafa] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          jundefined<span className="text-[#ce87ff]">.com</span>
        </h1>
        <p className="text-[#a3a3a3]">
          Blog pessoal em construção 🚧
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <span className="px-4 py-2 bg-[#2b292e] rounded-lg border border-[#262626]">
            Next.js
          </span>
          <span className="px-4 py-2 bg-[#2b292e] rounded-lg border border-[#262626]">
            TypeScript
          </span>
          <span className="px-4 py-2 bg-[#2b292e] rounded-lg border border-[#262626]">
            Tailwind
          </span>
        </div>
      </div>
    </div>
  );
}