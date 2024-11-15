'use server'

import { ID } from 'node-appwrite'
import { revalidatePath } from 'next/cache'

import checkAuth from './checkAuth'
import { createAdminClient } from '@/config/appwrite'

async function createRoom(previousState, formData) {
  // Get databases instance
  const { databases } = await createAdminClient()

  try {
    const { user } = await checkAuth()

    if (!user) {
      return {
        error: 'You must be logged in to create a room.',
      }
    }
  } catch (error) {}
}

export default createRoom
