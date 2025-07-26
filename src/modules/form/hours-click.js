export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available")

  hours.forEach(( available ) => {
    available.addEventListener("click", (selected) => {

      // Remove a Class dos não-selecionados...
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })
      // Adiciona a Class dos selecionados...
      selected.target.classList.add("hour-selected")
    })
  })
}

