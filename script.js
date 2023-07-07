let musicas = [
    {titulo: 'Garota de Ipanema', artista: 'Tom Jobim', source: 'musicas/Áudio do WhatsApp de 2023-07-03 à(s) 20.52.39ipa.mp3', img: 'imagens/IMG-20230615-WA0010.jpg'},
    {titulo: 'Anunciação', artista: 'Bossa Nova Brasil', source: 'musicas/Áudio do WhatsApp de 2023-06-22 à(s) 10.38.16.mp3', img: 'imagens/Imagem do WhatsApp de 2023-06-22 à(s) 10.27.53.jpg'},
    {titulo: 'Preciso me encontrar', artista: 'Cartola', source: 'musicas/Áudio do WhatsApp de 2023-06-22 à(s) 10.30.05precisomeencontrar.mp3', img: 'imagens/Imagem do WhatsApp de 2023-06-22 à(s) 10.25.06cartola.jpg'},
    {titulo: 'Carolina', artista: 'Vinicius de moraes', source: 'musicas/Áudio do WhatsApp de 2023-06-22 à(s) 10.38.13carolina.mp3', img: 'imagens/Imagem do WhatsApp de 2023-06-22 à(s) 10.24.36carlina.jpg'},
    {titulo: 'Pela luz dos olhos teus', artista: 'Toquinho', source: 'musicas/Áudio do WhatsApp de 2023-06-22 à(s) 10.21.09luz.mp3', img: 'imagens/Imagem do WhatsApp de 2023-06-22 à(s) 10.01.25toquinho.jpg'},
    {titulo: 'Você chegou', artista: 'filme rio', source: 'musicas/Áudio do WhatsApp de 2023-06-22 à(s) 10.22.19rio.mp3', img: 'imagens/IMG-20230615-WA0011.jpg'},
    {titulo: 'Descobridor dos sete mares', artista: 'Tim maia', source: 'musicas/Áudio do WhatsApp de 2023-07-03 à(s) 20.52.39mar.mp3', img: 'imagens/IMG-20230615-WA0011.jpg'},
    {titulo: 'Trem das onze', artista: 'Andorian Barbosa', source: 'mmusicas/Áudio do WhatsApp de 2023-07-03 à(s) 20.52.39tremdasonze.mp3', img: 'imagens/IMG-20230615-WA0010.jpg'},
    {titulo: 'Cheia de manias', artista: 'Raça Negra', source: 'musicas/Áudio do WhatsApp de 2023-07-03 à(s) 20.52.40cheiademanias.mp3', img: 'imagens/IMG-20230615-WA0009.jpg'},
    {titulo: 'Vou Deixar', artista: 'Skank', source: 'musicas/Áudio do WhatsApp de 2023-07-03 à(s) 20.52.38voudeixar.mp3', img: 'imagens/IMG-20230615-WA0012.jpg'},
]
let musica = document.querySelector('audio');
let musicaIndex = 0;

let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
let imagem = document.querySelector('img');
let tempoDecorrido = document.querySelector('.tempo .inicio');
let duracaoMusica = document.querySelector('.tempo .fim');

nomeMusica.textContent = musicas[musicaIndex].titulo;
nomeArtista.textContent = musicas[musicaIndex].artista;
imagem.setAttribute('src', musicas[musicaIndex].img);
duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    musicaIndex--; 
    if (musicaIndex < 0){
        musicaIndex = 50;
    }
    renderizarMusica(musicaIndex);
});
let playlist = document.createElement('ul');
playlist.className = 'playlist';

musicas.forEach((musica) => {
  let musicaItem = document.createElement('li');
  musicaItem.textContent = `${musica.titulo} - ${musica.artista}`;
  playlist.appendChild(musicaItem);
});

document.body.appendChild(playlist);


document.querySelector('.proximo').addEventListener('click', () => {
    musicaIndex++;
    if (musicaIndex > 49){
        musicaIndex = 0;
    }
    renderizarMusica(musicaIndex);
});

function renderizarMusica(musicaIndex){
    musica.setAttribute('src', musicas[musicaIndex].source);

    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[musicaIndex].titulo;
        nomeArtista.textContent = musicas[musicaIndex].artista;
        imagem.src = musicas[musicaIndex].img;
    
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });

    document.body.append(musica);
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';
    document.querySelector('.botao-pause').style.display = 'block';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if (campoSegundos < 10){
        campoSegundos = '0'+ campoSegundos;
    }
    return `${campoMinutos}:${campoSegundos}`
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%';
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}
