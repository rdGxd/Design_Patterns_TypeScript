// Componente
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean; // Método abstrato para validar um valor
}

// Folha (Leaf)
export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false; // Se o valor não for uma string, a validação falha
    return /@/.test(value); // A validação passa se o valor contiver um '@'
  }
}

export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string'; // A validação passa se o valor for uma string
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false; // Se o valor não for uma string, a validação falha
    return /\d+/.test(value); // A validação passa se o valor contiver pelo menos um dígito
  }
}

// Composto (Composite)
export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = []; // Array para armazenar os componentes de validação

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value); // Executa a validação de cada componente
      if (!validation) return false; // Se alguma validação falhar, o processo para e retorna falso
    }

    return true; // Se todas as validações passarem, retorna verdadeiro
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation)); // Adiciona os componentes de validação ao array
  }
}

// Instâncias dos componentes de validação
const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();

// Instância do composto de validação
const validationComposite = new ValidationComposite();
validationComposite.add(validateEmail);
validationComposite.add(validateString);
validationComposite.add(validateNumber);

console.log(validationComposite.validate('1@1')); // Verifica se todas as validações passam para o valor '1@1'

/*
Esse código apresenta uma estrutura de classes para realizar validações em um valor desconhecido. A estrutura inclui componentes individuais de validação (como ValidateEmail, ValidateString e ValidateNumber) e um componente composto (ValidationComposite) que agrupa vários componentes individuais. O método validate percorre os componentes e verifica se o valor passado atende aos critérios de validação definidos.

No exemplo final, a instância de ValidationComposite é criada e configurada com os componentes de validação. O método validate é chamado com o valor '1@1' para verificar se ele passa em todas as validações definidas. O resultado da validação é impresso no console.
*/
