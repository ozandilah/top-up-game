import Image from "next/image";
import React, { ReactNode } from "react";
export interface IconProps {
  icon: "/icon/stepOne.svg" | "/icon/stepTwo.svg" | "/icon/stepThree.svg";
  title: string;
  deskripsi: string;
}
export default function StepItem(props: IconProps) {
  const { icon, title, deskripsi } = props;
  return (
    <>
      <div className="col-lg-4">
        <div className="card feature-card border-0">
          <Image
            src={icon}
            width={80}
            height={80}
            alt="icon"
            className="mb-30"
          />
          <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
          <p className="text-lg color-palette-1 mb-0">{deskripsi}</p>
        </div>
      </div>
    </>
  );
}
