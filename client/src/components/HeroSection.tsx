export default function HeroSection() {
  return (
    <section className="relative mb-8">
      <div className="w-full h-64 md:h-80 overflow-hidden relative">
        <img 
          src="https://picsum.photos/id/101/1920/800" 
          alt="Modern cityscape with tall buildings" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-lg text-sm">
          /sw
        </div>
      </div>
    </section>
  );
}
