import {useState} from 'boilerplate/global-states'
import io from 'socket.io-client'


export const useSocket = (url) => {
    const [getSocket] = useState("__socket", url && io(url), true)
    const socket = getSocket()
    const emit = (a,b) => socket.emit(a,b)
    return {
        socket,
        emit
    }
}
