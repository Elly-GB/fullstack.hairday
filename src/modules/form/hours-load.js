import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"

// ...const...
const hours = document.getElementById("hours")

// ...hours...
export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente os horários...
    const [scheduleHour] = hour.split(":") // Faz o ":" se tornar um divisor (9:00 -> [9], [00])

    // Add 'hour' na 'date' e verifica se a data é depois da atual...
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    // Retorna o horário e sua disponibilidade...
    return {
      hour,
      available: isHourPast,
    }
  })

  // Renderizando o HTML dos horários...
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour
    hours.append(li)
  })

}
