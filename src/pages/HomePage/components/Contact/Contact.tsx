import ContactBox from 'components/ContactBox/ContactBox'
import { contactItem } from 'constants/contact'
import ImageCustom from 'elements/Image/ImageCustom'
import styles from './Contact.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import IconArrow from '../../../../assets/svg/ic-arrow-right.svg';
import imageAddress from '../../../../../public/images/map.png'


const Contact = () => {
    return (
        <section id={styles.contact__section}>
            <div className='container'>
                <div className='flex'>
                    <div>
                        <p className='title__section text-titleSection'>contact</p>
                        <h1 className='mt-[74px] text-mainGrey text-[64px] font-medium leading-[72px] w-[574px]'>
                            Location
                        </h1>
                    </div>
                    <div className='pl-[66px] pr-[240px] pt-[74px] '>
                        <Image
                            src={imageAddress}
                            width={400}
                            height={400}
                            alt="image location"
                        />
                    </div>
                    <div className='[&>*:not(:last-child)]:mb-[60px] mt-[100px]'>
                        {contactItem?.map((item) => {
                            return (
                                <ContactBox title={item.title} detail={item.detail} key={item.id} id={0} />
                            )
                        })}
                    </div>
                </div>
                <div className='flex pt-[120px]'>
                    <h1 className='text-mainGrey text-[64px] font-medium leading-[72px] w-[574px]'>
                        Location
                    </h1>
                    <div className='pl-[66px]'>
                        <h3 className={styles.text__contact}>Your name</h3>
                        <h3 className={styles.text__contact}>Email address</h3>
                        <h3 className={styles.text__contact}>Company you are working</h3>
                        <h3 className={styles.text__contact}>Thing you want to tell us</h3>
                    </div>
                </div>
                <Link href="#">
                    <a className={styles.button__contact}>
                        Submit Form
                        <Image
                            priority
                            src={IconArrow}
                            alt="icon-arrow"
                        />
                    </a>
                </Link>
            </div>
        </section>
    )
}

export default Contact