import { ConoceValoCarousel } from "@/components/Carousel/ConoceValoCarousel";
import BackButton from "@/components/Navigation/BackButton";
import React from "react";

export default function Conocenos() {
  return (
    <div className="w-dvw h-dvh p-5 flex flex-col gap-6">
      <h1 className="text-valo text-5xl">VALO</h1>
      <div className="flex flex-1 bg-white">
        <ConoceValoCarousel />
      </div>
      <div className="relative">
        <BackButton to="/nosotros" />
      </div>
    </div>
  );
}
