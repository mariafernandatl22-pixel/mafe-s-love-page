import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    size: Math.random() * 16 + 12,
    duration: `${Math.random() * 4 + 6}s`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-love-pink opacity-20 fill-love-pink"
          style={{
            left: heart.left,
            bottom: "-50px",
            width: heart.size,
            height: heart.size,
            animation: `float-heart ${heart.duration} ease-in-out infinite`,
            animationDelay: heart.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
