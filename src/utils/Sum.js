import diff_days from "./DiffDays"
const sum = (date2, date1, bikes) => {
  let sum = 0
  bikes.forEach(item => {
    sum += item.price * (diff_days(date1, date2) || 0)
  })
  return sum
}
export default sum
