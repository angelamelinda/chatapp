import React, { FC } from "react";

interface IGuestForm {}

const GuestForm: FC<IGuestForm> = () => {
  return (
    <div id="guest-form">
      <div className="guest-form__field">
        <label className="guest-form__label">Username</label>
        <input
          id="guest-form__username"
          className="guest-form__input"
          type="text"
        />
      </div>
      <button className="guest-form__button" id="guest-form__button-login">
        Login
      </button>
    </div>
  );
};

export default GuestForm;
