/* eslint-disable react/no-children-prop */
import { footerItem } from 'constants/footer'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer id={styles.section__footer}>
            <div className='container grid grid-cols-2'>
                <div>
                    <Image
                        src={logo}
                        width={128}
                        height={60}
                        alt="Logo"
                    />
                    <div className='mt-[54px]'>
                        <h4 className='text-whiteText text-[24px] font-medium'>Masteri Centre Point</h4>
                        <br />
                        <p className='text-[#FFFFFFB2] text-[18px] font-medium leading-[140%]'>179 Xa Lo Ha Noi, Ward Thao Dien, Dist. 2, Ho Chi Minh City
                            <br /> +84 934 88 6553
                            <br /> Sale@Masteri.com.vn
                        </p>
                    </div>
                    <p className='text__footer text-whiteText mt-[187px]'>Masteri Centre Point</p>
                </div>
                <div className='grid grid-cols-3 relative'>
                    {footerItem?.map((item) => {
                        return (
                            <div className='flex flex-col justify-end' key={item.id}>
                                <h4 className='text-whiteText text-[16px] font-bold tracking-[0.8px] uppercase mb-[60px]' >
                                    {item.title}
                                </h4>
                                {item?.category?.map((x) => {
                                    return (
                                        <div key={x.ids} className={styles.category__item}>
                                            <Link href="/">
                                                {x.text}
                                            </Link>
                                        </div>
                                    )
                                })}
                                <p className='text__footer mt-[115px] text-[#FFFFFFB2]'>{item.text}</p>
                            </div>
                        )
                    })}
                    <p className='text__footer absolute right-0 bottom-0 text-whiteText'>©2020</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer