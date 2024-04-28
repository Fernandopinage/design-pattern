export interface Alvo{
    request():string
}

export class Adaptada {
    specificRequest(value: string):string{
       return value
    }
}

export default class Adapter implements  Alvo{
    private adaptada: Adaptada;
    private msg: string
    constructor(adaptada: Adaptada, msg: string){
        this.adaptada = adaptada
        this.msg = msg
    }
    request(): string {
      return this.adaptada.specificRequest(this.msg);
    }

}