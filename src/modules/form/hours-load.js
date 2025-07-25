import { openingHours } from "../../utils/opening-hours.js"

// ...hours...
export function hoursLoad() {
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":") // Faz o ":" se tornar um divisor (9:00 -> [9], [00])

    
    console.log(scheduleHour)
  })
}

// Recupera somente os horários.