import Image from "next/image";
import React from "react";
import cx from "classnames";
import Link from "next/link";
interface MenuProps {
  title: string;
  icon:
    | "icon-menu-overview"
    | "icon-transactions"
    | "icon-card"
    | "icon-message"
    | "icon-rewards"
    | "icon-settings"
    | "icon-logout";
  active?: boolean;
  href?: string;
  onClick?: () => void;
}
export default function MenuItem(props: MenuProps) {
  const { title, icon, active, href = "/", onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <>
      {" "}
      <div className={classItem} onClick={onClick}>
        <Image
          src={`/icon/${icon}.svg`}
          className="me-3"
          width={25}
          height={25}
          alt="icon overview"
        />
        <p className="item-title m-0">
          {onClick ? (
            <a className="text-lg text-decoration-none">{title}</a>
          ) : (
            <Link href={href}>
              <a className="text-lg text-decoration-none">{title}</a>
            </Link>
          )}
        </p>
      </div>
    </>
  );
}
