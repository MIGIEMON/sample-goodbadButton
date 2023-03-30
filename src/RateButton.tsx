import React, { FC } from "react";

// コンポーネントのProps（パラメータ）の型を定義
type RateButtonProps = {
  buttonText: string;
  clickedNumber: number;
  onClick: () => void;
};

// 関数コンポーネント
export const RateButton: FC<RateButtonProps> = (props) => {
  const { buttonText, clickedNumber, onClick } = props;

  return (
    <>
      <button onClick={onClick}>{buttonText}</button>
      <label> {clickedNumber}</label>
    </>
  );
};
