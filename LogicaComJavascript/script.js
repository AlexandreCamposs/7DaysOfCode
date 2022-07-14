// console.log( false == '0' );
// console.log( null == undefined );
// console.log( " \t\r\n" == 0 );
// console.log( ' ' == 0 );

//Desafio 1
// let numeroUm = 1
// console.log(typeof(numeroUm))
// let stringUm = '1'
// console.log(typeof(stringUm))
// let numeroTrinta = 30
// console.log(typeof(numeroTrinta))
// let stringTrinta = '30'
// console.log(typeof(stringTrinta))
// let numeroDez = 10
// console.log(typeof(numeroDez))
// let stringDez = '10'
// console.log(typeof(stringDez))
// if( numeroUm == stringUm) {
//     console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mais tipos diferentes')
// }else {
//     console.log('As variáveis numeroUm e stringUm não tem o mesmo valor.')
// }
//   if (numeroTrinta === stringTrinta) {
//     console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
//   } else {
//     console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
//   }

//   if (numeroDez == stringDez) {
//     console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
//   } else {
//     console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
//   }

//Desafio 2
// var nome = window.prompt("Digite seu nome.");
// var idade = window.prompt("Qual sua idade?");
// var ling = window.prompt("Qual línguagem de programação está aprendendo?");
// window.alert(
//   `Muito prazer ${nome}, você tem ${idade} anos e já está aprendendo ${ling}, parabéns.`
// );
// var pergunta = window.prompt('Você gosta de estudar "JAVA"? Digite 1 para sim e 2 para Não');
// if(pergunta == 1) {
//   alert("Show continue os estudando.")
// }else{
//   alert('Que pena.')
// }

//Desafio 3
// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

var area = window.prompt('Qual área gostaria de seguir? Digite 1 para Front-End e 2 para Back-End')

if (area == 1) {
 tecno = window.prompt('Gostaria de aprender React ou  Vue? Digite 1 para React e 2 para Vue. ')
}else {
  aprender = window.prompt('Gostaria de aprender C# ou  Java? Digite 1 para C# e 2 para Java. ')
}
escolha = window.prompt('Gostaria de seguir na área? ou seguir se desenvolvendo para se tornar Full stack? Digite 1 seguir na área e 2 para não. ')
if (escolha == 1) {
  alert('Ótima escolha continuando na área')
}else {
  alert('Muito bom, tem muitas outras técnologias a serem exploradas')
}

let tec = [];
let truOrFalse = true;

while (truOrFalse == true) {
  let dateArry = window.prompt("Quais técnologias gostaria de aprender?");
  if (dateArry == null || dateArry == "") {
    alert("Você já escolheu suas tecnologias");
    truOrFalse = false;
    alert(`Você escolheu as tecnologias: ${tec}`);
  } else {
    tec.push(dateArry);
    console.log(tec);
  }
}

