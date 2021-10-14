const notifications = {
  common: {
    title: "DEFAULT",
    container: "top-right",
    insert: "top",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeout"],
    dismiss: {
      duration: 2000,
      showIcon: true,
    },
    width: 600,
  },
  success: {
    type: "success",
  },
  failed: {
    type: "danger",
  },
  login: { message: "Вы успешно вошли в свой аккаунт" },
  registration: { message: "Вы успешно зарегистрировались" },
  verification: { message: "Вы верифицировали свой аккаунт" },
}
export default notifications
