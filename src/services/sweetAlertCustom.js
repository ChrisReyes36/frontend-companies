import Swal from "sweetalert2";

export const customAlert = (title, text, icon) => {
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: `${icon}`,
    showConfirmButton: false,
    timer: 2000,
    allowOutsideClick: false,
    heightAuto: false,
  });
};
