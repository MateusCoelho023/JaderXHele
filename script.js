let musicas = [
    {titulo:' Trem das Onze', artista:'Adoniran Barbosa', source:'Adoniran Barbosa - Trem das Onze (Letra).mp3', img:''},
    {titulo:'Anunciação', artista:'Alceu Valença', source:'Alceu Valença - Anunciação ( letra ).mp3', img:''},
    {titulo:'Garota De Ipanema', artista:'Tom Jobim', source:'Garota De Ipanema.mp3', img:''},
    {titulo:'Pela Luz dos Olhos teus', artista:'Tom Jobim e Miúcha', source:'Pela Luz dos Olhos teus - Tom Jobim e Miúcha _ _Letra.mp3', img:''},
    {titulo:'Cheia de Manias', artista:'Raça Negra', source:'AÇA NEGRA - CHEIA DE MANIAS (LETRA).mp3', img:''},
    {titulo:'Você Chegou', artista:'Rio 2', source:'Rio 2 - Você Chegou (Letra).mp3', img:''},
    {titulo:'Vou Deixar', artista:'Skank', source:'Skank - Vou Deixar (Letra_Lyrics).mp3', img:''},
    {titulo:'O Descobridor Dos Sete Mares', artista:'Tim Maia', source:'Tim Maia - O Descobridor Dos Sete Mares (letra).mp3', img:''},
    {titulo:'Carolina, Carol Bela', artista:'Toquinho', source:'Toquinho - Carolina, Carol Bela (lyrics).mp3', img:''},
    {titulo:'Preciso Me Encontrar', artista:'Cartola', source:'Preciso Me Encontrar Cartola Letras_Legendado.mp3', img:''},
];
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
        musicaIndex = 2;
    }
    renderizarMusica(musicaIndex);
});

document.querySelector('.proximo').addEventListener('click', () => {
    musicaIndex++;
    if (musicaIndex > 2){
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
    return `${campoMinutos}:${campoSegundos}`;
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%';
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}
