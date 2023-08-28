import React from 'react'
import { LocationItemType } from 'types/locationItem.interface'
import styles from './LocationItem.module.scss'

const LocationItem = ({ number, title }: LocationItemType) => {
    return (
        <div className={styles.location__item}>
            <p className='text-[32px] font-medium text-mainOrange pb-[30px]'>{number}</p>
            <h3 className='text-[32px] font-semibold text-mainGrey leading-[38px] w-[240px]'>{title}</h3>
        </div>
    )
}

export default LocationItem