export interface FooterType {
    id: number
    title?: string
    category?: CategoryFooter[]
    text?: string
}

export interface CategoryFooter {
    ids: number
    text: string
}