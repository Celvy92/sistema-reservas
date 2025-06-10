// Mesas disponibles en el restaurante
const mesasDisponibles = 5;

// Función para verificar la disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve("Mesas disponibles");
      } else {
        reject("No hay suficientes mesas disponibles");
      }
    }, 1000); // Simula retraso de consulta
  });
}

// Función para simular el envío de correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exitoEnvio = Math.random() > 0.3; // 70% de éxito
      if (exitoEnvio) {
        resolve(`Correo enviado a ${nombreCliente}`);
      } else {
        reject("Error al enviar correo");
      }
    }, 1000); // Simula tiempo de envío
  });
}

// Función principal usando async/await
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);

    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);

    console.log(`Reserva confirmada para ${nombreCliente} - ${mesasSolicitadas} mesas.`);
  } catch (error) {
    console.error("Error en la reserva:", error);
  }
}

// Pruebas
hacerReserva("Celeste", 3);  // Caso exitoso
hacerReserva("Juan", 7);     // Caso con error de disponibilidad
