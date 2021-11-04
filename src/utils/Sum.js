import diff_hours from "./diffHours"
const sum = (date2, date1, bikes) => {
  let sum = 0
  bikes.forEach(item => {
    sum += item.price * (diff_hours(date1, date2) || 0)
  })
  return sum
}
export default sum
