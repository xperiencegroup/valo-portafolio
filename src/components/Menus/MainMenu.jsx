import { CircleIndicatorIcon } from "@/assets/icons/CircleIndicatorIcon";
import { Link } from "react-router";
import data from "@/data/Valo/menu.json";

export default function MainMenu() {
  const { menu } = data;
  return (
    <div className="px-5 py-6.25 bg-valo">
      <p className="flex justify-center items-center w-67.75 h-17 px-6.25 py-3.75 text-[32px] uppercase">
        Menú
      </p>

      <nav className="flex flex-col">
        {menu.map((section) => {
          return (
            <Link
              key={section.id}
              to={section.to}
              className="group flex items-center justify-between w-full h-17.5 px-6.25 text-[21px] font-semibold rounded-[40px] hover:bg-white hover:text-valo hover:font-bold hover:cursor-pointer"
            >
              {section.label}

              <span className="relative w-6 h-6">
                {/* Inactive */}
                <span className="absolute inset-0 group-hover:hidden">
                  <CircleIndicatorIcon isActive={false} />
                </span>

                {/* Active / Hover */}
                <span className="absolute inset-0 hidden group-hover:block">
                  <CircleIndicatorIcon isActive />
                </span>
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
