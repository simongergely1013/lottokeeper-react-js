import React, { useState } from "react";
import formatNumber from "../utilities/formatNumber";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { DropdownTriangle, BalanceSvg, PlaySvg, StatsSvg } from "./Svgs";

const styles = {
  main: "h-screen w-1/5 flex flex-col items-center bg-slate-950 text-slate-100 p-6",
  conatiner: "w-full flex items-center justify-center font-bold",
  stats: "text-xl mr-20",
  title: "text-3xl tracking-widest",
  triangleToggle: "transition-all 0.2s ease-in-out",
  dropdown:
    "flex flex-col gap-3 transition-opacity duration-200 ease-in-out opacity-0",
  dropdownText: "text-sm",
  link: "hover:bg-slate-600",
};

const NavBar = () => {
  const { userName, userBalance, ownerBalance } = useSelector(
    (state) => state.data
  );
  const [userToggle, setUserToggle] = useState(true);
  const [ownerToggle, setOwnerToggle] = useState(true);

  return (
    <div className={styles.main}>
      <div className={styles.conatiner}>
        <h1 className={styles.title}>Lottokeeper</h1>
      </div>
      <div className="w-full mt-24 pl-6">
        <div className="flex items-center gap-1 mb-4">
          <h2>{userName}</h2>
          <div onClick={() => setUserToggle(!userToggle)}>
            <DropdownTriangle
              className={`${styles.triangleToggle} ${
                userToggle && "rotate-90"
              }`}
            />
          </div>
        </div>
        <div className={`${styles.dropdown} ${userToggle && "opacity-100"}`}>
          <div className="flex items-center bg-slate-800 p-2 rounded">
            <BalanceSvg />
            <p className={styles.dropdownText}>
              Total balance: {formatNumber(userBalance)}
            </p>
          </div>
          <div className="flex flex-col gap-4 p-2">
            <div className="flex items-center hover:scale-110">
              <PlaySvg />
              <Link to="/user/game" className={styles.dropdownText}>
                Play game
              </Link>
            </div>
            <div className="flex items-center hover:scale-110">
              <StatsSvg />
              <Link to="/user/stats" className={styles.dropdownText}>
                Statistics
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 pl-6">
        <div className="flex items-center gap-1 mb-4">
          <h2>OWNER</h2>
          <div onClick={() => setOwnerToggle(!ownerToggle)}>
            <DropdownTriangle
              className={`${styles.triangleToggle} ${
                ownerToggle && "rotate-90"
              }`}
            />
          </div>
        </div>
        <div className={`${styles.dropdown} ${ownerToggle && "opacity-100"}`}>
          <div className="flex items-center bg-slate-800 p-2 rounded">
            <BalanceSvg />
            <p className={styles.dropdownText}>
              Total balance: {formatNumber(ownerBalance)}
            </p>
          </div>
          <div className="flex flex-col gap-4 p-2">
            <div className="flex items-center hover:scale-110">
              <PlaySvg />
              <Link to="/owner/game" className={styles.dropdownText}>
                Play game
              </Link>
            </div>
            <div className="flex items-center hover:scale-110">
              <StatsSvg />
              <Link to="/owner/stats" className={styles.dropdownText}>
                Statistics
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 p-1 tracking-widest rounded hover:scale-110">
        <Link to="/sidenotes">side notes</Link>
      </div>
    </div>
  );
};

export default NavBar;
