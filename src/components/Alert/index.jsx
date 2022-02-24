import Swal from 'sweetalert2';

const errorIcon = 'error';
const infoIcon = 'info';
const successIcon = 'success';
const warningIcon = 'warning';

export function InfoAlert(title, message) {
  return Swal.fire(title, message, infoIcon);
}

export function ErrorAlert(title, message) {
  return Swal.fire(title, message, errorIcon);
}

export function SuccessAlert(title, message) {
  return Swal.fire(title, message, successIcon);
}

export function ConfirmAlert(title, message) {
  return Swal.fire({
    title: title,
    text: message,
    icon: warningIcon,
    showDenyButton: true,
    confirmButtonText: 'Confirmar',
    denyButtonText: 'Cancelar',
    confirmButtonColor: '#78D052',
    cancelButtonColor: '#d33',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Confirmado',
        text: '',
        icon: successIcon,
        confirmButtonColor: '#78D052',
      });
    } else {
      Swal.fire({
        title: 'Cancelado',
        text: '',
        icon: infoIcon,
        confirmButtonColor: '#78D052',
      });
    }
    return result;
  });
}
