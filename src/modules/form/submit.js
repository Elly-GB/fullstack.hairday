// ...import...
import dayjs from "dayjs"

// ...const...
const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD") // Easy Peasy Lemon Squeezy !

// ...date...
selectedDate.value = inputToday // Data atual no agendamento...
selectedDate.min = inputToday // -> Data atual = Mínima

// ...form...
form.onsubmit = (event) => {
  event.preventDefault()

  console.log("Formulário Enviado.")
}