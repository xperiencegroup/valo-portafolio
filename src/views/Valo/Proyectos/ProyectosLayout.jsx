import { Outlet } from "react-router";
import BackButton from "@/components/Navigation/BackButton";

export default function ProyectosLayout() {
  return (
    <>
      <Outlet />
      {/* Return button */}
      <div className="fixed bottom-0 p-5 z-30">
        <BackButton />
      </div>
    </>
  );
}
