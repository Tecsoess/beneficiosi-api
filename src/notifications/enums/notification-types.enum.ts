export enum NotificationTypes {
  GENERIC = 'GENERIC',
  ORDER_STATUS_CHANGE = 'ORDER_STATUS_CHANGE',
  ORDER_CREATED = 'ORDER_CREATED',
  REGISTERED_CUSTOMER = 'REGISTERED_CUSTOMER',
  REGISTERED_STORE = 'REGISTERED_STORE',
  NEW_DISCOUNT = 'NEW_DISCOUNT',
}

export const NotificationTypesValues = Object.values(NotificationTypes);
