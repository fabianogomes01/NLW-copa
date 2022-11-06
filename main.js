function creatGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li> 
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
      <ul>${games}</ul>
  </div>`
}

document.querySelector('#app').innerHTML=` 
<header>
  <img src="./assets/logo.svg" alt="Logo da NLW">
</header> 

  <main id="cards">
    ${createCard("24/1", "quinta", 
               creatGame('switzerland', '07:00', 'cameroon') + 
               creatGame('portugal', '13:00', 'ghana') +
               creatGame('brazil', '16:00', 'serbia')
               )} 
    ${createCard("28/11", "segunda", 
               creatGame('south korea', '10:00', 'cameroon') +
               creatGame('brazil', '13:00', 'switzerland') +
               creatGame('portugal', '13:00', 'uruguay')
               )} 
    ${createCard("02/12", "sexta", 
               creatGame('south korea', '12:00', 'portugal') +
               creatGame('ghana', '12:00', 'uruguay') +
               creatGame('brazil', '16:00', 'cameroon')              
               )} 
  </main>
`