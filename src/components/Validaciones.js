
const validateEmail = (correo) => {
    const expresionRegular = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i;
    return expresionRegular.test(correo);
}

  

export {validateEmail};