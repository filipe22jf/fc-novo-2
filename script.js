document.addEventListener('DOMContentLoaded', () => {
    // Navegação do Dashboard
    document.getElementById('btn-ver-clientes').addEventListener('click', () => {
        window.location.href = 'clientes.html';
    });

    document.getElementById('btn-criar-ficha').addEventListener('click', () => {
        window.location.href = 'criar_ficha.html';
    });

    document.getElementById('btn-gifs').addEventListener('click', () => {
        window.open('https://fitcraft-gifs-html.vercel.app/', '_blank');
    });
});




function carregarUltimaFicha() {
    const fichasSalvas = JSON.parse(localStorage.getItem("fichasDeTreino")) || [];
    const listaUltimosTreinos = document.getElementById("lista-ultimos-treinos");

    if (fichasSalvas.length > 0) {
        listaUltimosTreinos.innerHTML = ''; // Limpa o estado vazio
        const ultimaFicha = fichasSalvas[fichasSalvas.length - 1]; // Pega a última ficha

        const workoutItem = document.createElement('div');
        workoutItem.classList.add('workout-item');
        workoutItem.innerHTML = `
            <img src="https://via.placeholder.com/50" alt="Foto do Cliente" class="client-photo">
            <div class="workout-details">
                <span class="client-name">${ultimaFicha.aluno}</span>
                <span class="workout-type">Ficha de Treino</span>
            </div>
            <span class="workout-time">${ultimaFicha.data}</span>
        `;
        listaUltimosTreinos.appendChild(workoutItem);
    } else {
        listaUltimosTreinos.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🗂️</div>
                <div>Nenhuma ficha gerada ainda</div>
            </div>
        `;
    }
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', carregarUltimaFicha);


