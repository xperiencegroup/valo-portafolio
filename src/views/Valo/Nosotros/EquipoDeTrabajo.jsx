import BackButton from "@/components/Navigation/BackButton";
import miembro1 from "@/assets/images/equpo-de-trabajo/miembro1.jpg";
import miembro2 from "@/assets/images/equpo-de-trabajo/miembro2.jpg";
import miembro3 from "@/assets/images/equpo-de-trabajo/miembro3.jpg";
import miembro4 from "@/assets/images/equpo-de-trabajo/miembro4.jpg";
import miembro5 from "@/assets/images/equpo-de-trabajo/miembro5.jpg";
import miembro6 from "@/assets/images/equpo-de-trabajo/miembro6.jpg";
import miembro7 from "@/assets/images/equpo-de-trabajo/miembro7.jpg";

const TEAM = [
  {
    id: "jorge-canavati",
    name: "Jorge Luis Canavati Hadjópulos",
    role: "Presidente",
    image: miembro1,
  },
  {
    id: "juan-lobaton",
    name: "Juan Bernardo Lobatón Bernard",
    role: "Vicepresidente",
    image: miembro2,
  },
  {
    id: "bernardo-lobaton",
    name: "Bernardo Lobatón Martínez",
    role: "Miembro y Director General",
    image: miembro3,
  },
  {
    id: "marcelo-margain",
    name: "Marcelo Margáin Zambrano",
    role: "Miembro",
    image: miembro4,
  },
  {
    id: "ricardo-lobaton",
    name: "Ricardo Lobatón Bernard",
    role: "Miembro",
    image: miembro5,
  },
  {
    id: "pablo-canavati",
    name: "Pablo Canavati Hadjópulos",
    role: "Miembro",
    image: miembro6,
  },
  {
    id: "luis-canavati",
    name: "Luis Eugenio Canavati Quintanilla",
    role: "Miembro",
    image: miembro7,
  },
];

export default function EquipoDeTrabajo() {
  return (
    <div className="w-dvw h-dvh p-5 flex flex-col gap-6">
      <h1 className="text-valo text-5xl">VALO</h1>
      <div className="flex flex-1 items-center justify-center">
        <div className="grid grid-cols-8 gap-x-15.75 gap-y-7.5">
          {TEAM.map((member, index) => (
            <div
              key={member.id}
              className={`relative w-87.5 h-93 flex flex-col justify-end col-span-2 px-6 py-7.5 gap-3.75 outline-[5px] outline-valo
                ${index === 4 ? "col-start-2" : ""}
              `}
            >
              {/* Background Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-top -z-50"
              />

              {/* Overlay */}
              <div className="absolute inset-0 w-full h-full -z-30 bg-black/35" />

              {/* Content */}
              <p className="text-[37px] text-shadow-lg font-lumarc leading-[100%] uppercase">
                {member.name}
              </p>
              <p className="text-[21px] text-shadow-lg font-eurostile font-semibold uppercase">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <BackButton />
      </div>
    </div>
  );
}
