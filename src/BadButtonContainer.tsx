import React, { FC, useState } from "react";
import { RateButton } from "./RateButton";

type BadButtonContainerProps = {
  buttonText: string;
};

export const BadButtonContainer: FC<BadButtonContainerProps> = (props) => {
  // コンポーネントが持つState(状態)
  const [badNumber, setBadNumber] = useState<number>(0);

  const addBadNumber = () => {
    setBadNumber((preState) => preState + 1);
  };

  return (
    <RateButton {...props} clickedNumber={badNumber} onClick={addBadNumber} />
  );
};
