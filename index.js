// Write your solution in this file!
var customerName = 'bob'
function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase();
  }
function setBestCustomer(bestCustomer) {
     window.bestCustomer = 'not bob'
}
function overwriteBestCustomer(bestCustomer) {
    window.bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'bob'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Jerry'
}