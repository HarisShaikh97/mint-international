import Image from "next/image";
import { Avatar } from "@mui/material";

export default function AccountantLayout({ children }) {
  return (
    <section>
      <div className="h-24 w-full border-b-2 border-secondary flex items-center justify-between px-2 md:px-10">
        <div className="w-[150px]">
          <Image
            src={"/images/mint-international-logo.png"}
            alt="logo"
            height={50}
            width={100}
          />
        </div>
        <h1 className="text-bold text-sm lg:text-2xl font-extrabold text-primary">
          Accountant Dashboard
        </h1>
        <div className="flex items-center gap-2 lg:gap-4">
          <p className="text-bold text-sm lg:text-xl font-bold text-primary">
            Remy Sharp
          </p>
          <Avatar alt="Remy Sharp" src="\images\avatar.jfif" />
        </div>
      </div>
      {children}
    </section>
  );
}
