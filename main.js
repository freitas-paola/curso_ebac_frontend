function Imovel(tamanho, quartos, vagasGaragem, preço) {
  this.tamanho = tamanho;
  this.quartos = quartos;
  this.vagasGaragem = vagasGaragem;
  this.preço = preço;
  this.apresentarImovel = function () {
    console.log(
      `O imóvel tem ${tamanho}, com ${quartos} ${
        quartos > 1 ? "quartos" : "quarto"
      }, ${vagasGaragem > 0 ? vagasGaragem : "sem"} ${
        vagasGaragem === 1 ? "vaga" : "vagas"
      } na garagem e custa ${preço} reais.`
    );
  };
}

function Apartamento(
  tamanho,
  quartos,
  vagasGaragem,
  preço,
  andar,
  preçoCondominio
) {
  this.andar = andar;
  this.preçoCondominio = preçoCondominio;

  Imovel.call(this, tamanho, quartos, vagasGaragem, preço);
  this.apresentarImovel = function () {
    console.log(
      `O imóvel tem ${tamanho}, com ${quartos} ${
        quartos > 1 ? "quartos" : "quarto"
      }, ${vagasGaragem > 0 ? vagasGaragem : "sem"} ${
        vagasGaragem === 1 ? "vaga" : "vagas"
      } na garagem, fica no andar ${andar}, o aluguel é ${preço} e o condomínio é ${preçoCondominio}, totalizando ${
        preço + preçoCondominio
      } reais.`
    );
  };
}

function Casa(tamanho, quartos, vagasGaragem, preço, temPiscina) {
  if (typeof temPiscina === "boolean") {
    this.temPiscina = temPiscina;
  }

  Imovel.call(this, tamanho, quartos, vagasGaragem, preço);

  this.apresentarImovel = function () {
    console.log(
      `O imóvel tem ${tamanho}, com ${quartos} ${
        quartos > 1 ? "quartos" : "quarto"
      }, ${vagasGaragem > 0 ? vagasGaragem : "sem"} ${
        vagasGaragem === 1 ? "vaga" : "vagas"
      } na garagem, ${
        temPiscina === true ? `com piscina, ` : ""
      }e custa ${preço} reais.`
    );
  };
}

const imovel1 = new Imovel("94m²", 2, 1, 1200);
const imovel2 = new Apartamento("54m²", 1, 1, 1500, 5, 200);
const imovel3 = new Casa("102m²", 4, 2, 2000, true);

console.log(imovel1.apresentarImovel());
console.log(imovel2.apresentarImovel());
console.log(imovel3.apresentarImovel());
