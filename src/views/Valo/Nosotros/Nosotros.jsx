import bgImage from "@/assets/images/home-screen.webp";
import { IS_DEVELOPMENT } from "@/config";
import DebbugComponent from "@/components/DebbugFooter";
import BackButton from "@/components/Navigation/BackButton";

export default function Nosotros() {
  return (
    <div className="h-dvh w-dvw flex justify-center items-center overflow-hidden">
      Nosotros
      <br />
      <BackButton />
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
