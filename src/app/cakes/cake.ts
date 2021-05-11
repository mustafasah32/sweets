import { ICake } from "./icake";

export class Cake implements ICake {
  id!: string;
  comment!: string;
  name!: string;
  imageUrl!: string;
  yumFactor!: number;
  entered!: boolean;
}
