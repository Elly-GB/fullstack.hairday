import dayjs from "dayjs";

// Sessões: Manhã, Tarde & Noite...
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
  try {
    // ...Cleaning...
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    // to HTML...
    dailySchedules.forEach((schedule) => {
      // -- CONTENTS --
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      item.setAttribute("data-id", schedule.id) // ITEM - ID do agendamento.
      time.textContent = dayjs(schedule.when).format("HH:mm") // TIME - Horário.
      name.textContent = schedule.name // NAME - Nome.

      // CANCEL ICON (img)
      const cancelIcon = document.createElement("img")

      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar Agendamento.")

      // APPENDS
      item.append(time, name, cancelIcon)

      // -- PERIODS --
      const hour = dayjs(schedule.when).hour() // Obtém o horário selecionado...

      if(hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18 ) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }

    });
    
  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}
