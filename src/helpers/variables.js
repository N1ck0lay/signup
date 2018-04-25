// RegExp
const mailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// dates
const currentDate = new Date()
const currentYear = currentDate.getFullYear()


export { currentYear, mailRegExp }
