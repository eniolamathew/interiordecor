import React, { ChangeEvent } from "react";
import InputContainer from "../components/ui/emailInput/InputContainer";

interface InputProps {
  label: string;
  value: string;
  error: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<InputProps> = ({ label, value, error, onChange }) => {
  return (
    <div className="mb-1">
      {
        <InputContainer
          label={label}
          value={value}
          obscureText={false}
          onChange={onChange}
          error={error}
          autoComplete={false}
          disabled={false}
        />
      }
    </div>
  );
};

export default FormInput;
