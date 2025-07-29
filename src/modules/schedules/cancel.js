import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Click...
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    // Cancel Icon
    if (event.target.classList.contains("cancel-icon")) {

      const item = event.target.closest("li") // Elemento pai (closest)
      const { id } = item.dataset // ID remove

      if(id) {
        // Secure
        const isConfirm = confirm (
          "Você tem certeza que deseja cancelar o seu agendamento?"
        )

        if (isConfirm) {
          // Cancel & Refresh
          await scheduleCancel({ id })
          schedulesDay()
        }
      }
    }
  })
})