export interface Rating {
    source?: string,
    value: number
}

export interface Book {
    name: string,
    author: string,
    category: string,
    ratings?: Rating[],
    publishYear: number
}