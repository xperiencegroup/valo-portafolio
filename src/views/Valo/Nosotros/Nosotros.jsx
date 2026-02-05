import bgImage from "@/assets/images/home-screen.webp";
import BackButton from "@/components/Navigation/BackButton";
import NosotrosSubMenu from "@/components/Menus/NosotrosSubMenu";

export default function Nosotros() {
  return (
    <div className="h-dvh w-dvw flex items-end overflow-hidden">
      <div className="flex flex-col self-end items-start w-fit p-5">
        <NosotrosSubMenu />
        <BackButton to="/" />
      </div>

      {/* Background */}
      <div className="absolute -z-50">
        <img
          src={bgImage}
          alt="Imagen de fondo"
          className="w-dvw h-dvh object-cover"
        />
      </div>
    </div>
  );
}
