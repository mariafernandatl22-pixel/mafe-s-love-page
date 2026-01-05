import FloatingHearts from "@/components/FloatingHearts";
import PhotoFrame from "@/components/PhotoFrame";
import LoveMessage from "@/components/LoveMessage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-love-blush/50 via-transparent to-love-blush/30 pointer-events-none"></div>
      
      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Photo */}
            <div className="flex-shrink-0">
              <PhotoFrame />
            </div>
            
            {/* Message */}
            <div className="flex-1 max-w-lg">
              <LoveMessage />
            </div>
          </div>
          
          {/* Footer */}
          <footer className="mt-16 text-center animate-fade-in-up animation-delay-600">
            <p className="text-sm text-muted-foreground">
              Feito com <span className="text-love-pink">❤️</span> por Fernando
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
