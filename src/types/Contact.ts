export type CONTACT_TYPE = {
    first_name: string
    last_name: string
    email: string
    gender: string
    phone: string
    note: string
    telegram: string
    avatar: string,
    company: string,
    address: string,
    createdAt: number,
    updatedAt: number,
    id: number
}

export type CONTACTS_REQ_TYPE = {
    meta: {
        skipped: number,
        limit: number,
        total: number,
        criteria: object
    },
    items: Array<CONTACT_TYPE>
}