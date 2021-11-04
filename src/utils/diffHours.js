const diff_hours = (dt2, dt1) => {
  const date2 = new Date(dt2)
  const date1 = new Date(dt1)
  var diff = (date2.getTime() - date1.getTime()) / 1000 || 0
  diff /= 60 * 60
  return Math.abs(Math.round(diff))
}
export default diff_hours
