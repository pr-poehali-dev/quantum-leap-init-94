import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/4a5cbee6-dc38-40d8-b6c2-0b4977359b94/files/8d181f84-5fa1-4470-a297-bb646b858b6d.jpg"
            alt="Вид на Кижский погост с воды"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Критерии ЮНЕСКО: i, iv, v
      </h3>

      <div className="absolute bottom-12 left-6 right-6 z-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl leading-tight" id="significance">
          Признан шедевром человеческого гения и выдающимся примером традиционного использования ландшафта
        </p>
        <div className="flex flex-col gap-2 text-white/80 text-sm md:text-right shrink-0">
          <span>Включён в список ЮНЕСКО</span>
          <span className="text-white text-2xl font-bold">1990</span>
        </div>
      </div>
    </div>
  );
}