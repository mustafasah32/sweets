import { ICake } from "../icake";

export interface ICakesService {

  getCakes():Promise<ICake[]> ;
}
