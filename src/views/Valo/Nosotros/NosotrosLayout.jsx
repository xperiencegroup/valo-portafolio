import { Outlet } from "react-router";
import LogoValoMark from "@/assets/logos/logo-valo-mark";

export default function NosotrosLayout() {
  return (
    <>
      <div className="absolute top-0 left-0 pt-13 pl-15 z-50">
        <LogoValoMark className="text-valo" />
      </div>

      <Outlet />
    </>
  );
}
