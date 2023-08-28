import React from 'react'
import styles from './Location.module.scss';
import LocationItem from 'components/LocationItem/LocationItem';
import { listLocationItem } from 'constants/location-item';
import Image from 'next/image';
import imageLocation from '../../../../../public/images/location-item.jpg'
import ButtonCircle from 'elements/ButtonCircle';

const Location = () => {
    return (
        <section id={styles.location__section}>
            <div className="container">
                <div className='flex pt-[200px] pb-[158px]'>
                    <p className='title__section text-titleSection pt-[17px]'>location</p>
                    <h1 className={`${styles.title__location} pl-[160px] pr-[152px]`}>Positioned in the heart of District <br /> 2
                        to enjoy the <span> most relaxing <br /> views </span>
                        of Ho Chi Minh city
                    </h1>
                </div>
                <div className='flex justify-between pl-[240px]'>
                    <div className='flex-center'>
                        <div className='pr-[240px]'>
                            {listLocationItem?.map((item) => {
                                return (
                                    <LocationItem key={item.id} number={item.number} title={item.title} id={item.id} />
                                )
                            })}
                        </div>
                        <Image
                            src={imageLocation}
                            width={400}
                            height={730}
                            alt="image location"
                        />
                    </div>
                    <div className='w-[320px]'>
                        <h3 className='text-[32px] font-semibold text-mainGrey leading-[38px]'>The best District in the city</h3>
                        <p className='text-[18px] text-mainGrey font-medium pt-[59px] pb-[132px]'>The spectacular 15 into 13 room corner residence is perfectly positioned on Fifth Avenue to enjoy the absolutely dazzling views of Central Park</p>
                        <Image
                            src={imageLocation}
                            width={320}
                            height={367}
                            alt="image location"
                        />
                    </div>
                </div>
                <div className='mt-[160px] ml-[40%]'>
                    <ButtonCircle titleButton='Discover Location' custom={'bg-whiteText text-mainOrange'} />
                </div>
            </div>
        </section >
    )
}

export default Location