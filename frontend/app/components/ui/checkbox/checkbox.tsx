import { IInputProps } from "./checkbox.i"
import { CheckboxHolder } from "./checkbox.s"

const Checkbox:React.FC<IInputProps>= ({onChange, checked, type = 'checkbox'}) => {
    return <>
        <CheckboxHolder
            onChange={onChange}
            checked={checked}
            type={type}
        />
    </>
}

export default Checkbox