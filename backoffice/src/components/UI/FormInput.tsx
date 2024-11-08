import React, { useEffect, useState } from 'react';
import DInputGroup from './core/DInputGroup';
import DInput from './core/DInput';
import DLabel from './core/DLabel';
import DText from './core/DText';

interface FormInputProps {
  value?: string;
  id?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  step?: string | number;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  style?: React.CSSProperties;
  innerRef?: React.Ref<HTMLInputElement>;
  onlyLatin?: boolean;
  allowedKeys?: string;
  errorMessage?: string;
  formInputStyle?: React.CSSProperties;
  reset?: number;
  append?: React.ReactNode;
  appendStyle?: React.CSSProperties;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  isClearable?: boolean;
  defaultChecked?: boolean;
  checked?: boolean;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const [value, setValue] = useState<string>(props.value || '');

  useEffect(() => { setValue(props.value || '') }, [props.value, props.reset]);

  useEffect(() => { props.reset! > 0 && setValue('') }, [props.reset]);

  const inputProps = {
    id: props.id,
    value: value,
    placeholder: props.placeholder,
    className: props.className,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (props.onChange) props.onChange(e);
    },
    onPaste: props.onPaste,
    disabled: props.disabled,
    readOnly: props.readOnly,
    autoComplete: props.autoComplete,
    onKeyDown: props.onKeyDown,
    onClick: props.onClick,
    step: props.step,
    min: props.min,
    max: props.max,
    maxLength: props.maxLength,
    style: props.style,
    onInput: (e: React.FormEvent<HTMLInputElement>) => {
      if (props.onlyLatin && props.allowedKeys) {
        e.preventDefault();
        const inputValue = e.currentTarget.value.replace(props.allowedKeys, "");
        setValue(inputValue);
      }
    },
    checked: props.checked,
    defaultChecked: props.defaultChecked,
  };

  if (!props.onChange) {
    return (
      <div className="form-input" style={props.formInputStyle}>
        {props.label && <DLabel>{props.label}</DLabel>}
        <DInputGroup>
          <DInput {...inputProps} />
        </DInputGroup>
        {props.errorMessage && (
          <DText
            id={props.id + "-error"}
            className={`error-message ${props.append && "col-md-11"}`}
          >
            {props.errorMessage}
          </DText>
        )}
      </div>
    );
  }

  return (
    <div className="form-input" style={props.formInputStyle}>
      {props.label && <DLabel>{props.label}</DLabel>}
      <DInputGroup>
        <DInput {...inputProps} />
      </DInputGroup>
      {props.errorMessage && (
        <DText
          id={props.id + "-error"}
          className={`error-message ${props.append && "col-md-11"}`}
        >
          {props.errorMessage}
        </DText>
      )}
    </div>
  );
};

export default FormInput;