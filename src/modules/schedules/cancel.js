const periods = document.querySelectorAll(".period")

// Click...
periods.forEach((period) => {
  period.addEventListener("click", (event) => {
    // Cancel Icon
    if(event.target.classList.contains("cancel-icon")) {

      const item = event.target.closest("li") // Elemento pai (closest)
      const { id } = item.dataset

      if(id) {
        const isConfirm = confirm ("Você tem certeza que deseja cancelar o seu agendamento?")

        if(isConfirm) {
          console.log ("Agendamento removido.")
        }
      }
    }
  })
})