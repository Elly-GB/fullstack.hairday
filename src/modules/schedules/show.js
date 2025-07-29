import dayjs from "dayjs";

// Sessões: Manhã, Tarde & Noite...
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
  try {
    // ...Washing...
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    // to HTML...
    dailySchedules.forEach((schedule) => {
      // ITEM (li)
      const item = document.createElement("li")
      item.setAttribute("data-id", schedule.id) // ID do agendamento.
      // TIME (strong)
      const time = document.createElement("strong")
      time.textContent = dayjs(schedule.when).format("HH:mm")
      // NAME (span)
      const name = document.createElement("span")
      name.textContent = schedule.name
      // CANCEL ICON (img)
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon") // classe
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar Agendamento.")

      // APPENDS
      item.append(time, name, cancelIcon)

    });
    
  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}
