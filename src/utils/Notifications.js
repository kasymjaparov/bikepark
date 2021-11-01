const notifications = {
  common: {
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
  registration: { message: "Перейдите на указанную вами почту" },
  verification: { message: "Вы верифицировали свой аккаунт" },
  order: { message: "Вы успешно отправили заявку" },
}
export default notifications
