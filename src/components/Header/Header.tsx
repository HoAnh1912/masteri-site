import { menuHeader } from 'constants/menu-header';
import Link from 'next/link';
import styles from './Header.module.scss'


const Header = () => {
    return (
        <header className={`w-full absolute h-[80px] top-0 left-0 text-whiteText z-[1] ${styles.header_wrapper} `}>
            <div className='container h-full'>
                <div className='flex-row-center'>
                    <p className='flex-center font-black tracking-[1px] text-[20px]'>MASTERI</p>
                    <ul className='flex-row-center [&>*:not(:last-child)]:mr-[60px]'>
                        {menuHeader.map((item, _) => {
                            return (
                                <li key={item.id} className='h-full'>
                                    <Link href={item?.href}>{item.label}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <hr />
            </div>
        </header >
    )
}

export default Header