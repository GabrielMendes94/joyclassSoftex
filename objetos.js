// Classe para objeto material: Carro
class Carro {

  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  
  acelerar() {
    console.log('Acelerando...');
  }
  
  frear() {
    console.log('Freando...');
  }
  
  buzinar() {
    console.log('Buzinando...');
  }

}
  
class Livro {
  constructor(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }
  
  abrir() {
    console.log('Abrindo o livro...');
  }
  
  fechar() {
    console.log('Fechando o livro...');
  }
  
  ler() {
    console.log('Lendo o livro...');
  }
}
  
class Paixao {
  constructor(intensidade, duracao, reciprocidade) {
    this.intensidade = intensidade;
    this.duracao = duracao;
    this.reciprocidade = reciprocidade;
  }
  
  crescer() {
    console.log('A paixão está crescendo...');
  }
  
  diminuir() {
    console.log('A paixão está diminuindo...');
  }
  
  terminar() {
    console.log('A paixão terminou...');
  }
}
  
class Musica {
  constructor(titulo, artista, duracao) {
      this.titulo = titulo;
      this.artista = artista;
      this.duracao = duracao;
      this.tocando = false;
  }

  tocar() {
    this.tocando = true;
    console.log(`Tocando: ${this.titulo} por ${this.artista}`);
  }

  pausar() {
    if (this.tocando) {
      this.tocando = false;
      console.log(`Música pausada: ${this.titulo}`);
    } else {
      console.log(`A música já está pausada.`);
    }
  }

  parar() {
    if (this.tocando) {
      this.tocando = false;
      console.log(`Música parada: ${this.titulo}`);
    } else {
      console.log(`A música já está parada.`);
    }
  }
}

let meuCarro = new Carro('Toyota', 'Corolla', 2020);
meuCarro.acelerar();
meuCarro.frear();    
meuCarro.buzinar();


let meuLivro = new Livro('O Alquimista', 'Paulo Coelho', 208);
meuLivro.abrir();
meuLivro.fechar();
meuLivro.ler();

let minhaPaixao = new Paixao('Alta', 'Longa duração', 'Recíproca');
minhaPaixao.crescer();
minhaPaixao.diminuir();
minhaPaixao.terminar();

let minhaMusica = new Musica('Bohemian Rhapsody', 'Queen', '5:55');
minhaMusica.tocar();
minhaMusica.pausar();
minhaMusica.parar();