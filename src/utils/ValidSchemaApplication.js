import * as yup from "yup"
const validationSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Обязательное поле")
    .matches(/^\+996(\d{9})$/, "Заполните по форме +996XXXXXXXXX "),
  name: yup
    .string()
    .required("Обязательное поле")
    .min(3, "Минимальное количество символов 3"),
  madeAt: yup.string().required("Обязательное поле"),
  expiresAt: yup.string().required("Обязательное поле"),
  addressOfClient: yup.string().required("Обязательное поле"),
  addressOfAdmin: yup.string().required("Обязательное поле"),
})
export default validationSchema
