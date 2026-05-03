
export const amzSiteTypes = {
    DeliveryStationV1: {
        description: 'Instalación de última milla donde se reciben paquetes ya preparados, se organizan por ruta y se asignan a conductores para su entrega final.\n\nSu operación es rápida y de alto volumen, enfocada en asegurar entregas eficientes al cliente.'
    },
    DeliveryStationV2: {
        description: 'Instalación dedicada a la fase final del proceso logístico. Aquí se reciben paquetes, se clasifican por rutas y se preparan para su entrega.\n\nNo almacena inventario; su función es optimizar la distribución.'
    },

    SortationCenterV1: {
        description: 'Instalación donde los paquetes son clasificados y organizados por destino después de salir de los centros de envío.\n\nPermite consolidar y dirigir los pedidos hacia estaciones de entrega de forma eficiente.'
    },
    SortationCenterV2: {
        description: 'Centro intermedio encargado de escanear, ordenar y agrupar paquetes por zona geográfica o ruta.\n\nSu función es optimizar el flujo logístico antes de la última milla.'
    },

    FulfillmentCenterV1: {
        description: 'Instalación principal donde se reciben, almacenan y procesan productos. Aquí se preparan los pedidos mediante selección, empaque y devoluciones antes de su envío.\n\nEs el núcleo operativo de la red logística.'
    },
    FulfillmentCenterV2: {
        description: 'Centro logístico enfocado en el almacenamiento y preparación de pedidos. Los productos se gestionan en inventario y se procesan para su distribución.\n\nDiseñado para manejar grandes volúmenes con eficiencia.'
    }
};