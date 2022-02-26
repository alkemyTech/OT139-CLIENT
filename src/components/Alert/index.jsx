import Swal from 'sweetalert2';
import {
  confirmar,
  cancelar,
  aceptado,
  cancelado,
} from '../../enums/constantes';
import { iconsAlert } from './alertConfig';
import { colorAlert } from '../../helpers/colors';

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
    confirmButtonText: confirmar,
    denyButtonText: cancelar,
    confirmButtonColor: colorAlert.success,
    cancelButtonColor: colorAlert.error,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: aceptado,
        icon: iconsAlert.success,
        showConfirmButton: false,
        timer: 1200,
      });
    } else {
      Swal.fire({
        title: cancelado,
        icon: iconsAlert.error,
        showConfirmButton: false,
        timer: 1200,
      });
    }
    return result;
  });
}
