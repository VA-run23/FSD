import { useState } from "react";
import './index.css'; 

const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown && type === 'password' ? 'text' : type}
        placeholder={placeholder}
        className="input-field"
        required
      />
      <i className="material-symbols-rounded">{icon}</i>
      {type === 'password' && (
        <i
          onClick={() => setIsPasswordShown(prev => !prev)}
          className="material-symbols-rounded eye-icon"
        >
          {isPasswordShown ? 'SHOWN' : 'HIDDEN'}
        </i>
      )}
    </div>
  );
};

export default InputField;
