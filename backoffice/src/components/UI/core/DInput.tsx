import React from 'react';

interface DInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  inputSize?: 'sm' | 'md' | 'lg';
  colorVariant?: 'primary' | 'secondary' | 'light' | 'dark' | 'danger' | 'warning' | 'info' | 'success'; // Bootstrap color variants
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  step?: string | number;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  style?: React.CSSProperties;
  onlyLatin?: boolean;
  errorMessage?: string;
  required?: boolean;
  defaultChecked?: boolean;  
  checked?: boolean; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const DInput: React.FC<DInputProps> = ({
  value,
  id,
  name,
  type = 'text',
  placeholder,
  className = '',
  inputSize = 'lg',
  colorVariant,
  disabled,
  readOnly,
  autoComplete,
  step,
  min,
  max,
  maxLength,
  style,
  onlyLatin,
  errorMessage,
  required,
  defaultChecked,
  checked,
  onChange,
  onFocus,
  onBlur,
  onPaste,
  onKeyUp,
  onKeyDown,
  onClick,
  onInput,
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  // Dynamic class handling for Bootstrap compatibility
  const inputClasses = [
    'form-control',
    inputSize ? `form-control-${inputSize}` : '',
    colorVariant ? `text-${colorVariant}` : '',
    className
  ].join(' ').trim();

  return (
    <div className="mb-3">
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={inputClasses}
        disabled={disabled}
        readOnly={readOnly}
        autoComplete={autoComplete}
        step={step}
        min={min}
        max={max}
        maxLength={maxLength}
        style={style}
        defaultChecked={defaultChecked}  
        checked={checked}
        required={required}
        aria-describedby={errorMessage ? `${inputId}-error` : undefined}
        aria-invalid={!!errorMessage}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onPaste={onPaste}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onClick={onClick}
        onInput={onInput}
        data-lpignore="true"
      />
    </div>
  );
};

export default DInput;