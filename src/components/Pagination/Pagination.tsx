import React from 'react'
import styles from './Pagination.module.scss'
import { PaginationProps } from 'types/pagination.interface'

const Pagination = ({ className }: PaginationProps) => {
    return (
        <div className={className}>
            <p className={styles.slider__bottom}>02<span>/03</span></p>
        </div>
    )
}

export default Pagination