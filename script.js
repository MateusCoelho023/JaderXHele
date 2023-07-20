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
    {titulo: '3 Pulinhos', artista: 'Dilsinho', source: 'musicas/Dilsinho - 3 Pulinhos (DVD Open House Ao Vivo)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Aperta o pause', artista: 'Dilsinho', source: 'musicas/Dilsinho - Aperta o Pause (Garrafas e Bocas)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Astronauta', artista: 'Dilsinho', source: 'musicas/Dilsinho - Astronauta (DVD Open House Ao Vivo)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Beijo de garrafa', artista: 'Dilsinho', source: 'musicas/Dilsinho - Beijo de Garrafa (DVD Open House Ao Vivo)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Esquentadinha', artista: 'Dilsinho', source: 'musicas/Dilsinho - Esquentadinha (Garrafas e Bocas)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Falsidade', artista: 'Dilsinho', source: 'musicas/Dilsinho - Falsidade (Sony Music Live)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Garota de família', artista: 'Dilsinho', source: 'musicas/Dilsinho - Garota de Família (Áudio Oficial) ft. Turma do Pagode(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Hora de voltar', artista: 'Dilsinho', source: 'musicas/Dilsinho - Hora de Voltar (DVD Open House Ao Vivo)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Ja que você não me quer mais', artista: 'Dilsinho', source: 'musicas/Dilsinho - Já que Você Não Me Quer Mais _ A Vingança (DVD Terra do Nunca Ao Vivo)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Me Belisca', artista: 'Dilsinho', source: 'musicas/Dilsinho - Me Belisca _ Santo Forte (DVD Open House Ao Vivo)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Moletom', artista: 'Dilsinho', source: 'musicas/Dilsinho - Moletom (DVD Open House Ao Vivo)(MP3_160K) 1.mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Ninguém', artista: 'Dilsinho', source: 'musicas/Dilsinho - Ninguém (Garrafas e Bocas)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Nossa lua', artista: 'Dilsinho', source: 'musicas/Dilsinho - Nossa Lua (DVD Terra do Nunca Ao Vivo) ft. Leo Santana(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Quarto e sala', artista: 'Dilsinho', source: 'musicas/Dilsinho - Quarto e Sala (DVD Open House Ao Vivo)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Presente do destino', artista: 'Dilsinho', source: 'musicas/Dilsinho - Presente do Destino (Áudio Oficial)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Prisioneiro', artista: 'Dilsinho', source: 'musicas/Dilsinho - Prisioneiro (Garrafas e Bocas)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Reality show', artista: 'Dilsinho', source: 'musicas/Dilsinho - Reality Show (Garrafas e Bocas)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Restrito', artista: 'Dilsinho', source: 'musicas/Dilsinho - Restrito (DVD Open House Ao Vivo)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Rola um love', artista: 'Dilsinho', source: 'musicas/Dilsinho - Rola um Love (DVD Terra do Nunca Ao Vivo) ft. MC KEVINHO_ DENNIS(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Tamanho PPP', artista: 'Dilsinho', source: 'musicas/Dilsinho - Tamanho PPP (Áudio Oficial)(MP3_160K) 1.mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Tique nervoso', artista: 'Dilsinho', source: 'musicas/Dilsinho - Tique Nervoso (Áudio Oficial)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Toma vergonha', artista: 'Dilsinho', source: 'musicas/Dilsinho - Toma Vergonha (Áudio Oficial)(MP3_160K) 1.mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Última postagem', artista: 'Dilsinho', source: 'musicas/Dilsinho - Última Postagem (Garrafas e Bocas)(MP3_160K) 1.mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'BFF girls', artista: 'Dilsinho', source: 'musicas/BFF Girls_ Dilsinho - Saudade de Você (Ao Vivo)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Menos é mais', artista: 'Dilsinho', source: 'musicas/Churrasquinho Menos é Mais 2_ part. Dilsinho - Quando Você Me Beija _ Eternamente _ Depois da Briga(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Dúvida cruel', artista: 'Dilsinho', source: 'musicas/Dilsinho - _Dúvida Cruel_ Live Performance _ Vevo(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Não vai embora', artista: 'Dilsinho', source: 'musicas/Dilsinho _ Luísa Sonza - Não Vai Embora(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
    {titulo: 'Atitude 67', artista: 'Dilsinho', source: 'musicas/Dilsinho_ Atitude 67 - Me Deixa pra Lá (DVD Open House Ao Vivo)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
     {titulo: 'Libera ela', artista: 'Dilsinho', source: 'musicas/Maiara e Maraisa part. Dilsinho - Libera Ela - EP Aqui Em Casa(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
       {titulo: 'Onze e pouquinho', artista: 'Dilsinho', source: 'musicas/Dilsinho - Onze e Pouquinho (DVD Open House Ao Vivo)(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
        {titulo: 'Treat you better', artista: 'Shawn Mendes', source: 'musicas/Shawn Mendes - Treat You Better(MP3_160K).mp3', img: 'imagens/Screenshot_20230720-110011~2 1.png'},
          {titulo: 'Ioiô', artista: 'Dilsinho', source: 'musicas/Dilsinho - Ioiô (Ao Vivo) ft. Ivete Sangalo(MP3_160K).mp3', img: 'imagens/Imagem do WhatsApp de 2023-07-06 à(s) 20.29.05dilsinho.jpg'},
            {titulo: 'Mi medicina ', artista: 'CNCO', source: 'musicas/CNCO - Mi Medicina (Official Video)(MP3_160K).mp3', img: 'imagens/Screenshot_20230720-110011~2 1.png'},
              {titulo: 'Shawn Mendes', artista: 'Shawn Mendes', source: 'musicas/Shawn Mendes_ Tainy - Summer Of Love (Official Music Video)(M4A_128K).m4a', img: 'imagens/Scireenshot_20230720-110011~2 1.png'},
                {titulo: 'Te amo', artista: 'Calema', source: 'musicas/Calema - Te Amo(MP3_160K).mp3', img: 'imagens/images (2).jpeg'},
                  {titulo: 'Felices los 4', artista: 'Maluma', source: 'musicas/Maluma - Felices los 4 (Official Video)(MP3_160K).mp3', img: 'imagens/5cdd4e012f24c73194f6442db1ca532c.jpg'},
                    {titulo: 'Bailame', artista: 'nacho', source: 'musicas/Nacho - Bailame(MP3_160K).mp3', img: 'imagens/images (3).jpeg'},
                      {titulo: 'Se poreparó', artista: 'ozuna', source: 'musicas/Ozuna - Se Preparó (Video Oficial) _ Odisea(MP3_160K).mp3', img: 'imagens/Screenshot_20230720-110011~2 1.png'},
                        {titulo: 'COCCO LOCO', artista: 'Shawn Mendes', source: 'musicas/Maluma - COCO LOCO (Official Video)(MP3_160K).mp3', img: 'imagens/5cdd4e012f24c73194f6442db1ca532c.jpg'},
                            {titulo: 'Sobrio', artista: 'Maluma', source: 'musicas/Maluma - Sobrio (Official Video)(MP3_160K).mp3', img: 'imagens/5cdd4e012f24c73194f6442db1ca532c.jpg'},
                                {titulo: 'Hawái', artista: 'Maluma', source: 'musicas/Maluma - Hawái (Official Video)(MP3_160K).mp3', img: 'imagens/5cdd4e012f24c73194f6442db1ca532c.jpg'},

                  
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
