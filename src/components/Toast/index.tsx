import React, { FC } from "react";

interface IToast {
  message: string;
}

const Toast: FC<IToast> = ({ message }) => {
  return (
    <div className="toast">
      <div className="toast__message">{message}</div>
    </div>
  );
};

export default Toast;
