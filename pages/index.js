import CommentedImage from '../components/Commented Image'
import CornyQuestion from '../components/Corny Question'
import RandomButton from '../components/Random Button'

import { useRef, useState } from 'react'

import {
  Button,
  Code,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

export default function Home() 
{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const [confirmed, setConfirmation] = useState(false)

  return (
    <>
    
      <div className="flex flex-row justify-center items-center w-full h-full bg-pink-200 p-10 drop-shadow-xl">
        <div className="w-2/3 h-64 bg-gradient-to-r from-pink-300 to-pink-200 drop-shadow-xl rounded-full text-center transition-all duration-300">
          <h1 className="p-20 tracking-wide text-8xl font-bold text-white uppercase drop-shadow-lg">Hi Beautiful</h1>
        </div>
      </div>

      

      <CornyQuestion 
        question="Would you be the banana to my Minion?"
        nonactive="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a76b087-d923-4acf-85c5-118e6b81c7a0/d70lfsz-0a567aaf-a3ec-4cca-ac87-3820e4727e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhNzZiMDg3LWQ5MjMtNGFjZi04NWM1LTExOGU2YjgxYzdhMFwvZDcwbGZzei0wYTU2N2FhZi1hM2VjLTRjY2EtYWM4Ny0zODIwZTQ3MjdlOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PZQsxdrOyzYABwsLATW4K94fX8RQBzUIzLrR-l8BDPU"
        active="https://i.redd.it/v0ep5v1vbl331.png"
        secondary
        right
      />


      <div className="flex flex-row justify-around items-start text-center w-full h-36 bg-pink-50 pb-5">
        <RandomButton 
          text="No"
          minHeight={ 4600 }
          maxHeight={ 5000 }
        />

        <button 
          className="w-36 bg-pink-400 text-white text-2xl p-5 rounded-2xl"
          onClick={ onOpen }
        >
          YES
        </button>

        <AlertDialog
          isOpen={ isOpen }
          leastDestructiveRef={ cancelRef }
          onClose={ onClose } 
        >
          <AlertDialogOverlay>
            <AlertDialogContent>

              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                OMG.
              </AlertDialogHeader>

              <AlertDialogBody>
                NO WAY SHE JUST SAID YES?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button 
                  colorScheme='pink' 
                  ref={ cancelRef } 
                  onClick={
                    () => 
                    {
                      onClose();
                      setConfirmation(true);
                    }
                  }
                >
                  Confirm
                </Button>
              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>

      {
        confirmed ? 
        <div className="flex flex-col justify-around items-center text-center w-full h-[58em] bg-pink-200 p-5">
          <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>Prom Confirmation Ticket / Review</h1>
          <div className="flex flex-col items-center gap-5 text-center w-3/4 h-5/6 bg-white p-5 rounded-3xl shadow-xl">
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
            <h1 className='w-2/3 text-black font-bold text-4xl underline'>
              Thank You For Your Confirmation!
            </h1>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Name of Partner
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Mohhamad Lan
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Cheer up heh!
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              You look better when you energetic.
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Time
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Did i made ur mood better?
            </h3>
        </div>
        : 
        <></>
      }
    
    </>
  )
}
