function calcular() {
    // Obtendo os valores do formulário
    let largura = parseFloat(document.getElementById('largura').value);
    let avanco = parseFloat(document.getElementById('avanco').value);
    let espaco = parseFloat(document.getElementById('espaco').value);
    let conversao = document.getElementById('conversao').value;
    
    // Obtendo os valores de preços
    let valorAluminio = parseFloat(document.getElementById('valorAluminio').value);
    let valorTrapezio = parseFloat(document.getElementById('valorTrapezio').value);
    let valorPolicarbonato = parseFloat(document.getElementById('valorPolicarbonato').value);

    // Validação de campos
    if (isNaN(largura) || isNaN(avanco) || isNaN(espaco) || isNaN(valorAluminio) || isNaN(valorTrapezio) || isNaN(valorPolicarbonato)) {
        alert("Por favor, insira valores válidos.");
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

    // Cálculo do valor total
    let valorTotalAluminio = barras * valorAluminio; // Multiplicar a quantidade de barras pelo valor unitário de cada barra
    let valorTotalTrapezio = trapezio * valorTrapezio; // Multiplicar a quantidade de barras de trapézio pelo valor unitário de cada barra
    let valorTotalPolicarbonato = placas * valorPolicarbonato; // Cálculo considerando a placa de 6x2m

    let valorTotalGasto = valorTotalAluminio + valorTotalTrapezio + valorTotalPolicarbonato;

    // Exibindo os resultados
    document.getElementById('resultado').innerText = `Você precisará de ${barras} barras de alumínio.`;
    document.getElementById('resultado2').innerText = `Você precisará de ${placas} placas de policarbonato de 6x2m.`;
    document.getElementById('resultado3').innerText = `Você precisará de ${trapezio} barras de trápezio (6 metros cada).`;

    // Exibindo valores totais
    document.getElementById('valorTotalAluminio').innerText = `Valor total de Alumínio (6m por barra): R$ ${valorTotalAluminio.toFixed(2)}`;
    document.getElementById('valorTotalTrapezio').innerText = `Valor total de Trapézio (6m por barra): R$ ${valorTotalTrapezio.toFixed(2)}`;
    document.getElementById('valorTotalPolicarbonato').innerText = `Valor total de Policarbonato (6x2m por placa): R$ ${valorTotalPolicarbonato.toFixed(2)}`;
    document.getElementById('valorTotalGasto').innerText = `Valor total gasto: R$ ${valorTotalGasto.toFixed(2)}`;
}

function limpar() {
    // Resetar os valores dos campos
    document.getElementById('largura').value = '';
    document.getElementById('avanco').value = '';
    document.getElementById('espaco').value = '0.60';
    document.getElementById('conversao').value = 'metros';
    document.getElementById('valorAluminio').value = '';
    document.getElementById('valorTrapezio').value = '';
    document.getElementById('valorPolicarbonato').value = '';

    // Limpar os resultados exibidos
    document.getElementById('resultado').innerText = '';
    document.getElementById('resultado2').innerText = '';
    document.getElementById('resultado3').innerText = '';
    document.getElementById('valorTotalAluminio').innerText = '';
    document.getElementById('valorTotalTrapezio').innerText = '';
    document.getElementById('valorTotalPolicarbonato').innerText = '';
    document.getElementById('valorTotalGasto').innerText = '';
}
