import { getGameCategory } from "@/services/player";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);

  const [favorite, setFavorite] = useState("");

  const getGameCategoryAPI = useCallback(async () => {
    const data = await getGameCategory();
    console.log("data : ", data);

    setCategories(data);
    setFavorite(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getGameCategoryAPI();
  }, []);

  const onSubmit = () => {
    console.log("====================================");
    console.log("favorite : ", favorite);
    console.log("====================================");
  };
  return (
    <>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      <Image
                        src="/icon/uploud.svg"
                        width={120}
                        height={120}
                        alt="Upload"
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  Shayna Anne
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                  shayna@anne.com
                </p>
                <div className="pt-50 pb-50">
                  <label
                    htmlFor="category"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Favorite Game
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                    value={favorite}
                    onChange={(event) => setFavorite(event.target.value)}
                  >
                    {categories.map((category) => {
                      return (
                        <option
                          key={category._id}
                          value={category._id}
                          selected
                        >
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <button
                  type="button"
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  onClick={onSubmit}
                >
                  Create My Account
                </button>

                <Link href="/#">
                  <a
                    className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                    role="button"
                  >
                    Terms & Conditions
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
