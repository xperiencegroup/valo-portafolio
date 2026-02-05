import { useNavigate } from "react-router";
import { ReturnIcon } from "@/assets/icons/ReturnIcon";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { useLocation } from "react-router";

export default function BackButton({ to = "" }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setShowSplashScreen } = useContext(AppContext);

  const handleBack = () => {
    if (pathname === "/") {
      setShowSplashScreen(true);
    } else {
      navigate(to);
    }
  };

  return (
    <button
      onClick={() => handleBack()}
      className="group flex justify-between items-center w-77.75 h-17.5 px-11.25 bg-valo hover:bg-white hover:cursor-pointer"
    >
      <p className="text-[21px] font-semibold text-white group-hover:text-valo group-hover:font-bold">
        Regresar
      </p>

      {/* Inactive */}
      <span className="group-hover:hidden">
        <ReturnIcon isActive={false} />
      </span>
      {/* Hover / Active */}
      <span className="hidden group-hover:block">
        <ReturnIcon isActive />
      </span>
    </button>
  );
}
