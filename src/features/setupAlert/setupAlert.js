import Swal from 'sweetalert2'

export default function setupAlert(type, title, message) {
    return Swal.fire(
        title,
        message,
        type
      )
}