import { HTMLAttributes } from "react";
import styles from './text.module.css'

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
    children: string;
    defaultStyle?: boolean;
}

export default function Text(props: TextProps) {
    const {children, defaultStyle, className, ...attributes} = props
    if (defaultStyle || typeof defaultStyle === 'undefined') {
        return <span {...attributes} className={`${className ?? ''} ${styles.text}`}>{children}</span>
    }
    return <span {...attributes} className={`${className ?? ''}`}>{children}</span>
}