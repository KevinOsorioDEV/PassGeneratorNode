function chooseChar(long, array) {
  let chars = [];
  for (let index = 1; index <= long; index++) {
    chars.push(array[Math.floor(Math.random() * array.length)]);
  }
  return chars;
}

function FisherYaterMethod(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = array[i];
    array[i] = array[j];
    array[j] = k;
  }
  return array;
}

function Generator() {
  const consonants = "qwrtypñlkjhgfdszxcvbnm";
  const volwes = "aeiou";
  const numbers = "1234567890";
  const charsSpecial = "€/&%$!-.*¿?¡";

  let password = [
    chooseChar(5, consonants),
    chooseChar(3, volwes),
    chooseChar(3, numbers),
    chooseChar(2, charsSpecial),
  ];

  let fullPassord = password.flat();
  fullPassord = FisherYaterMethod(fullPassord);

  console.log("----Generador de contraseñas v1.0----");
  console.log(`Tu contraseña es: ${fullPassord.join("")}`);
}

Generator();
