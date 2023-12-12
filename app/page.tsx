import BgProvider from "@/app/components/BgProvider";
import Navbar from "./components/Navbar";
import AnimBackground from "./components/AnimBackground";



const LandingPage = () => {
  
  return (
    <BgProvider>
      <AnimBackground />
      <Navbar />
        <main className="flex flex-col justify-center pt-80 px-5 text-center gap-10 z-10">
          <h1 className="font-extrabold text-white text-6xl z-10 md:text-4xl">
            Фільми, серіали й інший контент без обмежень
          </h1>
          <h4 className="font-sm text-white text-3xl z-10 md:text-2xl">
            Дивіться будь-де. Скасувати підписку можна будь-коли
          </h4>
        </main>
    </BgProvider>
  )
}

export default LandingPage;