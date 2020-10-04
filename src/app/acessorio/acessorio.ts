export class Acessorio {

  nome: string;
  valor: number;
  cor: string;
  detalhes: string;

  static toStringValues(a: Acessorio): string {
    return (a.nome + a.valor + a.cor + a.detalhes).toLowerCase();
  }
}
