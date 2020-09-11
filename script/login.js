const validate = () => {
  const user = document.getElementById('username')
  const pass = document.getElementById('password')

  const userVal = user.value
  const passVal = pass.value

  if (userVal !== 'user') {
    alert('Invalid Username')
    return false
  }
  if (passVal !== 'pass') {
    alert('Invalid Password')
    return false
  }
  return true
}
