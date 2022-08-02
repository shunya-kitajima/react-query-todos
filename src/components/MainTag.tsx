import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

const MainTag: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <ChevronDoubleRightIcon
        onClick={() => navigate('/')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p>Task page</p>
    </>
  )
}

export default MainTag
