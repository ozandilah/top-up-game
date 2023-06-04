import InputIndex from "@/components/atom/Input";
import SideBar from "@/components/organism/Sidebar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { JWTPayloadTypes, userTypes } from "@/services/data-types";
import jwtDecode from "jwt-decode";
import { updateProfile } from "@/services/member";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface userStateTypes {
  id: string;
  name: string;
  email: string;
  avatar: any;
}
export default function EditProfile() {
  const [user, setUser] = useState<userStateTypes>({
    id: "",
    name: "",
    avatar: "",
    email: "",
  });
  const [preview, setPreview] = useState("/");
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const user: userTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/${user.avatar}`;
      setUser(user);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();
    data.append("image", user.avatar);
    data.append("name", user.name);
    const response = await updateProfile(data, user.id);
    if (response.error) {
      toast.error(response.message);
    } else {
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };

  return (
    <>
      <section className="edit-profile overflow-auto">
        <SideBar activeMenu="settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      {preview === "/" ? (
                        <Image
                          src={user.avatar}
                          alt="icon upload"
                          width={90}
                          height={90}
                          style={{ borderRadius: "100%" }}
                        />
                      ) : (
                        <Image
                          src={preview}
                          alt="icon upload"
                          width={90}
                          height={90}
                          style={{ borderRadius: "100%" }}
                        />
                      )}
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        const img = event.target.files![0];
                        setPreview(URL.createObjectURL(img));
                        return setUser({
                          ...user,
                          avatar: img,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <InputIndex
                    label="Full Name"
                    value={user.name}
                    onChange={(event) =>
                      setUser({
                        ...user,
                        name: event.target.value,
                      })
                    }
                  />
                </div>
                <div className="pt-30">
                  <InputIndex
                    label="Email Address"
                    disabled
                    value={user.email}
                  />
                </div>
                {/* <div className="pt-30">
                  <InputIndex label="Phone" />
                </div> */}
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="button"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    onClick={onSubmit}
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
