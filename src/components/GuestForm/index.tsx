import React, { FC, ChangeEvent, MouseEvent } from "react";

interface IGuestForm {
  change: (e: ChangeEvent<HTMLInputElement>) => void;
  username: string;
  handleLogin: (e: MouseEvent<HTMLButtonElement>) => void;
}

const GuestForm: FC<IGuestForm> = ({ change, username, handleLogin }) => {
  return (
    <div id="guest-form">
      <div className="guest-form__field">
        <label className="guest-form__label">Username</label>
        <input
          id="guest-form__username"
          className="guest-form__input"
          type="text"
          onChange={change}
          value={username}
        />
      </div>
      <button
        className="guest-form__button"
        id="guest-form__button-login"
        onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default GuestForm;
