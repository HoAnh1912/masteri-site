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
                        <h1 className='mt-[74px] text-mainGrey text-[64px] font-medium leading-[72px] min-w-[574px]'>
                            Location
                        </h1>
                    </div>
                    <div className='pl-[66px] pr-[240px] pt-[74px] '>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.193827994674!2d106.7348756948111!3d10.803889046076943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752613fedc495b%3A0x1c0785bc13b115bb!2zTWFzdGVyaSBUaOG6o28gxJBp4buBbiAtIFQz!5e0!3m2!1svi!2s!4v1693231081808!5m2!1svi!2s" width="400" height="400" loading="lazy"></iframe>
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
                    <h1 className='text-mainGrey text-[64px] font-medium leading-[72px] w-full'>
                        Let’s get in touch
                    </h1>
                    <form className="pl-[180px]">
                        <input
                            className={styles.text__contact}
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder='Your name'
                        />
                        <input
                            className={styles.text__contact}
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder='Email address'
                        />
                        <input
                            className={styles.text__contact}
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder='Company you are working'
                        />
                        <input
                            className={styles.text__contact}
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder='Thing you want to tell us'
                        />
                    </form>
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