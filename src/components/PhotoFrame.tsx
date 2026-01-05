import fotoCasal from "@/assets/foto-casal.jpeg";

const PhotoFrame = () => {
  return (
    <div className="relative animate-fade-in-up animation-delay-200">
      {/* Decorative elements */}
      <div className="absolute -inset-4 bg-gradient-to-br from-love-pink/20 to-love-coral/20 rounded-3xl blur-2xl"></div>
      
      {/* Photo container - polaroid style */}
      <div className="relative bg-card p-4 pb-16 rounded-lg shadow-romantic transform rotate-2 hover:rotate-0 transition-transform duration-500">
        <img
          src={fotoCasal}
          alt="Fernando e Mafe - nosso amor"
          className="w-full h-auto rounded-sm object-cover max-w-sm"
        />
        
        {/* Polaroid caption */}
        <p className="absolute bottom-4 left-0 right-0 text-center font-script text-xl text-foreground">
          Fernando & Mafe 💕
        </p>
      </div>
      
      {/* Floating heart decoration */}
      <div className="absolute -top-6 -right-6 w-12 h-12 bg-love-pink rounded-full flex items-center justify-center shadow-lg animate-pulse-love">
        <span className="text-2xl">💖</span>
      </div>
      
      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-love-coral rounded-full flex items-center justify-center shadow-md">
        <span className="text-lg">✨</span>
      </div>
    </div>
  );
};

export default PhotoFrame;
