export default function HeroSection() {
  return (
    <section className="relative mb-8">
      <div className="w-full h-64 md:h-80 overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800" 
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
