'use server'

async function createSession(previousState, formData) {
  console.log(formData, 'formData')

  const email = formData.get('email')
  const password = formData.get('password')

  if (!email || !password) {
    return {
      error: 'Please fill out all fields',
    }
  }

  console.log(email, password)
}

export default createSession
