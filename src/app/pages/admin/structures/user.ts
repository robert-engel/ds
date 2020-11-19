export interface User {
  id: number;
  uuid: string;
  name: string;
  validUntil: number;
  isValid: boolean;
  isTrial: boolean;
}
