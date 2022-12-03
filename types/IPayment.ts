export interface IPaymentCards {
  cardsId: string;
  maskedPan: string;
  holderName: string;
  issuer: string;
  clientsid: number;
  state: string; //enum
  createTime: string;
  updateTime: string;
  confirmed: boolean;
}
