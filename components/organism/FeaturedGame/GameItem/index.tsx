import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Game {
  title: string;
  deskripsi: string;
  thumbnail:
    | "Thumbnail-1"
    | "Thumbnail-2"
    | "Thumbnail-3"
    | "Thumbnail-4"
    | "Thumbnail-5";
}
export default function GameItem(props: Game) {
  const { title, deskripsi, thumbnail } = props;
  return (
    <>
      <div className="featured-game-card position-relative">
        <Link href="/detail">
          <a>
            <div className="blur-sharp">
              <Image
                className="thumbnail"
                src={`/img/${thumbnail}.png`}
                width={205}
                height={270}
                alt="thumbnail-1"
              />
            </div>
            <div className="cover position-absolute bottom-0 m-32">
              <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                <div className="game-icon mx-auto">
                  <Image
                    src="/icon/console.svg"
                    alt="console icon"
                    width={54}
                    height={36}
                  />
                </div>
                <div>
                  <p className="fw-semibold text-white text-xl m-0">{title}</p>
                  <p className="fw-light text-white m-0">{deskripsi}</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
