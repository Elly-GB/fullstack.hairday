// ...import...
import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js" // TA AQUI
import { schedulesDay } from "../schedules/load.js"

// ...const...
const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD") // Easy Peasy Lemon Squeezy !

// ...date...
selectedDate.value = inputToday // Data atual no agendamento...
selectedDate.min = inputToday // -> Data atual = Mínima

// ...form...
form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    // ...client name...
    const name = clientName.value.trim()
    
    if(!name) {
      return alert ("Informe o nome do cliente.")
    }

    // ...hour selected...
    const hourSelected = document.querySelector(".hour-selected")

    if(!hourSelected) {
      return alert("Selecione o horário desejado.")
    }

    // ...hour...
    const [hour] = hourSelected.innerText.split(":")

    // hora -> data
    const when = dayjs(selectedDate.value).add(hour, "hour")
    
    // ...make ID...
    const id = new Date().getTime()

    await scheduleNew ({
      id,
      name,
      when,
    })

    await schedulesDay() // Faz-Tudo (Limpa, Lava e Recarrega)

  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}
