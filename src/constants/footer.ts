import { FooterType } from "types/footer.interface";

export const footerItem: FooterType[] = [
    {
        id: 1,
        title: 'Quicklinks',
        category: [
            {
                ids: 1,
                text: 'Home'
            },
            {
                ids: 2,
                text: 'Contact Us'
            },
            {
                ids: 3,
                text: 'Our Residences'
            },
            {
                ids: 4,
                text: 'Discover Location'
            },
            {
                ids: 5,
                text: 'View Gallery'
            },
        ],
        text: 'Terms & Conditions',
    },
    {
        id: 2,
        title: 'Residences',
        category: [
            {
                ids: 1,
                text: 'Deluxe Apartment'
            },
            {
                ids: 2,
                text: 'Superior Apartment'
            },
            {
                ids: 3,
                text: 'Top Apartment'
            },
            {
                ids: 4,
                text: '2BR Apartment'
            },
            {
                ids: 5,
                text: 'Balcony Apartment'
            },
        ],
        text: 'Privacy Policy',
    },
    {
        id: 3,
        title: 'Social',
        category: [
            {
                ids: 1,
                text: 'FaceBook'
            },
            {
                ids: 2,
                text: 'Youtube'
            },
            {
                ids: 3,
                text: 'Email'
            },
            {
                ids: 4,
                text: 'Instagram'
            },
            {
                ids: 5,
                text: 'LinkedIn'
            },
        ],
        // text: '©2020'
    },

];