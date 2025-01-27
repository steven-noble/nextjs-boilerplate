import { useEffect } from 'react'

const useLeavePageAlert = (message:any) => {
    useEffect(() => {
        const handleBeforeUnload = (event:any) => {
            event.preventDefault()
            event.returnValue = message
            return message
        }

        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [message])
}

export default useLeavePageAlert
