import Swal from 'sweetalert2';
import {
  Confirm,
  Cancel,
  Acepted,
  Canceled,
} from './../../helpers/translations';
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
    confirmButtonText: Confirm,
    denyButtonText: Cancel,
    confirmButtonColor: colorAlert.success,
    cancelButtonColor: colorAlert.error,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: Acepted,
        icon: iconsAlert.success,
        showConfirmButton: false,
        timer: 1200,
      });
    } else {
      Swal.fire({
        title: Canceled,
        icon: iconsAlert.error,
        showConfirmButton: false,
        timer: 1200,
      });
    }
    return result;
  });
}
