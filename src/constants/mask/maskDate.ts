
const getMount = (index: number) => {
    const mounts = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    return mounts[index]
}
const getHour = (h: number, m: number, s: number) => {
    let hour = ""
    hour += h < 10 ? "0" + h : h
    hour += ":"
    hour += m < 10 ? "0" + m : m
    hour += ":"
    hour += s < 10 ? "0" + s : s
    return hour + " h:m:s"
}
export const date = (timestamp: number) => {
    const date = new Date(timestamp)

    let dateString = `${getHour(date.getHours(), date.getMinutes(), date.getSeconds())},
     ${date.getDate()} de
     ${getMount(date.getMonth())} de 
      ${date.getFullYear()}`
    return dateString

}

