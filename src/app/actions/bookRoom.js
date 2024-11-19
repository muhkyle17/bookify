'use server'

import { cookies } from 'next/headers'
import { Query } from 'node-appwrite'
import { redirect } from 'next/navigation'

import { createSessionClient } from '@/config/appwrite'

async function getMyRooms() {
  const sessionCookie = cookies().get('appwrite-session')
  if (!sessionCookie) {
    redirect('/login')
  }

  try {
    const { account, databases } = await createSessionClient(sessionCookie.value)

    // Get user's ID
    const user = await account.get()
    const userID = user.$id

    // Fetch user's rooms
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      [Query.equal('user_id', userID)]
    )

    return rooms
  } catch (error) {
    console.log("Failed to get user's rooms", error)
    redirect('/error')
  }
}

export default getMyRooms
