// Definindo a classe SmartHouseLight
export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  // O construtor recebe o nome da luz como parâmetro
  constructor(public name: string) {}

  // Método para obter o status de energia da luz
  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  // Método para ligar a luz
  on(): boolean {
    if (this.isOn) {
      console.log(`${this.name} já está ${this.getPowerStatus()}`);
    } else {
      this.isOn = true;
      console.log(`${this.name} agora está ${this.getPowerStatus()}`);
    }
    return this.isOn;
  }

  // Método para desligar a luz
  off(): boolean {
    if (!this.isOn) {
      console.log(`${this.name} já está ${this.getPowerStatus()}`);
    } else {
      this.isOn = false;
      console.log(`${this.name} agora está ${this.getPowerStatus()}`);
    }
    return this.isOn;
  }

  // Método para aumentar a intensidade da luz
  increaseIntensity(): number {
    if (this.intensity >= 100) return this.intensity;

    this.intensity += 1;
    return this.intensity;
  }

  // Método para diminuir a intensidade da luz
  decreaseIntensity(): number {
    if (this.intensity <= 0) return this.intensity;

    this.intensity -= 1;
    return this.intensity;
  }
}

/*
Definimos a classe SmartHouseLight, que representa uma luz em uma casa inteligente.

O construtor da classe recebe o nome da luz como parâmetro.

A classe possui propriedades privadas isOn (indica se a luz está ligada) e intensity (indica a intensidade da luz).

O método getPowerStatus retorna o status de energia da luz, que pode ser 'ON' (ligada) ou 'OFF' (desligada).

Os métodos on e off permitem ligar e desligar a luz, respectivamente. Eles retornam um valor booleano indicando se a luz está ligada após a operação.

Os métodos increaseIntensity e decreaseIntensity permitem aumentar e diminuir a intensidade da luz, respectivamente. Eles retornam o novo valor de intensidade após a operação.

Essa classe modela o comportamento de uma luz em uma casa inteligente, incluindo a capacidade de ligar/desligar e ajustar a intensidade.
*/
