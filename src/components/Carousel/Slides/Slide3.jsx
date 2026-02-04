import { CamaIcon } from "@/assets/icons/conoce-valo-developers/CamaIcon";
import { CasaIcon } from "@/assets/icons/conoce-valo-developers/CasaIcon";
import { DepaIcon } from "@/assets/icons/conoce-valo-developers/DepaIcon";
import { MisionIcon } from "@/assets/icons/conoce-valo-developers/MisionIcon";
import { OficinaIcon } from "@/assets/icons/conoce-valo-developers/OficinaIcon";
import { PlanoIcon } from "@/assets/icons/conoce-valo-developers/PlanoIcon";

const ESPECIFICACIONES = [
  {
    id: "experienca",
    icon: <MisionIcon />,
    label: "Años de experiencia",
    number: "16",
  },
  {
    id: "vivienda",
    icon: <CasaIcon />,
    label: "Casas de vivienda",
    number: "869",
  },
  {
    id: "habitaciones",
    icon: <CamaIcon />,
    label: "Habitacions de hotel",
    number: "430",
  },
  {
    id: "departamentos",
    icon: <DepaIcon />,
    label: "Departamentos",
    number: "+1000",
  },
  {
    id: "unidades-comerciales",
    icon: <PlanoIcon />,
    label: "En unidades comerciales",
    number: "100,000 m2",
  },
  {
    id: "oficinas-consultorias",
    icon: <OficinaIcon />,
    label: "En unidades de oficinas/Consultorias",
    number: "75,000 m2",
  },
];

export default function Slide3() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="grid grid-cols-3 gap-y-1.5">
        {ESPECIFICACIONES.map((especificacion) => {
          return (
            <div
              key={especificacion.id}
              className="flex flex-col items-center px-3.75 py-9.75 gap-3.75 text-white bg-valo"
            >
              {especificacion.icon}
              <p className="text-2xl text-center font-lumarc font-bold">
                {especificacion.number}
              </p>
              <p className="text-[30px] text-center">{especificacion.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
