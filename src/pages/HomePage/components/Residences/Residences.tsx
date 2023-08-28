import Pagination from 'components/Pagination/Pagination';
import Product from 'components/Product/Product';
import { productItem } from 'constants/product';
import ButtonCircle from 'elements/ButtonCircle';
import styles from './Residences.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import ImageCustom from 'elements/Image/ImageCustom';
import Image from 'next/image';
import IconBath from '../../../../assets/svg/ic-bath.svg';
import IconBedroom from '../../../../assets/svg/ic-bedroom.svg';
import IconArrow from '../../../../assets/svg/ic-arrow-right.svg';
import Link from 'next/link';

const Residences = () => {
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    })
    return (
        <section id={styles.residences__section}>
            <div className="container">
                <div className='flex'>
                    <p className='title__section text-titleSection pt-[13px]'>RESIDENCES</p>
                    <h1 className={`${styles.title__residences} pl-[143px] pr-[152px]`}>For those who seek an exceptional <br />
                        home and life, there is only
                        <br />
                        <span>
                            Masteri Centre Point
                        </span>
                    </h1>
                    <Pagination className='pt-[194px] text-[#363636]' />
                </div>
                <div className={`${styles.keen__slider} keen-slider`} ref={sliderRef}>
                    <div className={`${styles.product__block} flex pt-[180px] h-fit keen-slider__slide number-slide1`}>
                        <div className='min-w-[560px] h-[850px] relative mr-20 flex'>
                            <ImageCustom src='/images/item-first.jpg' alt="image-product" />
                            <p className={`${styles.button__drag} w-[120px] h-[120px] bg-mainOrange rounded-[100%] text-center py-12 text-whiteText font-bold tracking-[0.9px]`}>
                                DRAG
                            </p>
                        </div>
                        <div className='w-[50%]'>
                            <p className='number__item text-mainOrange'>1</p>
                            <h2 className='text-mainGrey text-[36px] font-semibold leading-[38px] pt-[61px] pb-10'>
                                Superior Apartment with City View & Balcony
                            </h2>
                            <div className='flex'>
                                <div className='flex-center mr-10'>
                                    <Image
                                        priority
                                        src={IconBedroom}
                                        alt="icon-bedroom"
                                    />
                                    <p className='ml-3 font-bold text-[#363636]'>3</p>
                                </div>
                                <div className='flex-center'>
                                    <Image
                                        priority
                                        src={IconBath}
                                        alt="icon-bath"
                                    />
                                    <p className='ml-3 font-bold text-[#363636]'>4</p>
                                </div>
                            </div>
                            <p className='pt-[285px] pb-20 font-medium text-mainGrey'>
                                The spectacular 15 into 13 room corner residence is perfectly positioned on Fifth Avenue to
                                enjoy the absolutely dazzling views of Central Park and the fabulous sun-lit Southern exposures grace
                                the apartment with amazing light throughout the day.
                            </p>
                            <Link href="#">
                                <a className={styles.button__explore}>
                                    Explore
                                    <Image
                                        priority
                                        src={IconArrow}
                                        alt="icon-arrow"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="bg-[#DCDCDC] w-[1px] mx-[80px]" />
                    </div>
                    {productItem?.map((item) => {
                        return (
                            <Product
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                numberBath={item.numberBath}
                                numberBedroom={item.numberBedroom}
                                custom={item.custom} />
                        )
                    })}
                </div>
                <div className='mt-[160px] ml-[50%]'>
                    <ButtonCircle custom={'bg-[#FFF7ED] text-mainOrange'} titleButton='View all Residences' />
                </div>
            </div>
        </section >
    )
}

export default Residences