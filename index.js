// Função para mostrar o contador de tempo
function startTimer() {
    var startDate = new Date("2024-05-19T00:00:00"); // Data de início
    var currentDate = new Date();
    var timeDifference = currentDate - startDate;

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("contador").innerHTML = `Estamos juntos há ${days} dias, ${hours} horas e ${minutes} minutos.`;
}

// Atualizar o contador a cada minuto
setInterval(startTimer, 60000);
startTimer();
