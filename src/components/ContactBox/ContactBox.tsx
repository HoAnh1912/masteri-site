import React from 'react'
import { ContactProps } from 'types/contact.interface'

const ContactBox = ({ title, detail }: ContactProps) => {
    return (
        <div>
            <h1 className='text-mainOrange text-[32px] font-medium pb-5'>{title}</h1>
            <p className='text-mainGrey text-[18px] font-medium w-[320px]'>{detail}</p>
        </div>
    )
}

export default ContactBox