const diff_days = (dt2, dt1) => {
  const date2 = new Date(dt2)
  const date1 = new Date(dt1)
  const diffTime = Math.abs(date2 - date1) || 0
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}
export default diff_days
