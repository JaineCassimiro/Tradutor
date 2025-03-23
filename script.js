async function traduzirLiterariamente() {
  const texto = document.getElementById("inputText").value;
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "Traduzindo com alma...";

  const partes = dividirEmChunks(texto, 500);
  let traducaoFinal = "";

  for (const parte of partes) {
    const resposta = await fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(parte) + "&langpair=en|pt");
    const data = await resposta.json();
    traducaoFinal += data.responseData.translatedText + " ";
  }

  // Adiciona o estilo literário
  traducaoFinal = aplicarEstiloPoetico(traducaoFinal);

  resultado.innerText = traducaoFinal + "\n\n✨ Palavras foram adaptadas para soar com coerência e poesia.";
}

function dividirEmChunks(texto, limite) {
  const partes = [];
  for (let i = 0; i < texto.length; i += limite) {
    partes.push(texto.substring(i, i + limite));
  }
  return partes;
}

function aplicarEstiloPoetico(texto) {
  return texto
    .replace(/\b(Eu sou)\b/gi, "Sou aquele que")
    .replace(/\b(você)\b/gi, "tu")
    .replace(/\b(está)\b/gi, "encontra-te")
    .replace(/\b(agora)\b/gi, "neste instante")
    .replace(/\b(tristeza)\b/gi, "melancolia serena")
    .replace(/\b(silêncio)\b/gi, "sussurro da alma")
    .replace(/\b(mundo)\b/gi, "universo de possibilidades");
}