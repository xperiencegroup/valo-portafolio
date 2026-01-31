import { VideoIcon } from "@/assets/icons/VideoIcon";

export default function PlayButton() {
  return (
    <div className="group flex justify-center items-center size-22.5 bg-valo hover:bg-white hover:cursor-pointer">
      {/* Inactive */}
      <span className="group-hover:hidden">
        <VideoIcon isActive={false} />
      </span>
      {/* Hover / Active */}
      <span className="hidden group-hover:block">
        <VideoIcon isActive />
      </span>
    </div>
  );
}
