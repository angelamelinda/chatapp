import React, { FC } from "react";

interface IModal {
  title: string;
}

const Modal: FC<IModal> = ({ title, children }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__title">{title}</div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
