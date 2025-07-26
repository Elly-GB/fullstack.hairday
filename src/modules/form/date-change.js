import { schedulesDay } from "../schedules/load.js";

//
const selectedDate = document.getElementById("date") // Seleciona o input de data
selectedDate.onchange = () => schedulesDay() // Recarrega os horários quando o input de data mudar