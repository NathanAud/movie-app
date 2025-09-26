import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router'

export const UserAvatar = () => {
  return (
    <Link to="#" className='w-10 h-10'>
        <UserCircleIcon className='size-10 h-full' />
    </Link>
  )
}
