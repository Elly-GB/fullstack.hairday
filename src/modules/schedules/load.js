import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "./show.js"
import { hoursLoad } from "../form/hours-load.js"

// ...const...
const selectedDate = document.getElementById("date") // -> input da data

export async function schedulesDay() {
  const date = selectedDate.value // Obtém a Data selecionada (input).

  const dailySchedules = await scheduleFetchByDay({ date }) // Busca na API os agendamentos
  schedulesShow({ dailySchedules }) // Exibe os agendamentos.

  hoursLoad({ date, dailySchedules }) // Renderiza as horas DISPONÍVEIS.
}
