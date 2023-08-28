export interface ProductProps {
    id: number;
    image: string;
    title: string;
    numberBedroom: number;
    numberBath: number;
    des?: string;
    custom?: string
}