// RegExp
const mailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// dates
const currentDate = new Date()
const currentYear = currentDate.getFullYear()

// data for <Select /> component
const selectOptions = ['From Google', 'From Facebook', 'From Alians :-)']


export { currentYear, mailRegExp, selectOptions }
