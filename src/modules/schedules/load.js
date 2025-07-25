import { hoursLoad } from "../form/hours-load.js"

// ...const...
const selectedDate = document.getElementById("date") // -> input da data

export function schedulesDay() {
  const date = selectedDate.value // Obtém a Data selecionada (input).

  hoursLoad({ date }) // Renderiza as horas disponíveis.
}
