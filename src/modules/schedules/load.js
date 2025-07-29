import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"

// ...const...
const selectedDate = document.getElementById("date") // -> input da data

export async function schedulesDay() {
  const date = selectedDate.value // Obtém a Data selecionada (input).

  const dailySchedules = await scheduleFetchByDay({ date }) // Busca na API os agendamentos
  console.log(dailySchedules)

  hoursLoad({ date }) // Renderiza as horas disponíveis.
}
