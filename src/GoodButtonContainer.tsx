import React, { FC, useState } from "react";
import { RateButton } from "./RateButton";

type GoodButtonContainerProps = {
  buttonText: string;
};

export const GoodButtonContainer: FC<GoodButtonContainerProps> = (props) => {
  const [goodNumber, setGoodNumber] = useState<number>(0);

  const addGoodNumber = () => {
    setGoodNumber((preState) => preState + 1);
  };

  return (
    <RateButton {...props} clickedNumber={goodNumber} onClick={addGoodNumber} />
  );
};
