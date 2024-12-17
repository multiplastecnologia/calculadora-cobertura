function calcular() {
    // Obtém os valores inseridos pelo usuário
    let largura = parseFloat(document.getElementById("largura").value);
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let precoBarraAluminio = parseFloat(document.getElementById("precoBarraAluminio").value);
    let precoPlaca = parseFloat(document.getElementById("precoPlaca").value);
    let precoBarraTrapezio = parseFloat(document.getElementById("precoBarraTrapezio").value);

    // Verifica se os valores são válidos
    if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0 ||
        isNaN(precoBarraAluminio) || precoBarraAluminio <= 0 ||
        isNaN(precoPlaca) || precoPlaca <= 0 ||
        isNaN(precoBarraTrapezio) || precoBarraTrapezio <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Cálculo das barras de alumínio
    let distanciaEntreBarras = 0.60; // metros
    let numeroDeBarras = Math.ceil(comprimento / distanciaEntreBarras);

    // Cálculo das placas de policarbonato
    let areaCobertura = largura * comprimento;
    let areaPlaca = 6 * 2; // Cada placa tem 6x2 metros
    let numeroDePlacas = Math.ceil(areaCobertura / areaPlaca);

    // Cálculo das barras de trápezio
    let numeroDeBarrasTrapezio = Math.ceil(comprimento / distanciaEntreBarras);

    // Cálculo do custo total
    let custoBarrasAluminio = numeroDeBarras * precoBarraAluminio;
    let custoPlacas = numeroDePlacas * precoPlaca;
    let custoBarrasTrapezio = numeroDeBarrasTrapezio * precoBarraTrapezio;
    let custoTotal = custoBarrasAluminio + custoPlacas + custoBarrasTrapezio;

    // Exibe os resultados
    document.getElementById("barras").textContent = "Número de barras de alumínio: " + numeroDeBarras;
    document.getElementById("placas").textContent = "Número de placas de policarbonato: " + numeroDePlacas;
    document.getElementById("barrasTrapezio").textContent = "Número de barras de trápezio: " + numeroDeBarrasTrapezio;
    document.getElementById("custoTotal").textContent = "Custo total: R$ " + custoTotal.toFixed(2);
    
    // Exibe a seção de resultados
    document.getElementById("resultados").style.display = "block";
}

function resetar() {
    // Limpa os campos de entrada
    document.getElementById("largura").value = "";
    document.getElementById("comprimento").value = "";
    document.getElementById("precoBarraAluminio").value = "";
    document.getElementById("precoPlaca").value = "";
    document.getElementById("precoBarraTrapezio").value = "";

    // Limpa os resultados
    document.getElementById("resultados").style.display = "none";
}
