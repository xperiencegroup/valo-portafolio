import BackButton from "@/components/Navigation/BackButton";

export default function NuevoLeon() {
  return (
    <div className="w-dvw h-dvh bg-blue-800">
      NuevoLeon {/* Return button */}
      <div className="fixed bottom-0 p-5 z-30">
        <BackButton to="/proyectos" />
      </div>
    </div>
  );
}
