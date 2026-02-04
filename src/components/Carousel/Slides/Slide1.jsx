import { CompromisoIcon } from "@/assets/icons/conoce-valo-developers/CompromisoIcon";
import { EscudoIcon } from "@/assets/icons/conoce-valo-developers/EscudoIcon";
import { IdeaIcon } from "@/assets/icons/conoce-valo-developers/IdeaIcon";
import { ValoresIcon } from "@/assets/icons/conoce-valo-developers/ValoresIcon";

const INFORMACION = [
  {
    id: "mision",
    label: "Misión",
    description:
      "Desarrollar proyectos inmobiliarios estratégicos que sumen al crecimiento económico de su entorno, e impulsen el éxito de todos los involucrados.",
  },
  {
    id: "vision",
    label: "Visión",
    description:
      "Ser el aliado inmobiliario de nuestros clientes, socios, e inversionistas, generando oportunidades de negocio con un acompañamiento profesional y personalizado.",
  },
  {
    id: "valores",
    label: "Valores",
    description: "Compromiso, Franqueza, Asertividad y Excelencia",
  },
];

const VALORES = [
  {
    id: "compromiso",
    label: "Compromiso",
    icon: <CompromisoIcon />,
  },
  {
    id: "franqueza",
    label: "Franqueza",
    icon: <ValoresIcon />,
  },
  {
    id: "asertividad",
    label: "Asertividad",
    icon: <IdeaIcon />,
  },
  {
    id: "excelencia",
    label: "Excelencia",
    icon: <EscudoIcon />,
  },
];

export default function Slide1() {
  return (
    <div className="flex w-full h-full items-center justify-center gap-12.5">
      <div className="flex flex-col gap-7.5">
        {INFORMACION.map((info) => {
          return (
            <div key={info.id} className="flex flex-col gap-1.25">
              <h2 className="text-[42px] font-lumarc font-bold uppercase tracking-widest">
                {info.label}
              </h2>
              <p className="max-w-267.5 text-3xl">{info.description}</p>
            </div>
          );
        })}
      </div>

      {/* Íconos */}
      <div className="grid grid-cols-2 gap-7.5">
        {VALORES.map((valor) => {
          return (
            <div
              key={valor.id}
              className="size-60 flex flex-col justify-center items-center gap-5 p-5"
            >
              {valor.icon}
              <p className="text-[30px] font-lumarc uppercase">{valor.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
