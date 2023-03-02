export function now() {
  return Date.now() * 1000
}

export function local_offset() {
  const date = new Date()
  return -1 * date.getTimezoneOffset()
}

export function monotonic_now() {
  return Math.floor(globalThis.performance.now() * 1000)
}

export function to_parts(timestamp) {
  const date = new Date(timestamp / 1000)
  return [
    [date.getFullYear(), date.getUTCMonth() + 1, date.getUTCDate()],
    [date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()],
  ]
}

export function from_parts(parts, offset) {
  const date = new Date()
  date.setUTCFullYear(parts[0][0])
  date.setUTCMonth(parts[0][1] - 1)
  date.setUTCDate(parts[0][2])
  date.setUTCHours(parts[1][0])
  date.setUTCMinutes(parts[1][1])
  date.setUTCSeconds(parts[1][2])
  return date.getTime() * 1000 - offset
}

export function weekday(timestamp, offset) {
  const date = new Date((timestamp - offset) / 1000)
  return date.getDay()
}

// export function to_iso(timestamp) {
//   const date = new Date(timestamp / 1000)
//   return date.toISOString()
// }

// export function from_iso(iso_date) {
//   const date = new Date(iso_date)
//   if (isNaN(date)) return new Error(Nil)
//   return date.getTime() * 1000
// }
