import React, { useState } from 'react'
import styles from './Gallery.module.scss'
import Link from 'next/link'
import { menuGallery } from 'constants/menu-header'
import ImageCustom from 'elements/Image/ImageCustom'
import { useKeenSlider } from 'keen-slider/react'
import Pagination from 'components/Pagination/Pagination'
import Image from 'next/image';
import IconArrow from '../../../../assets/svg/icon-arrow-white.svg';
import ButtonCircle from 'elements/ButtonCircle'

const Gallery = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <section id={styles.gallery__section}>
            <div className={`w-full absolute h-[80px] top-0 left-0 z-[1] bg-[#36363699] text-whiteText`}>
                <div className='container h-full'>
                    <ul className='flex-row-center'>
                        {menuGallery?.map((item, _) => {
                            return (
                                <li key={item.id} className='h-full flex-row-center'>
                                    <Link href={item?.href}>{item.label}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div >
            <div>
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                        <ImageCustom src='/images/gallery-first.jpg' alt="Banner" />
                        <div className='container'>
                            <div className='text-whiteText flex absolute top-[160px]'>
                                <div>
                                    <p className='title__section'>Gallery</p>
                                    <h1 className={styles.title__hero}>Selected Images</h1>
                                </div>
                                <div className='ml-[200px]'>
                                    <h3 className='text-whiteText text-[36px] font-semibold leading-[38px]'>
                                        Superior Apartment 3 BR / <br />Kitchen View
                                    </h3>
                                    <Pagination className='my-[80px]' />
                                    <p className='font-medium w-[400px]'>
                                        The spectacular 15 into 13 room corner residence is perfectly positioned on
                                        Fifth Avenue to enjoy the absolutely dazzling views of Central Park
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <ImageCustom src='/images/gallery-first.jpg' alt="Banner" />
                        <div className='container'>
                            <div className='text-whiteText flex absolute top-[160px]'>
                                <div>
                                    <p className='title__section'>Gallery</p>
                                    <h1 className={styles.title__hero}>Selected Images</h1>
                                </div>
                                <div className='ml-[200px]'>
                                    <h3 className='text-whiteText text-[36px] font-semibold leading-[38px]'>
                                        Superior Apartment 3 BR / <br />Kitchen View
                                    </h3>
                                    <Pagination className='my-[80px]' />
                                    <p className='font-medium w-[400px]'>
                                        The spectacular 15 into 13 room corner residence is perfectly positioned on
                                        Fifth Avenue to enjoy the absolutely dazzling views of Central Park
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <ImageCustom src='/images/gallery-first.jpg' alt="Banner" />
                        <div className='container'>
                            <div className='text-whiteText flex absolute top-[160px]'>
                                <div>
                                    <p className='title__section'>Gallery</p>
                                    <h1 className={styles.title__hero}>Selected Images</h1>
                                </div>
                                <div className='ml-[200px]'>
                                    <h3 className='text-whiteText text-[36px] font-semibold leading-[38px]'>
                                        Superior Apartment 3 BR / <br />Kitchen View
                                    </h3>
                                    <Pagination className='my-[80px]' />
                                    <p className='font-medium w-[400px]'>
                                        The spectacular 15 into 13 room corner residence is perfectly positioned on
                                        Fifth Avenue to enjoy the absolutely dazzling views of Central Park
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className={`${styles.navigator} absolute bottom-0 w-full pb-[52px]`}>
                        <div className='flex justify-end items-end relative'>
                            <div className={`${styles.arrow__pre} flex gap-[226px]`}>
                                <Link href="#">
                                    <a>
                                        <Image
                                            priority
                                            src={IconArrow}
                                            alt="icon-arrow"
                                        />  Prev
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className={styles.button__next}>
                                        Next
                                        <Image
                                            priority
                                            src={IconArrow}
                                            alt="icon-arrow"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <ButtonCircle titleButton='Discover gallery' custom={'bg-[#FFFFFF1A] text-whiteText'} />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Gallery