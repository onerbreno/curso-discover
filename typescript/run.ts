// tipagem explícita
function showTicket(user: string, ticket: number) {
    console.log(`Olá ${user}. Seu número de bilhete é ${ticket}.`)
}
let user: String = "Breno"

showTicket('Rodrigo', 123)

// usando explicitamente o any
let info: any; // evitar seu uso

// inferência de tipos ou tipagem implícita
let teste = "Teste"
// teste = 10 // não me permite pois foi inferido que o tipo da variável é string

//  tipos
let loading: boolean;
loading = false;

let email: string;
email = "breno@mail.com"

let price: number;
price = 10.50;
price = 10;

let numbers: number[];
numbers = [1, 2, 3, 4]

let letras: Array<string>;
letras = ["a", "b", "c"]

// funções
function showMessages(message: string): string {
    return message;
}

console.log(showMessages("Oi, Breno"))


// operador de união, permite especificar vários tipos possíveis para uma variável
function printUserId(id: number | string) {
    console.log(`O ID do usuário é: ${id}`)
}

// generics permite um código genérico que se adapta a diferentes tipos e pode ser reutilizado
class Caixa<T> {
    private valor: T; // 
  
    constructor(valor: T) {
      this.valor = valor;
    }
  
    obterValor(): T {
      return this.valor;
    }
  }
  
  // Utilização da classe genérica
  const caixaDeTexto = new Caixa<string>("Olá, mundo!");
  const caixaDeNumero = new Caixa<number>(42);
  
  console.log(caixaDeTexto.obterValor());
  console.log(caixaDeNumero.obterValor());
  
