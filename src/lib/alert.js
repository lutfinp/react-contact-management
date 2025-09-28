import Swal from "sweetalert2";

export const alertSucces = async (message) => {
    return Swal.fire({
        icon: "success",
        title: "Succes",
        text: message,
    });
};

export const alertError = async (message) => {
    return Swal.fire({
        icon: "error",
        title: "Ups",
        text: message,
    });
};
