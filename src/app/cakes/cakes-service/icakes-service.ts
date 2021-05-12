import { Cake } from "../cake";
import { ICake } from "../icake";

export interface ICakesService {

  enterCake(cake:Cake):Promise<string> ;

  getCakes():Promise<ICake[]> ;
}
