import Image from "next/image";
import React from "react";
import cx from "classnames";
interface TableRowProps {
  title: string;
  category: string;
  item: number;
  price: number;
  status: "PENDING" | "SUCCESS" | "FAILED";
  image: string;
}
export default function TableRow(props: TableRowProps) {
  const { title, category, item, price, status, image } = props;
  const StatusClass = cx({
    "float-start icon-status": true,
    pending: status === "PENDING",
    success: status === "SUCCESS",
    failed: status === "FAILED",
  });

  return (
    <>
      <tr className="align-middle">
        <th scope="row">
          <Image
            className="float-start me-3 mb-lg-0 mb-3"
            src={`/img/${image}.png`}
            width={80}
            height={60}
            alt="Game Thumbnail"
          />
          <div className="game-title-header">
            <p className="game-title fw-medium text-start color-palette-1 m-0">
              {title}
            </p>
            <p className="text-xs fw-normal text-start color-palette-2 m-0">
              {category}
            </p>
          </div>
        </th>
        <td>
          <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
        </td>
        <td>
          <p className="fw-medium text-start color-palette-1 m-0">Rp {price}</p>
        </td>
        <td>
          <div>
            <span className={StatusClass}></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
              {status}
            </p>
          </div>
        </td>
      </tr>
    </>
  );
}
