import { IndustrialIcon } from "@/assets/icons/proyectos/IndustrialIcon";
import { ResidencialHorizontalIcon } from "@/assets/icons/proyectos/ResidencialHorizontalIcon";
import { ResidencialVerticalIcon } from "@/assets/icons/proyectos/ResidencialVerticalIcon";
import { UsosMixtosIcon } from "@/assets/icons/proyectos/UsosMixtosIcon";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { FILTERS_ID } from "@/const/FiltersId";

const BUTTONS = [
  {
    id: FILTERS_ID.INDUSTRIAL,
    label: "Industrial",
    abbreviation: "IN",
    icon: IndustrialIcon,
  },
  {
    id: FILTERS_ID.RESIDENCIAL_VERTICAL,
    label: "Residencial Vertical",
    abbreviation: "RV",
    icon: ResidencialVerticalIcon,
  },
  {
    id: FILTERS_ID.RESIDENCIAL_HORIZONTAL,
    label: "Residencial Horizontal",
    abbreviation: "RH",
    icon: ResidencialHorizontalIcon,
  },
  {
    id: FILTERS_ID.USOS_MIXTOS,
    label: "Usos Mixtos",
    abbreviation: "UM",
    icon: UsosMixtosIcon,
  },
];

export const MapFilterButtons = () => {
  const { selectMapFilter, mapFilter } = useContext(AppContext);
  return (
    <div className="fixed z-30 top-0 right-0 py-5 px-3.75">
      <div className="flex flex-col items-end gap-3.75">
        {BUTTONS.map((button) => {
          const Icon = button.icon;
          return (
            <button key={button.id} onClick={() => selectMapFilter(button.id)}>
              {mapFilter === button.id ? (
                // Active Button
                <span
                  key={button.id}
                  className="relative h-17.5 max-w-117.5 flex items-center gap-2.5 px-3.75 bg-white hover:cursor-pointer"
                >
                  <span className="flex shrink">
                    <Icon isActive />
                  </span>
                  <span className="text-[30px] whitespace-nowrap text-valo font-lumarc tracking-wider uppercase">
                    {button.label}
                  </span>
                </span>
              ) : (
                <span className="group relative flex justify-center items-center w-31 h-17.5 gap-2.5 px-2.5 py-3.75 bg-valo hover:cursor-pointer">
                  <Icon />
                  <p className="text-[30px] text-white font-lumarc tracking-wider">
                    {button.abbreviation}
                  </p>

                  {/* Hover Button */}
                  <span className="absolute top-0 right-0 h-17.5 flex items-center gap-2.5 px-3.75 bg-white overflow-hidden max-w-0 opacity-0 transition-[max-width,opacity] duration-400 ease-out group-hover:max-w-117.5 group-hover:opacity-100">
                    <span className="flex shrink">
                      <Icon isActive />
                    </span>
                    <span className="text-[30px] whitespace-nowrap text-valo font-lumarc tracking-wider uppercase">
                      {button.label}
                    </span>
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
