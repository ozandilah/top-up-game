import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwt_decode(jwtToken);
      const user = payload.player;
      setIsLogin(true);
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/${user.avatar}`;
      setUser(user);
    }
  }, []);

  if (isLogin) {
    return (
      <>
        <li className="nav-item my-auto dropdown d-flex">
          <div className="vertical-line d-lg-block d-none"></div>
          <div>
            <a
              className="dropdown-toggle ms-lg-40"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={user.avatar}
                className="rounded-circle"
                width="40"
                height="40"
                alt=""
              />
            </a>

            <ul
              className="dropdown-menu border-0"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <Link href="/member">
                  <a className="dropdown-item text-lg color-palette-2" href="#">
                    My Profile
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="dropdown-item text-lg color-palette-2" href="#">
                    Wallet
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/member/edit-profile">
                  <a className="dropdown-item text-lg color-palette-2" href="#">
                    Account Settings
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sign-in">
                  <a className="dropdown-item text-lg color-palette-2" href="#">
                    Log Out
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        ></script>
      </>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
}
