export interface Employees {
    id?: number;
    name: string;
    phone: string;
    address: Address
}
export interface Address {
    city: string;
    address_line1: string;
    address_line2: string;
    postal_code: string
}
