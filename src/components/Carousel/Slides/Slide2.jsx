import { CompromisoIcon } from "@/assets/icons/conoce-valo-developers/CompromisoIcon";
import { EscudoIcon } from "@/assets/icons/conoce-valo-developers/EscudoIcon";
import { IdeaIcon } from "@/assets/icons/conoce-valo-developers/IdeaIcon";
import { ValoresIcon } from "@/assets/icons/conoce-valo-developers/ValoresIcon";
import compromisoBg from "@/assets/images/conoce-valor-developers/compromiso.png";
import franquezaBg from "@/assets/images/conoce-valor-developers/franqueza.png";
import asertividadBg from "@/assets/images/conoce-valor-developers/asertividad.png";
import excelenciaBg from "@/assets/images/conoce-valor-developers/excelencia.png";

const VALORES_INFO = [
  {
    id: "compromiso",
    label: "Compromiso",
    description:
      "A través del compromiso alineamos nuestros intereses, y ponemos al máximo nuestras capacidades para sacar adelante la misión encomendada, teniendo en cuenta que conocemos las condiciones que estamos aceptando y las obligaciones que éstas implican.",
    icon: <CompromisoIcon className="size-15 text-white" />,
    img: compromisoBg,
  },
  {
    id: "franqueza",
    label: "Franqueza",
    description:
      "En Valo apostamos por la franqueza. Creemos que la comunicación de forma directa y sincera, sea cual sea la circunstancia, enriquece las relaciones y mejora la motivación de la empresa.",
    icon: <ValoresIcon className="size-15 text-white" />,
    img: franquezaBg,
  },
  {
    id: "asertividad",
    label: "Asertividad",
    description:
      "La asertividad es una herramienta poderosa de comunicación en Valo, ya que mejora la productividad y nos permite tomar decisiones bien razonadas y calculadas.",
    icon: <IdeaIcon className="size-15 text-white" />,
    img: asertividadBg,
  },
  {
    id: "excelencia",
    label: "Excelencia",
    description:
      "En Valo, aspiramos a la excelencia en la operación y ejecución de nuestros deberes. Esto nos permite obtener resultados óptimos que requieren la adaptación constante de nuevos conocimientos y habilidades.",
    icon: <EscudoIcon className="size-15 text-white" />,
    img: excelenciaBg,
  },
];

export default function Slide2() {
  return (
    <div className="flex w-full h-full items-center">
      <div className="flex w-full justify-center gap-7.5">
        {VALORES_INFO.map((valor) => {
          return (
            <div
              key={valor.id}
              className="relative w-105 h-135 overflow-hidden"
            >
              {/* Fondo */}
              <img
                src={valor.img}
                alt={valor.label}
                className="absolute inset-0 w-full h-full object-cover blur-[5px] z-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#12274c]/75 z-10" />

              {/* Contenido */}
              <div className="relative z-20 w-full h-full flex flex-col px-6.25 py-11.25 gap-3.75 text-white">
                <div className="self-center w-25 h-25 flex justify-center items-center rounded-full bg-valo">
                  {valor.icon}
                </div>

                <h3 className="text-[42px] font-lumarc font-bold uppercase tracking-wider">
                  {valor.label}
                </h3>
                <p className="text-[25px] leading-[110%]">
                  {valor.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
