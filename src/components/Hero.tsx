import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/4a5cbee6-dc38-40d8-b6c2-0b4977359b94/files/61864c43-9b11-464b-bb47-b17e02af6af9.jpg"
          alt="Кижский погост — вид на Церковь Преображения Господня"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-80">
          Объект Всемирного наследия ЮНЕСКО с 1990 г. · № 544
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          КИЖСКИЙ<br />ПОГОСТ
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Шедевр деревянного зодчества России на острове Кижи<br className="hidden md:block" />
          в Онежском озере, Республика Карелия
        </p>
      </div>
    </div>
  );
}