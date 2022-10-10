import { TextField, Button } from "@mui/material";
import { FC } from 'react'
interface ButtonProps {
    title: String;
}
const OptionButton: FC<ButtonProps> = ({title}) =>
{
    return (
    
    <Button color="success" variant="contained" >{title}</Button>
    )
}

export {OptionButton}