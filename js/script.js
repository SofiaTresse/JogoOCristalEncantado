// Respostas corretas (baseado no índice correto de cada pergunta)
const respostasCorretas = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // Índices corretos das respostas para todas as perguntas

function verificarRespostas() {
    let acertos = 0;
    let erros = 0;

    // Array de perguntas
    const perguntas = [
        'pergunta1',
        'pergunta2',
        'pergunta3',
        'pergunta4',
        'pergunta5',
        'pergunta6',
        'pergunta7',
        'pergunta8',
        'pergunta9',
        'pergunta10'
    ];

    // Loop pelas perguntas
    perguntas.forEach((pergunta, index) => {
        const resposta = document.querySelector(`input[name="${pergunta}"]:checked`);
        if (resposta && parseInt(resposta.value) === respostasCorretas[index]) {
            acertos++;
        } else {
            erros++;
        }
    });

    // Armazena os resultados no localStorage
    localStorage.setItem("Acertos", acertos);
    localStorage.setItem("Erros", erros);

    // Redireciona para a página de resultados
    window.location.href = "resultado.html";
}
