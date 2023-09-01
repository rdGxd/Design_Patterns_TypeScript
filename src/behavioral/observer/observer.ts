// Interface Observable que define métodos para gerenciar observadores
interface Observable {
  subscribe(...observers: Observer[]): void; // Inscreve observadores
  unsubscribe(observer: Observer): void; // Cancela inscrição de um observador
  notify(): void; // Notifica observadores sobre mudanças
}

// Interface Observer que define o método de atualização
interface Observer {
  update(...args: unknown[]): void; // Método chamado quando o estado muda
}

// Classe Concrete Observable
class InputObservable implements Observable {
  private observers: Observer[] = []; // Lista de observadores inscritos

  constructor(public element: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    // Inscreve novos observadores, evitando duplicatas
    observers.forEach((observer) => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }

  unsubscribe(observer: Observer): void {
    // Método para cancelar a inscrição de um observador específico
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    // Notifica todos os observadores registrados quando ocorrem mudanças
    this.observers.forEach((observer) => observer.update(this));
  }
}

// Classes Concrete Observer
class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Observable): void {
    // Atualiza o conteúdo do parágrafo com base nas mudanças no Observable
    if (observable instanceof InputObservable) {
      this.element.textContent = observable.element.value;
    }
  }
}

class DivObserver implements Observer {
  constructor(public element: HTMLDivElement) {}

  update(observable: Observable): void {
    // Atualiza o conteúdo da div com base nas mudanças no Observable
    if (observable instanceof InputObservable) {
      this.element.textContent = observable.element.value;
    }
  }
}

// Código do cliente

// Função para criar um novo elemento de input HTML
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}

// Função para criar um novo elemento de parágrafo HTML
function makeParagraph(): HTMLParagraphElement {
  const paragraph = document.createElement('p');
  document.body.appendChild(paragraph);
  paragraph.textContent = 'Texto inicial (Hardcoded)';
  return paragraph;
}

// Função para criar um novo elemento de div HTML
function makeDiv(): HTMLDivElement {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.textContent = 'Texto da DIV';
  return div;
}

const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());
const div1 = new DivObserver(makeDiv());

input.subscribe(p1, p2, div1); // Inscreve observadores no input

input.element.addEventListener('keyup', () => {
  input.notify(); // Notifica observadores quando uma tecla é pressionada
});

input.unsubscribe(p2); // Cancela a inscrição de um observador específico
