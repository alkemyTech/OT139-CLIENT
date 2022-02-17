
import Swal from 'sweetalert2'


export function infoAlert(title, message) {
    let alerta = Swal.fire(
        title, message, "info"
    )
    return alerta
}


export function errorAlert(title, message) {
    let alerta = Swal.fire(
        title, message, "error"
    )
    return alerta
}


export function successAlert(title, message) {
    let alerta = Swal.fire(
        title, message, "success"
    )
    return alerta
}

