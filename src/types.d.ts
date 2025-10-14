namespace Shifts {
  interface Shift     {
    "id": string // "0c9482ef-16b1-498b-a099-c42d269f57e1",
    "logo": string //"https://hwfiles.storage.yandexcloud.net/media/2908834/conversions/elektro-logo-list.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=U_QPkwLIARFp404kniN5%2F20251013%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251013T023530Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86000&X-Amz-Signature=1de7d50f4ca7222912cb935af76bed21a38460b42359b1a5e78932f0fcb392a5",
    "coordinates": {
      "longitude": number // 38.94804,
      "latitude": number // 45.102502
    },
    "address": string // "Краснодар, улица Академика Фёдорова, 6",
    "companyName": string // "ООО «СтройСнабЭлектро»",
    "dateStartByCity": string // "14.10.2025",
    "timeStartByCity": string // "08:00",
    "timeEndByCity": string // "17:00",
    "currentWorkers": number // 5,
    "planWorkers": number // 5,
    "workTypes": {
      "id": number // 6,
      "name": string // "Подсобные работы",
      "nameGt5": string // "Подсобников",
      "nameLt5": string // "Подсобника",
      "nameOne": string // "Подсобник"
    }[],
    "priceWorker": number // 3448,
    "bonusPriceWorker": number // 0,
    "customerFeedbacksCount": string // "59 отзывов",
    "customerRating": number // 4.5,
    "isPromotionEnabled": boolean // false
  }

  interface Location {
    latitude: number
    longitude: number
  }
}
