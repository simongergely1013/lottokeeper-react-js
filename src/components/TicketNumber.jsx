import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { placeNumberUser } from "../store/data/actions";

const styles = {
  number:
    "w-8 h-8 flex justify-center items-center border rounded-full bg-slate-100 text-center font-bold m-1 cursor-pointer transition-all duration-100 hover:bg-green-500 hover:text-slate-100 drop-shadow-xl",
};

const TicketNumber = ({ number }) => {
  const [isActive, setIsActive] = useState(false);
  const { currentSelectedNums } = useSelector((state) => state.data.user);
  const dispatch = useDispatch();

  const handleNumClick = (num) => {
    if (currentSelectedNums.length >= 5 || currentSelectedNums.includes(num)) {
      return;
    } else {
      setIsActive(!isActive);
      dispatch(placeNumberUser(num));
    }
  };

  useEffect(() => {
    if (currentSelectedNums.length === 0) {
      setIsActive(false);
    }
  }, [currentSelectedNums]);

  return (
    <div
      key={number}
      className={`${styles.number} ${
        isActive && "bg-green-600 text-slate-100"
      }`}
      onClick={() => handleNumClick(number)}
    >
      {number}
    </div>
  );
};

export default TicketNumber;
