import Button from "@/atoms/button";
import Text from "@/atoms/text";
import { HTMLAttributes } from "react";

interface ButtonTextProps extends HTMLAttributes<HTMLButtonElement> {
    children: string
}

export default function ButtonText(props: ButtonTextProps) {
    const {children, ...attributes} = props
    return <Button {...attributes}><Text defaultStyle={false}>{props.children}</Text></Button>
}