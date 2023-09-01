// Classe Concrete Observable
var InputObservable = /** @class */ (function () {
    function InputObservable(element) {
        this.element = element;
        this.observers = []; // Lista de observadores inscritos
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        // Inscreve novos observadores, evitando duplicatas
        observers.forEach(function (observer) {
            if (!_this.observers.includes(observer)) {
                _this.observers.push(observer);
            }
        });
    };
    InputObservable.prototype.unsubscribe = function (observer) {
        // Método para cancelar a inscrição de um observador específico
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    };
    InputObservable.prototype.notify = function () {
        var _this = this;
        // Notifica todos os observadores registrados quando ocorrem mudanças
        this.observers.forEach(function (observer) { return observer.update(_this); });
    };
    return InputObservable;
}());
// Classes Concrete Observer
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        // Atualiza o conteúdo do parágrafo com base nas mudanças no Observable
        if (observable instanceof InputObservable) {
            this.element.textContent = observable.element.value;
        }
    };
    return ParagraphObserver;
}());
var DivObserver = /** @class */ (function () {
    function DivObserver(element) {
        this.element = element;
    }
    DivObserver.prototype.update = function (observable) {
        // Atualiza o conteúdo da div com base nas mudanças no Observable
        if (observable instanceof InputObservable) {
            this.element.textContent = observable.element.value;
        }
    };
    return DivObserver;
}());
// Código do cliente
// Função para criar um novo elemento de input HTML
function makeInput() {
    var input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}
// Função para criar um novo elemento de parágrafo HTML
function makeParagraph() {
    var paragraph = document.createElement('p');
    document.body.appendChild(paragraph);
    paragraph.textContent = 'Texto inicial (Hardcoded)';
    return paragraph;
}
// Função para criar um novo elemento de div HTML
function makeDiv() {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.textContent = 'Texto da DIV';
    return div;
}
var input = new InputObservable(makeInput());
var p1 = new ParagraphObserver(makeParagraph());
var p2 = new ParagraphObserver(makeParagraph());
var div1 = new DivObserver(makeDiv());
input.subscribe(p1, p2, div1); // Inscreve observadores no input
input.element.addEventListener('keyup', function () {
    input.notify(); // Notifica observadores quando uma tecla é pressionada
});
input.unsubscribe(p2); // Cancela a inscrição de um observador específico
