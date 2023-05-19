import Swal from 'sweetalert2';

class ToastClass {

    constructor() {}

    openSuccess(title:string, icon:any = 'success', background:string = '#a5dc86') : void {
        Swal.fire({
            toast: true,
            title: title,
            icon: icon,
            position: 'top-right',
            iconColor: 'white',
            background: background,
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
        });
    }

    openError(title:string, icon:any = 'error', background:string = '#f27474') : void {
        Swal.fire({
            toast: true,
            title: title,
            icon: icon,
            position: 'top-right',
            iconColor: 'white',
            background: background,
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
        });
    }

    openErrorPersist(title:string, icon:any = 'error', background:string = '#f27474') : void {
        Swal.fire({
            toast: true,
            title: title,
            icon: icon,
            position: 'top-right',
            iconColor: 'white',
            background: background,
            showConfirmButton: false,
            showCloseButton: true,
        });
    }

    openWarning(title:string, icon:any = 'warning', background:string = '#f8bb86') : void {
        Swal.fire({
            toast: true,
            title: title,
            icon: icon,
            position: 'top-right',
            iconColor: 'white',
            background: background,
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
        });
    }

    openInfo(title:string, icon:any = 'info', background:string = '#3fc3ee') : void {
        Swal.fire({
            toast: true,
            title: title,
            icon: icon,
            position: 'top-right',
            iconColor: 'white',
            background: background,
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
        });
    }

    openQuestion(title:string, icon:any = 'question', background:string = '#87adbd') : void {
        Swal.fire({
            toast: true,
            title: title,
            color: 'white',
            icon: icon,
            position: 'top-right',
            iconColor: 'white',
            background: background,
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
        });
    }

    loanding(title:string) {
        Swal.fire({
            title: title,
            html: 'Por favor espere...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading()
            }
        });
        return Swal;
    }

    openDelete(title:string = 'Estas seguro de eliminar el registro?', item:number|string, onDelete: () => void) : void {
        Swal.fire({
            title: title,
            text: "Se eliminará el registro: " + item,
            icon: 'warning',
            customClass: {
              confirmButton: 'btn btn-danger mx-4',
              cancelButton: 'btn btn-secondary mx-4',
            },
            buttonsStyling: false,
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
                if (result.isConfirmed) {
                    onDelete();  
                }

          });
    }

    openOptions(title:string = 'Selecciona una acción:', item:number|string, onDetail: () => void, onUpdate: () => void) : void {
        Swal.fire({
            title: title,
            text: "Registro: " + item,
            icon: 'warning',
            customClass: {
              confirmButton: 'btn btn-danger mx-4',
              cancelButton: 'btn btn-info mx-4',
            },
            buttonsStyling: false,
            showCancelButton: true,
            confirmButtonText: 'Detalles',
            cancelButtonText: 'Actualizar'
          }).then((result) => {
                if (result.isConfirmed) {
                    onDetail();  
                } else if (String(result.dismiss) == 'cancel') {
                    onUpdate();
                }

          });
    }
    
}

const Toast = new ToastClass();

export { Toast }