import React, { ButtonHTMLAttributes } from "react";
import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    const {children, ...buttonAttributes} = props
    return <button {...buttonAttributes} className={`${styles.button} ${buttonAttributes.className ?? ''}`}>{children}</button>
}