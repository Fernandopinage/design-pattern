import Adapter, { Adaptada } from "./estruturais/adapter";

const adaptada = new Adaptada()
const adapter = new Adapter(adaptada, 'text adapatado');
console.log('>>>>', adapter)