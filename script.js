function calcular() {
    // Obtendo os valores do formulário
    let largura = parseFloat(document.getElementById('largura').value);
    let avanco = parseFloat(document.getElementById('avanco').value);
    let espaco = parseFloat(document.getElementById('espaco').value);
    let conversao = document.getElementById('conversao').value;

    // Validação de campos
    if (isNaN(largura) || isNaN(avanco) || isNaN(espaco)) {
        alert("Por favor, insira valores válidos para as medidas.");
        return;
    }

    // Conversão de unidades (se necessário)
    let fatorConversao = (conversao === "centimetros") ? 100 : 1;
    largura *= fatorConversao;
    avanco *= fatorConversao;
    espaco *= fatorConversao;

    // Definição da área de uma placa (ajustando unidade)
    let areaPlaca = 12 * fatorConversao * fatorConversao; // 12 m² convertido

    // Cálculo da quantidade de barras e placas
    let barras = Math.ceil(largura / espaco);
    let placas = Math.ceil((largura * avanco) / areaPlaca);

    // Cálculo de quantidade de Trápezios com base no avanço
    let trapezio = Math.ceil(avanco / (0.60 * fatorConversao)); // Alteração feita aqui

    // Exibindo os resultados
    document.getElementById('resultado').innerText = `Você precisará de ${barras} barras de alumínio.`;
    document.getElementById('resultado2').innerText = `Você precisará de ${placas} placas de policarbonato de 6x2m.`;
    document.getElementById('resultado3').innerText = `Você precisará de ${trapezio} barras de trápezio (6 metros cada).`;
}

function limpar() {
    // Resetar os valores dos campos
    document.getElementById('largura').value = '';
    document.getElementById('avanco').value = '';
    document.getElementById('espaco').value = '0.60';
    document.getElementById('conversao').value = 'metros';

    // Limpar os resultados exibidos
    document.getElementById('resultado').innerText = '';
    document.getElementById('resultado2').innerText = '';
    document.getElementById('resultado3').innerText = '';
}
