import { AmzLogisticSite } from "../interfaces/amz-logistics-site";


export const amzLogisticSites: AmzLogisticSite[] = [

    {
        id: crypto.randomUUID(),
        name: 'Amazon DMT2',
        coords: {
            lat: 25.75608016178517,
            lng: -100.30941418275124
        },
        type: 'Delivery Station',
        imageUrl: '/assets/images/amz-sites/dmt2.webp',
        address: {
            municipality: 'San Nicolas de los Garza',
            state: 'Nuevo León',
            country: 'México'
        },
        googleMapsUrl: 'https://www.google.com/maps/place/Amazon+MX+DMT2/@25.7556791,-100.3097374,470m/data=!3m1!1e3!4m12!1m5!3m4!2zMjXCsDQ1JzIwLjciTiAxMDDCsDE4JzMyLjYiVw!8m2!3d25.755759!4d-100.3090515!3m5!1s0x866295dbcc8cbc47:0xaf2c2bd4a3dae93!8m2!3d25.7560348!4d-100.3094163!16s%2Fg%2F11n5910dgv?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: crypto.randomUUID(),
        name: 'Amazon DMT3',
        coords: {
            lat: 25.70912420170424,
            lng: -100.50966026203446
        },
        type: 'Delivery Station',
        imageUrl: '/assets/images/amz-sites/dmt3.webp',
        address: {
            municipality: 'Santa Catarina',
            state: 'Nuevo León',
            country: 'México'
        },
        googleMapsUrl: 'https://www.google.com/maps/place/Amazon+DMT3/@25.7093226,-100.5106615,580m/data=!3m1!1e3!4m12!1m5!3m4!2zMjXCsDQyJzMzLjUiTiAxMDDCsDMwJzM1LjMiVw!8m2!3d25.7093067!4d-100.509794!3m5!1s0x866299d7441582d5:0xeb33d0af23144ba2!8m2!3d25.7090372!4d-100.509665!16s%2Fg%2F11qnt2x4tt?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: crypto.randomUUID(),
        name: 'Amazon DMT4',
        coords: {
            lat: 25.670654990677033,
            lng: -100.2008409038916
        },
        type: 'Delivery Station',
        imageUrl: '/assets/images/amz-sites/dmt4.webp',
        address: {
            municipality: 'Guadalupe',
            state: 'Nuevo León',
            country: 'México'
        },
        googleMapsUrl: 'https://www.google.com/maps/place/Amazon+M%C3%A9xico+-+DMT4/@25.6704861,-100.2015661,18.82z/data=!4m6!3m5!1s0x8662c121ae886fa3:0x4e24a6a4ebd895da!8m2!3d25.6706112!4d-100.200859!16s%2Fg%2F11s510z72y?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: crypto.randomUUID(),
        name: 'Amazon MTY1',
        coords: {
            lat: 25.793056676497287,
            lng: -100.16037274472718
        },
        type: 'Sortation Center',
        imageUrl: '/assets/images/amz-sites/mty1.webp',
        address: {
            municipality: 'Apodaca',
            state: 'Nuevo León',
            country: 'México'
        },
        googleMapsUrl: 'https://www.google.com/maps/place/Amazon+MTY1/@25.7929166,-100.1629691,17z/data=!3m1!4b1!4m6!3m5!1s0x8662ef99433e071d:0xb16dabbb2ddbe57e!8m2!3d25.7929118!4d-100.1603942!16s%2Fg%2F11hj6r63q7?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: crypto.randomUUID(),
        name: 'Amazon MTY2',
        coords: {
            lat: 25.7776928216197,
            lng: -100.16570187937877
        },
        type: 'Sortation Center',
        imageUrl: '/assets/images/amz-sites/mty2.webp',
        address: {
            municipality: 'Apodaca',
            state: 'Nuevo León',
            country: 'México'
        },
        googleMapsUrl: 'https://www.google.com/maps/place/Amazon+MTY+2/@25.7774483,-100.1668937,17.61z/data=!4m6!3m5!1s0x8662e983f364a539:0x1e832b4db0a5c401!8m2!3d25.7775445!4d-100.1657784!16s%2Fg%2F11s_2qyhv0?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: crypto.randomUUID(),
        name: 'Amazon MTY3',
        coords: {
            lat: 25.87462630298482,
            lng: -100.23806258890781
        },
        type: 'Fulfillment Center',
        imageUrl: '/assets/images/amz-sites/mty3.webp',
        address: {
            municipality: 'Cienega de Flores',
            state: 'Nuevo León',
            country: 'México'
        },
        googleMapsUrl: 'https://www.google.com/maps/place/Amazon+MTY3/@25.8744091,-100.2406053,17z/data=!3m1!4b1!4m6!3m5!1s0x8662f3005b6d8219:0x4163df0c51042d30!8m2!3d25.8744043!4d-100.2380304!16s%2Fg%2F11ldw_31_0?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: crypto.randomUUID(),
        name: 'Amazon MTY9',
        coords: {
            lat: 25.839835647597834,
            lng: -100.32191276325864
        },
        type: 'Sortation Center',
        imageUrl: '/assets/images/amz-sites/mty9.webp',
        address: {
            municipality: 'Escobedo',
            state: 'Nuevo León',
            country: 'México'
        },
        googleMapsUrl: 'https://www.google.com/maps/place/Amazon+MX+MTY9/@25.8387235,-100.3484702,14.31z/data=!4m10!1m2!2m1!1sAmazon+MTY9!3m6!1s0x866293002d65542b:0x3fcb5d5562479fa!8m2!3d25.8377258!4d-100.3281207!15sCgtBbWF6b24gTVRZOSIDiAEBkgEJd2FyZWhvdXNl4AEA!16s%2Fg%2F11x0znzcg8?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D'
    }
]
