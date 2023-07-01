let musicas = [
    {titulo: 'Memories', artista:'Conan gray', source: 'usicas/Áudio do WhatsApp de 2023-06-21 à(s) 16.53.46.mp3', img: 'imagens/01656072193.webp'},
        {titulo: 'trem das onze', artista:'Andorian Barbosa', source: 'musicasmateus/Adoniran Barbosa - Trem das Onze (Letra).mp3', img: 'imagens/01656072193.webp'},
    {titulo: 'Anunciação', artista: 'Bossa Nova Brasil', source: 'musicas/Áudio do WhatsApp de 2023-06-22 à(s) 10.38.16.mp3', img: 'imagens/Imagem do WhatsApp de 2023-06-22 à(s) 10.27.53.jpg'},
    {titulo: 'Preciso me encontrar', artista: 'Cartola', source: 'musicas/Áudio do WhatsApp de 2023-06-22 à(s) 10.30.05precisomeencontrar.mp3', img: 'imagensImagem do WhatsApp de 2023-06-22 à(s) 10.25.06cartola.jpg'},
    {titulo: 'Carolina', artista: 'Vinicius de moraes', source: 'muiscas/Áudio do WhatsApp de 2023-06-22 à(s) 10.38.13carolina.mp3', img: 'imagens/Imagem do WhatsApp de 2023-06-22 à(s) 10.24.36carlina.jpg'},
    {titulo: 'Pela luz dos olhos teus', artista: 'Toquinho', source: 'musicas/Áudio do WhatsApp de 2023-06-22 à(s) 10.21.09luz.mp3', img: 'imagens/Imagem do WhatsApp de 2023-06-22 à(s) 10.01.25toquinho.jpg'},
    {titulo: 'Você chegou', artista: 'filme rio', source: 'musicas/Áudio do WhatsApp de 2023-06-22 à(s) 10.22.19rio.mp3', img: 'imagens/Imagem do WhatsApp de 2023-06-22 à(s) 10.24.40rio.jpg'},
    {titulo: 'Coal drops', artista: 'David kushner', source: 'musicas/Áudio do WhatsApp de 2023-06-27 à(s) 10.43.50coaldrops.mp3', img: 'imagens/Imagem do WhatsApp de 2023-06-27 à(s) 10.43.55dayligth.jpg'},
    {titulo: 'Dayligth', artista: 'David kushner', source: 'musicas/Áudio do WhatsApp de 2023-06-27 à(s) 10.43.48.datdayligth.unknown', img: 'imagens/Imagem do WhatsApp de 2023-06-27 à(s) 10.43.55dayligth.jpg'},
    {titulo: 'mr.Forgerttable', artista: 'David Kushner', source: 'musicas/musicas/Áudio do WhatsApp de 2023-06-27 à(s) 10.43.51mr.forgerttable.mp3', img: 'imagens/imagens/Imagem do WhatsApp de 2023-06-27 à(s) 10.43.55dayligth.jpg'},
    {titulo: 'Miserable man', artista: 'David Kushner', source: 'musicas/Áudio do WhatsApp de 2023-06-27 à(s) 10.43.53miserableman.mp3', img: 'imagens/Imagem do WhatsApp de 2023-06-27 à(s) 10.43.55dayligth.jpg'},

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
        musicaIndex = 10;
    }
    renderizarMusica(musicaIndex);
});

document.querySelector('.proximo').addEventListener('click', () => {
    musicaIndex++;
    if (musicaIndex > 9){
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
