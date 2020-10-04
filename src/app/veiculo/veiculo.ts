export class Veiculo {

  modelo: string;
  cor: string;
  anoFabricacao: number;
  placa: string;
  valor: number;

  static toStringValues(v: Veiculo): string {
    return (v.modelo + v.cor + v.anoFabricacao + v.placa + v.valor).toLowerCase();
  }
}
