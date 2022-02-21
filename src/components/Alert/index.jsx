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
