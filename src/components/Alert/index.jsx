import Swal from 'sweetalert2';
import { textAlert, colorAlert, iconsAlert } from '../../enums/alerts';

export function InfoAlert(title, message) {
  return Swal.fire(title, message, iconsAlert.info);
}

export function ErrorAlert(title, message) {
  return Swal.fire(title, message, iconsAlert.error);
}

export function SuccessAlert(title, message) {
  return Swal.fire(title, message, iconsAlert.success);
}

export function ConfirmAlert(title, message) {
  return Swal.fire({
    title: title,
    text: message,
    icon: iconsAlert.warning,
    showDenyButton: true,
    confirmButtonText: textAlert.confirmar,
    denyButtonText: textAlert.cancelar,
    confirmButtonColor: colorAlert.success,
    cancelButtonColor: colorAlert.error,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: textAlert.aceptado,
        text: '',
        icon: iconsAlert.success,
        showConfirmButton: false,
        timer: 1200,
      });
    } else {
      Swal.fire({
        title: textAlert.cancelado,
        text: '',
        icon: iconsAlert.error,
        showConfirmButton: false,
        timer: 1200,
      });
    }
    return result;
  });
}
