function calcular() {
    // Obtendo os valores do formulário
    let largura = parseFloat(document.getElementById('largura').value);
    let comprimento = parseFloat(document.getElementById('comprimento').value);
    let espaco = parseFloat(document.getElementById('espaco').value);
    let conversao = document.getElementById('conversao').value;

    if (isNaN(largura) || isNaN(comprimento) || isNaN(espaco)) {
        alert("Por favor, insira valores válidos para as medidas.");
        return;
    }

    // Conversão de unidades
    if (conversao === "centimetros") {
        largura *= 100;
        comprimento *= 100;
        espaco *= 100;
    }

    // Cálculo da quantidade de barras e placas
    let barras = Math.ceil(largura / espaco);
    let placas = Math.ceil((largura * comprimento) / 12); // 12m² é a área de uma placa de 6x2

    // Cálculo de quantidade de Trápezios
    let trapezio = Math.ceil(largura / 0.60);

    // Exibindo os resultados
    document.getElementById('resultado').innerText = `Você precisará de ${barras} barras de alumínio.`;
    document.getElementById('resultado2').innerText = `Você precisará de ${placas} placas de policarbonato de 6x2m.`;
    document.getElementById('resultado3').innerText = `Você precisará de ${trapezio} barras de trápezio (6 metros cada).`;
}
