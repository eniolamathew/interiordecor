import { Col } from "../../style/layout"
import { IInputProps } from "./input.i"
import { InputHolder } from "./input.s"

const Input = (props: IInputProps) => {
    return <>
        <Col md={4} align="center">
            <label htmlFor="label">{props.label}</label>
        </Col>
        <Col md={8}>
            <InputHolder
                value={props.value}
                onBlur={props.onBlur}
                onChange={props.onChange}
                type={props.obscureText ? "password" : "text"}
            />
        </Col>
    </>
}

export default Input