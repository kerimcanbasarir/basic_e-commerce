import * as yup from "yup";

const validations = yup.object().shape({
    email: yup.string().email("Geçerli bir email girin").required("Zorunlu Alan."),
    password: yup.string().min(5, "parolanız en az 5 karakter olmalıdır.").required(),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], "Parolalar uyuşmuyor.")

})


export default validations;