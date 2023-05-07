class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
}

const Pedro = new Aluno("Pedro", 10);
const Adam = new Aluno("Adam", 9);
const Tim = new Aluno("Tim", 2);
const Ellie = new Aluno("Ellie", 5);
const Emma = new Aluno("Emma", 6);

const alunos = [Pedro, Adam, Tim, Ellie, Emma];

function alunosAprovados() {
  const aprovados = alunos.filter((aluno) => aluno.nota >= 6);
  return aprovados;
}

alunosAprovados();
