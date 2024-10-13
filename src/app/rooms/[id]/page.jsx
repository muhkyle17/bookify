import rooms from '@/data/rooms.json'
import Heading from '@/src/app/components/Heading'

const RoomPage = ({ params }) => {
  const { id } = params
  const room = rooms.find(room => room.$id === id)

  console.log(room, 'room')

  if (!room) {
    return <Heading title='Room Not Found' />
  }

  return (
    <>
      <Heading title={room.name} />
    </>
  )
}

export default RoomPage
