const notifications = {
  login: {
    success: {
      title: "Вы вошли в свой аккаунт",
      message: "Вы вошли в свой аккаунт",
      type: "success",
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
    failed: {
      title: "Вы вошли в свой аккаунт",
      type: "danger",
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
  },
}
export default notifications
