import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

type GetRoomsAPIResponse = Array<{
  id: string
  name: string
}>
export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:333/rooms')
      const result: GetRoomsAPIResponse = await response.json()

      return result
    },
  })

  return (
    <div className="flex flex-col gap-1">
      <h1>Create Room</h1>

      {isLoading && <p>Loading...</p>}

      {data?.map((room) => (
        <Link key={room.id} to={`/room/${room.id}`}>
          {room.name}
        </Link>
      ))}
    </div>
  )
}
