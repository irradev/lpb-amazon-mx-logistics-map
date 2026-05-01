
export interface Coords {
    lat: number;
    lng: number;
}

export interface AmzLogisticSite {
    id: string;
    name: string;
    coords: Coords;
    imageUrl?: string;
    description?: string;
    type: AmzTypeSite;
    address: Address;
    googleMapsUrl: string;
}

export type AmzTypeSite = 'Delivery Station' | 'Fulfillment Center' | 'Sortation Center';

export interface Address {
    municipality: string;
    state: string;
    country: string;
}