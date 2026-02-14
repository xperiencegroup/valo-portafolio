import { Outlet } from "react-router";
import LogoValoMark from "@/assets/logos/logo-valo-mark";

export default function NosotrosLayout() {
  return (
    <>
      <div className="absolute top-0 left-0 pt-3 px-5 lg:pt-13 lg:pl-15 z-50">
        <LogoValoMark className="w-[clamp(50px,7.34vw,141px)] text-valo" />
      </div>

      <Outlet />
    </>
  );
}
