import { VideoIcon } from "@/assets/icons/VideoIcon";

export default function PlayButton() {
  return (
    <div className="group flex justify-center items-center size-[clamp(65px,4.69vw,90px)] bg-valo hover:bg-white hover:cursor-pointer">
      <span className="relative size-[clamp(38px,2.6vw,50px)]">
        {/* Inactive */}
        <span className="absolute inset-0 group-hover:hidden">
          <VideoIcon isActive={false} />
        </span>
        {/* Hover / Active */}
        <span className="absolute inset-0 hidden group-hover:block">
          <VideoIcon isActive />
        </span>
      </span>
    </div>
  );
}
