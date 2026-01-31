import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { IS_DEVELOPMENT } from "@/config";
import SplashScreen from "./SplashScreen";
import bgImage from "@/assets/images/home-screen.webp";
import MainMenu from "@/components/Menus/MainMenu";
import DebbugComponent from "@/components/DebbugFooter";
import PlayButton from "@/components/Buttons/PlayButton";
import BackButton from "@/components/Navigation/BackButton";

export default function Home() {
  const { showSplashScreen } = useContext(AppContext);

  return (
    <div className="h-dvh w-dvw flex justify-center items-center overflow-hidden">
      {showSplashScreen && <SplashScreen />}

      {!showSplashScreen && (
        <div className="self-end flex items-end w-full justify-between p-5">
          <div>
            <MainMenu />
            <BackButton />
          </div>
          <PlayButton />
        </div>
      )}

      {/* Background */}
      <div className="absolute -z-50">
        <img
          src={bgImage}
          alt="Imagen de fondo"
          className="w-dvw h-dvh object-cover"
        />
      </div>

      {IS_DEVELOPMENT && <DebbugComponent />}
    </div>
  );
}
