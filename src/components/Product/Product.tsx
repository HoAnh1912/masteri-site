import React from 'react'
import styles from './Product.module.scss';
import ImageCustom from 'elements/Image/ImageCustom';
import Image from 'next/image';
import IconBath from '../../assets/svg/ic-bath.svg';
import IconBedroom from '../../assets/svg/ic-bedroom.svg';
import IconArrow from '../../assets/svg/ic-arrow-right.svg';
import Link from 'next/link';
import { ProductProps } from 'types/product.interface';

const Product = ({ id, image, title, numberBedroom, numberBath, des, custom }: ProductProps) => {
    return (
        <>
            <div className={`${styles.product__child} mt-[180px] keen-slider__slide number-slide1 min-w-max ${custom}`}>
                <p className='number__item text-mainOrange'>{id}</p>
                <h2 className='text-mainGrey text-[36px] font-semibold leading-[38px] pt-[61px] pb-10 w-[320px]'>
                    {title}
                </h2>
                <div className='flex'>
                    <div className='flex-center mr-10'>
                        <Image
                            priority
                            src={IconBedroom}
                            alt="icon-bedroom"
                        />
                        <p className='ml-3 font-bold text-[#363636]'>{numberBedroom}</p>
                    </div>
                    <div className='flex-center'>
                        <Image
                            priority
                            src={IconBath}
                            alt="icon-bath"
                        />
                        <p className='ml-3 font-bold text-[#363636]'>{numberBath}</p>
                    </div>
                </div>
                <div className='mt-[150px]'>
                    <ImageCustom src={image} alt="image-product" />
                </div>
            </div>
        </>

    )
}

export default Product