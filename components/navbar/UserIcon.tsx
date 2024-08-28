import { FaUserCircle } from 'react-icons/fa'
import { currentUser } from '@clerk/nextjs/server'

async function UserIcon(){
  const user = await currentUser()
  const profileImage = user?.imageUrl
  if(profileImage){
    return <img src={profileImage} className='w-6 rounded-full object-cover' />
  }
  return <FaUserCircle className='w-6 h-6 rounded-full text-primary bg-primary-foreground' />
  }
  
  export default UserIcon