import React, { useState } from 'react'
import styles from './Banner.module.scss'
import Link from 'next/link'
import ImageCustom from 'elements/Image/ImageCustom'
import Pagination from 'components/Pagination/Pagination'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Header from 'components/Header/Header'


const Banner = () => {
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
        <>
            <Header />
            <section id={styles.hero__section}>
                <div ref={sliderRef} className="keen-slider h-[100vh]">
                    <div className="keen-slider__slide number-slide1 relative">
                        <ImageCustom src='/images/slider-first.jpg' alt="Banner" />
                        <div className='container'>
                            <div className='absolute top-[150px]'>
                                <div className='text-whiteText flex'>
                                    <div>
                                        <h1 className={styles.title__hero}>Find a home that suits your lifestyle</h1>
                                        <p className='title__section mt-[42px]'>SUPERIOR</p>
                                        <p className='number__item mt-[280px] pl-[240px] text-whiteText'>02</p>
                                    </div>
                                    <p className='font-medium w-[397px] ml-[83px] mt-[260px]'>Built on centuries of tradition and dedicated
                                        to innovating the luxury real estate industry, Masteri Centre Point offers transformative
                                        experiences through a global network of exceptional and outstanding agents.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide2 relative">
                        <ImageCustom src='/images/slider-first.jpg' alt="Banner" />
                        <div className='container'>
                            <div className='absolute top-[110px]'>
                                <div className='text-whiteText flex'>
                                    <div>
                                        <h1 className={styles.title__hero}>Find a home that suits your lifestyle</h1>
                                        <p className='title__section mt-[42px]'>SUPERIOR</p>
                                        <p className='number__item mt-[280px] pl-[240px] text-whiteText'>02</p>
                                    </div>
                                    <p className='font-medium w-[397px] ml-[83px] mt-[260px]'>Built on centuries of tradition and dedicated
                                        to innovating the luxury real estate industry, Masteri Centre Point offers transformative
                                        experiences through a global network of exceptional and outstanding agents.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide3 relative">
                        <ImageCustom src='/images/slider-first.jpg' alt="Banner" />
                        <div className='container'>
                            <div className='absolute top-[110px]'>
                                <div className='text-whiteText flex'>
                                    <div>
                                        <h1 className={styles.title__hero}>Find a home that suits your lifestyle</h1>
                                        <p className='title__section mt-[42px]'>SUPERIOR</p>
                                        <p className='number__item mt-[280px] pl-[240px] text-whiteText'>02</p>
                                    </div>
                                    <p className='font-medium w-[397px] ml-[83px] mt-[260px]'>Built on centuries of tradition and dedicated
                                        to innovating the luxury real estate industry, Masteri Centre Point offers transformative
                                        experiences through a global network of exceptional and outstanding agents.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='container'>
                        <Link href="#">Discover Design</Link>
                        <Pagination className='bottom-[5rem] text-center absolute w-full text-whiteText left-0' />
                    </div>
                </div>
            </section>
        </>

    )
}

export default Banner