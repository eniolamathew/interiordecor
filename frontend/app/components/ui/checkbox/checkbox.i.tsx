export interface IInputProps {
    checked: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    type: string
}