import Swal from 'sweetalert2';
import {
  CONFIRM,
  CANCEL,
  ACCEPTED,
  CANCELED,
} from './../../helpers/translations';
import { ICONS, COLORS } from './alertConfig';

export function InfoAlert(title, message) {
  return Swal.fire(title, message, ICONS.INFO);
}

export function ErrorAlert(title, message) {
  return Swal.fire(title, message, ICONS.ERROR);
}

export function SuccessAlert(title, message) {
  return Swal.fire(title, message, ICONS.SUCCESS);
}

export function ConfirmAlert(title, message) {
  return Swal.fire({
    title: title,
    text: message,
    icon: ICONS.WARNING,
    showDenyButton: true,
    confirmButtonText: CONFIRM,
    denyButtonText: CANCEL,
    confirmButtonColor: COLORS.CONFIRM,
    cancelButtonColor: COLORS.ERROR,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: ACCEPTED,
        icon: ICONS.SUCCESS,
        showConfirmButton: false,
        timer: 1200,
      });
    } else {
      Swal.fire({
        title: CANCELED,
        icon: ICONS.ERROR,
        showConfirmButton: false,
        timer: 1200,
      });
    }
    return result;
  });
}
