import { setSignUp } from "@/services/auth";
import { CategoryTypes } from "@/services/data-types";
import { getGameCategory } from "@/services/player";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpPhoto() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);

  const [favorite, setFavorite] = useState("");

  const [image, setImage] = useState("");

  const [preview, setPreview] = useState("/icon/uploud.svg");

  const [localStorageForm, setLocalStorageForm] = useState({
    name: "",
    email: "",
  });

  const getGameCategoryAPI = useCallback(async () => {
    const data = (await getGameCategory()).data;
    console.log("data : ", data);

    setCategories(data);
    setFavorite(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getGameCategoryAPI();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    setLocalStorageForm(JSON.parse(getLocalForm!));
  }, []);

  const onSubmit = async () => {
    console.log("====================================");
    console.log("favorite : ", favorite);
    console.log("image : ", image);
    console.log("====================================");

    const getLocalForm = await localStorage.getItem("user-form");
    const form = JSON.parse(getLocalForm!);
    const data = new FormData();
    data.append("image", image);
    data.append("email", form.email);
    data.append("name", form.name);
    data.append("password", form.password);
    data.append("username", form.name);
    data.append("phoneNumber", "083861561577");
    data.append("role", "user");
    data.append("status", "Y");
    data.append("favorite", favorite);

    const result = await setSignUp(data);

    if (result.error) {
      toast.error("Email Sudah Terdaftar");
    } else {
      toast.success("🦄 Register Success!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/sign-up-success");
      localStorage.removeItem("user-form");
    }
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
                        src={preview}
                        width={120}
                        height={120}
                        alt="Upload"
                        className="img-upload"
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        const img = event.target.files[0];
                        setPreview(URL.createObjectURL(img));
                        return setImage(img);
                      }}
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {localStorageForm.name}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                  {localStorageForm.email}
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
                    {categories.map((category: CategoryTypes) => {
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
        <ToastContainer />
      </section>
    </>
  );
}
