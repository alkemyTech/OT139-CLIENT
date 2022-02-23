import Swal from "sweetalert2";

export function InfoAlert(title, message) {
  return Swal.fire(title, message, "info");
}

export function ErrorAlert(title, message) {
  return Swal.fire(title, message, "error");
}

export function SuccessAlert(title, message) {
  return Swal.fire(title, message, "success");
}

export function ConfirmAlert(title, message) {
  return Swal.fire({
    title: title,
    text: message,
    icon: "warning",
    showDenyButton: true,
    confirmButtonText: "Confirmar",
    denyButtonText: `Cancelar`,
    confirmButtonColor: "#78D052",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Confirmado",
        text: "",
        icon: "success",
        confirmButtonColor: "#78D052",
      });
      return { confirmacion: true };
    } else if (result.isDenied) {
      Swal.fire({
        title: "Cancelado",
        text: "",
        icon: "info",
        confirmButtonColor: "#78D052",
      });
      return { confirmacion: false };
    }
  });
}
