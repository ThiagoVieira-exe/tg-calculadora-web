function calcular() {
  const tipoTrabalho = document.getElementById('select-options').value;
  const custoFolha = Number(document.getElementById('custo-folha').value);
  const quantFolha = Number(document.getElementById('quant-folhas').value);
  const porcentagemShopee = 1.25;

  const vendaDireta = document.getElementById('venda-direta');
  const vendaShopee = document.getElementById('venda-shopee');

  let calculoDireta = 0;
  let calculoShopee = 0;

  function atribuirPrecos(extra) {
    let base = (custoFolha * quantFolha + extra) * 3 + 4;
    if (quantFolha >= 15 && tipoTrabalho !== 'folhetos') {
      base += quantFolha / 5;
    }
    calculoDireta = base;
    calculoShopee = base * porcentagemShopee;
  }

  function calcularPreco() {
    if (
      tipoTrabalho === 'etiquetas' ||
      tipoTrabalho === 'cartao-personalizado' ||
      tipoTrabalho === 'adesivos') {
      atribuirPrecos(custoFolha < 0.6 ? 3 : 4);
    } else if (tipoTrabalho === 'folhetos') {
      atribuirPrecos(1);
    } else if (tipoTrabalho === 'cartao-offset180g') {
      atribuirPrecos(custoFolha < 0.4 ? 2 : 3);
    }

    vendaDireta.innerHTML = Math.round(calculoDireta).toString() + ',00';
    vendaShopee.innerHTML = Math.round(calculoShopee).toString() + ',00';
  }

  calcularPreco();
}
