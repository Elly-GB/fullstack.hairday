import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, name, when }) {
  try {
    // Requisição para enviar os dados do agendamento.
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    })

    // Mensagem de Realização.
    alert("Agendamento realizado.")
  } catch (error) {
    alert("Não foi possível agendar. Tente novamente mais tarde.")
    console.log(error)
  }
}
