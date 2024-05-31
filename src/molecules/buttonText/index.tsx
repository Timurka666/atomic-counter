import Button from "@/atoms/button";
import Text from "@/atoms/text";

interface ButtonTextProps {
    children: string
}

export default function ButtonText(props: ButtonTextProps) {
    return <Button><Text defaultStyle={false}>{props.children}</Text></Button>
}