function criptografar() {
    // Pega a mensagem digitada pelo usuário
    var mensagem = document.getElementById("mensagem").value;
    // Recupera o valor digitado pelo usuário no campo de entrada com o ID "mensagem" e armazena-o em uma variável chamada mensagem.
  
    // Desloca as letras 3 posições para a direita na tabela ASCII
    var mensagemDeslocada = "";
    for (var i = 0; i < mensagem.length; i++) {
      var codigoAscii = mensagem.charCodeAt(i);
      // Obtém o código ASCII do caractere atual na mensagem
      if (codigoAscii >= 65 && codigoAscii <= 90) { // Letra maiúscula
        mensagemDeslocada += String.fromCharCode((codigoAscii - 65 + 3) % 26 + 65);
        // Desloca a letra maiúscula 3 posições para a direita na tabela ASCII e adiciona à mensagemDeslocada
      } else if (codigoAscii >= 97 && codigoAscii <= 122) { // Letra minúscula
        mensagemDeslocada += String.fromCharCode((codigoAscii - 97 + 3) % 26 + 97);
        // Desloca a letra minúscula 3 posições para a direita na tabela ASCII e adiciona à mensagemDeslocada
      } else { // Outro caractere
        mensagemDeslocada += mensagem[i];
        // Adiciona o caractere atual à mensagemDeslocada sem alteração
      }
    }
  
    // Inverte a mensagem
    var mensagemInvertida = mensagemDeslocada.split("").reverse().join("");
    // Converte a mensagemDeslocada em uma matriz de caracteres, inverte a ordem dos caracteres e junta-os em uma string novamente, armazenando-a em mensagemInvertida
  
    // Desloca os caracteres da metade em diante uma posição para a esquerda na tabela ASCII
    var mensagemCriptografada = "";
    for (var i = 0; i < mensagemInvertida.length; i++) {
      var codigoAscii = mensagemInvertida.charCodeAt(i);
      // Obtém o código ASCII do caractere atual na mensagem invertida
      if (i < mensagemInvertida.length / 2) {
        mensagemCriptografada += mensagemInvertida[i];
        // Adiciona o caractere atual à mensagemCriptografada sem alteração se o índice for menor que a metade do comprimento da mensagem invertida
      } else if (codigoAscii >= 33 && codigoAscii <= 126) { // Caractere imprimível na tabela ASCII
        mensagemCriptografada += String.fromCharCode(codigoAscii - 1);
        // Desloca o caractere imprimível 1 posição para a esquerda na tabela ASCII e adiciona à mensagemCriptografada
      } else { // Outro caractere
        mensagemCriptografada += mensagemInvertida[i];
        // Adiciona o caractere atual à mensagemCriptografada sem alteração
      }
    }
  
    // Exibe a mensagem criptografada na página
    document.getElementById("resultado").innerHTML = "Mensagem criptografada: " + mensagemCriptografada;
  }
  