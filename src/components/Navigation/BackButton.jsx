import { useNavigate } from "react-router";
import { ReturnIcon } from "@/assets/icons/ReturnIcon";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { useLocation } from "react-router";

export default function BackButton({ to = "" }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { toggleSplashScreen } = useContext(AppContext);
  const { selectMapFilter } = useContext(AppContext);

  const handleBack = () => {
    if (pathname === "/") {
      toggleSplashScreen();
    } else if (pathname.includes("/proyectos/")) {
      // Clean useContext mapFilter
      selectMapFilter(null);
      navigate(to);
    } else {
      navigate(to);
    }
  };

  return (
    <button
      onClick={() => handleBack()}
      className="group flex justify-between items-center w-[clamp(220px,16.2vw,311px)] h-17.5 px-[33px] 2xl:px-11.25 bg-valo hover:bg-white hover:cursor-pointer -translate-y-0.5"
    >
      <p className="text-paragraph-button font-semibold text-white group-hover:text-valo group-hover:font-bold">
        Regresar
      </p>

      <span className="relative size-[clamp(20px,1.35vw,26px)]">
        {/* Inactive */}
        <span className="absolute inset-0 group-hover:hidden">
          <ReturnIcon isActive={false} />
        </span>
        {/* Hover / Active */}
        <span className="absolute inset-0 hidden group-hover:block">
          <ReturnIcon isActive />
        </span>
      </span>
    </button>
  );
}
