export interface ItemInterface {
    name: string,
    prices: number[],   
    preparation_time:number
}
export class Item implements ItemInterface{
    name: string;
    prices: number[];
    preparation_time: number;
    constructor(name:string,prices:number[],preparation_time:number){
        this.name=name;
        this.prices=prices;
        this.preparation_time=preparation_time;
    }
    
}