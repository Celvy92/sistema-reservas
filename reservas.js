let mesasDisponibles = 5;

function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    console.log("Verificando disponibilidad...");
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve("Mesas disponibles");
      } else {
        reject("No hay suficientes mesas disponibles");
      }
    }, 1000);
  });
}

function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    console.log("Enviando correo de confirmación...");
    setTimeout(() => {
      const exito = Math.random() > 0.2; // 80% probabilidad de éxito
      if (exito) {
        resolve(`Correo enviado a ${nombreCliente}`);
      } else {
        reject("Error al enviar el correo de confirmación");
      }
    }, 1000);
  });
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);

    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);

    console.log(`Reserva confirmada para ${nombreCliente} - ${mesasSolicitadas} mesas.`);
  } catch (error) {
    console.log("Error en la reserva:", error);
  }
}

// Llamadas de prueba ordenadas
async function main() {
  await hacerReserva("Celeste", 3); // éxito
  await hacerReserva("Juan", 7);    // error (no hay suficientes mesas)
}

main();
