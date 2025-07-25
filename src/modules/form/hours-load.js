import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"

// ...hours...
export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente as horas...
    const [scheduleHour] = hour.split(":") // Faz o ":" se tornar um divisor (9:00 -> [9], [00])

    // Add 'hour' na 'date' e verifica se a data é antes da atual...
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    console.log(isHourPast)
  })
}

// Recupera somente os horários.