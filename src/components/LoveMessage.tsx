import { Heart } from "lucide-react";

const LoveMessage = () => {
  return (
    <div className="text-center space-y-6 animate-fade-in-up animation-delay-400">
      <div className="flex items-center justify-center gap-3">
        <Heart className="w-6 h-6 text-love-pink fill-love-pink animate-pulse-love" />
        <span className="text-lg text-muted-foreground tracking-widest uppercase">
          Uma declaração de amor
        </span>
        <Heart className="w-6 h-6 text-love-pink fill-love-pink animate-pulse-love" />
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
        Fernando
        <span className="block font-script text-love-pink text-6xl md:text-8xl mt-2">
          ama
        </span>
        <span className="block mt-2">Mafe</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto leading-relaxed font-light italic">
        "Você é a melhor parte dos meus dias, o sorriso que eu procurava, 
        e o amor que eu sempre sonhei em encontrar."
      </p>
      
      <div className="flex items-center justify-center gap-2 pt-4">
        <div className="w-12 h-px bg-love-pink/50"></div>
        <Heart className="w-4 h-4 text-love-coral fill-love-coral" />
        <div className="w-12 h-px bg-love-pink/50"></div>
      </div>
      
      <p className="font-script text-2xl text-love-pink">
        Para sempre seu ❤️
      </p>
    </div>
  );
};

export default LoveMessage;
