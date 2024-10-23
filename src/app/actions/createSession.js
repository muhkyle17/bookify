'use server'

import { createAdminClient } from '@/config/appwrite'
import { cookies } from 'next/headers'

async function createSession(previousState, formData) {
  console.log(formData, 'formData')

  console.log(formData.name)

  const email = formData.get('email')
  const password = formData.get('password')

  if (!email || !password) {
    return {
      error: 'Please fill out all fields',
    }
  }

  // Get account instance
  const { account } = await createAdminClient()

  try {
    // Generate a session
    const session = await account.createEmailPasswordSession(email, password)

    // Create cookie
    cookies().set('appwrite-session', session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      expires: new Date(session.expire),
      path: '/',
    })
  } catch (error) {}

  return {
    success: true,
  }
}

export default createSession
