// Função para verificar se uma string é um palíndromo
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Remover caracteres especiais e tornar minúsculas
    const len = str.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false; // Não é um palíndromo
      }
    }
    return true; // É um palíndromo
  }
  
  // Lê uma palavra via teclado
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite uma palavra: ', (word) => {
    if (isPalindrome(word)) {
      console.log(`A palavra "${word}" é um palíndromo.`);
    } else {
      console.log(`A palavra "${word}" não é um palíndromo.`);
    }
    rl.close();
  });
  