import { ICake } from "./icake";

export class Cake implements ICake {
  id!: string;
  description!: string;
  name!: string;
  image!: string;
  rating!: number;
  entered!: boolean;
}
