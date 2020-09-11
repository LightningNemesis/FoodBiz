const validate = () => {
  const first = document.getElementById('firstName').value
  const last = document.getElementById('lastName').value
  const phone = document.getElementById('phNum').value
  const email = document.getElementById('emaiId').value
  const pass1 = document.getElementById('pass1').value
  const pass2 = document.getElementById('pass2').value

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  //   var passw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
  //   var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{6, 20}/
  var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

  // if (userVal !== 'user') {
  //   alert('Invalid Username')
  //   return false
  // }
  // if (passVal !== 'pass') {
  //   alert('Invalid Password')
  //   return false
  // }

  if (reg.test(email) === false) {
    alert('Invalid Email Address')
    return false
  }
  if (passw.test(pass1) === false) {
    alert(
      'Use atleast one numeric digit, one uppercase, one lowercase and one special character for password'
    )
    return false
  }
  if (pass1.localeCompare(pass2)!== 0) {
    alert('Passwords are not same')
    return false
  }
//   alert(pass1.localeCompare(pass2)!== 0)
  return true
}

function validateEmail(emailField) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

  if (reg.test(emailField.value) == false) {
    alert('Invalid Email Address')
    return false
  }

  return true
}
