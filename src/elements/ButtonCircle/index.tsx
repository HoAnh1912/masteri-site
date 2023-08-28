import Link from 'next/link'
import React from 'react'
import styles from './ButtonCircle.module.scss'


interface ButtonCircleProps {
    titleButton: string;
    custom?: any
}
const ButtonCircle = ({ titleButton, custom }: ButtonCircleProps) => {
    return (
        <div className={`${styles.button__circle} ${custom} `}>
            {/* <div className={styles.button__circle}> */}
            <Link href="#">{titleButton}</Link>
        </div >
    )
}

export default ButtonCircle