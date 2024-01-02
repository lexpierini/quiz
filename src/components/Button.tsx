import styles from '../styles/Button.module.css'
import Link from 'next/link'

type ButtonProps = {
    text: string
    href?: string
    onClick?: (e: any) => void
}


export default function Button(props: ButtonProps) {
    const buttonRender = () => (
        <button className={styles.customButton} onClick={props.onClick}>
            {props.text}
        </button>
    )

    return props.href ? (
        <Link href={props.href} >{buttonRender()}</Link>
    ) : (
        buttonRender()
    )
}