import { LookUpType } from '../enum/LookUpType.enum';

export interface LookUP {
  id: number;
  name: string;
  lookups: Map<LookUpType, LookUP>;

}
