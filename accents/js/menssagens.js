import { dados_das_mensagens } from "./bd.js";

let vetor_das_mensagens = [];
const container_das_mensagens = document.getElementById("mensagem");
const opcao_noticia = document.getElementById("opcao-noticia")

opcao_noticia.addEventListener("click", () => {
    alternarApresentacaoDasMensagens();
});

function alternarApresentacaoDasMensagens(){
    if(vetor_das_mensagens.length == 0) {
        carregarMensagens();
        apresentarMensagens();
    }else{
        container_das_mensagens.innerHTML = "";
        vetor_das_mensagens = [];
    }
}

const carregarMensagens = async () => {
    vetor_das_mensagens = dados_das_mensagens;
};

function apresentarMensagens() {
    vetor_das_mensagens.forEach(noticia => {
        const cartao = document.createElement("div");
        cartao.className = "cartao";

        cartao.innerHTML = `   
        <img src = "${noticia.imagem}" alt= "${noticia.titulo}" class = "imagem-do-cartao">
        <section class ="corpo-do-cartao">
          <h1 class="titulo-do-cartao">${noticia.titulo}</h1>
          <p class ="classificacao">
            <span class="categoria-da-noticia">${noticia.categoria}</span>
            <span class="data-da-noticia">${noticia.data}</span>
          </p>
          <p class="descricao-da-noticia">${noticia.descricao}</p>
          <p class="autor-da-noticia">${noticia.autor}</p>
          </section>
          <a class="botao-do-cartao" href="./detalhe.html?id=${noticia.id}">Leia mais</a>

        `;

          container_das_Mensagens.appendChild(cartao);
    });
}