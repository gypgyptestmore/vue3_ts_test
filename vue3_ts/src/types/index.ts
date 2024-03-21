// 定义接口，限制perosn对象的具体属性
export interface GamesInter {
    id:number,
    name:string,
    bank:string
}
 export type Games = Array<GamesInter>;
//  export type Games = GamesInter[]

export interface PersonInter{
    id:number,
    name:string,
    age:number,
    x?:number
}

export type Persons = Array<PersonInter>;