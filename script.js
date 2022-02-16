let texto = '<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>'
let exercicio1 = document.getElementById('exercicio1')
let exercicio2 = document.getElementById('exercicio2')
let exercicio3 = document.getElementById('exercicio3')
let exercicio4 = document.getElementById('exercicio4')
let exercicio5 = document.getElementById('exercicio5')

let alerta = document.getElementById('alerta')

// console.log(texto);


// Extraindo CIDADES

// Extraindo via substring
let cidade1 = texto.substring(93, 102)
// Resultado São Paulo

// Extraindo via split
let cidade2 = texto.split('*')[3]
// Resultado Las Vegas

let cidade3 = texto.split('*')[5]
// Resultado Moscou


// Extraindo ROTEIROS

// SP

// Extraindo via split
let spRoteiroA = texto.split('#')[1]
let spRoteiroB = texto.split('#')[2]

// Extraindo via substring
let spIndexRoteiroC = texto.indexOf('Roteiro C')
let spRoteiroC = texto.substring(spIndexRoteiroC, spIndexRoteiroC + 103)

// // Console log com Roteiros de São Paulo
// console.log(`São Paulo | ${spRoteiroA}`)
// console.log(`São Paulo | ${spRoteiroB}`)
// console.log(`São Paulo | ${spRoteiroC}`)



// LV

// Extraindo via split
let lvRoteiroA = texto.split('#')[4]
let lvRoteiroB = texto.split('#')[5]

// Extraindo via substring
let lvRoteiroC = texto.substring(1150, 1257)

// Console log com Roteiros de Las Vegas
// console.log(`Las Vegas | ${lvRoteiroA}`)
// console.log(`Las Vegas | ${lvRoteiroB}`)
// console.log(`Las Vegas | ${lvRoteiroC}`)



// // MS

// // Extraindo via split
let msRoteiroA = texto.split('#')[7]
let msRoteiroB = texto.split('#')[8]

// Extraindo via substring
let msRoteiroC = texto.substring(1150, 1257)

// Console log com Roteiros de Moscou
// console.log(`Moscou | ${msRoteiroA}`)
// console.log(`Moscou | ${msRoteiroB}`)
// console.log(`Moscou | ${msRoteiroC}`)


let numeroDeLocaisSP = spRoteiroA.split(';').length
let numeroDeLocaisLV = lvRoteiroA.split(';').length
let numeroDeLocaisMS = msRoteiroA.split(';').length
let pontosCentro = texto.slice(465, 514)
let pontosDowntown = texto.slice(1078, 1149)

exercicio1.innerHTML = `<b>1. O nome das cidades avaliadas são:</b><br> ${cidade1}, ${cidade2}, ${cidade3}`
exercicio2.innerHTML = `<b>2. O conteúdo do roteiro A de cada cidade avaliada é:</b><br> São Paulo: ${spRoteiroA} Las Vegas ${lvRoteiroA} Moscou ${msRoteiroA}`
exercicio3.innerHTML = `<b>3. Quantos locais são citados no roteiro A de cada cidade:</b><br> São Paulo: ${numeroDeLocaisSP}<br> Las Vegas: ${numeroDeLocaisLV}<br> Moscou: ${numeroDeLocaisMS}`
exercicio4.innerHTML = `<b>4. O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo:</b><br> ${pontosCentro}`
exercicio5.innerHTML = `<b>5. O nome dos pontos turísticos localizados no bairro Downtown na cidade de Las Vegas: </b><br> ${pontosDowntown}`


// function alertar() {
// alert(cidade1)
// alert(cidade2)
// alert(cidade3)
// }

// alerta.addEventListener('click', alertar)

// // Colocar todas as palavras em array
// let array = texto.split(' ')
// console.table(array)


// let resultado = array. 
// console.log(resultado)