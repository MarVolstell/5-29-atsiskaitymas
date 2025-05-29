import { createContext, useContext } from "react";
import * as ReservationServices from "../services/reservationServices";

const ReservationContext = createContext()

export const ReservationProvider = ({children}) =>{

    const createReservation = async (ReservationData)=>{
        const response = await ReservationServices.createReservation(ReservationData)

        console.log(response)
    }


    return(
        <ReservationContext.Provider value={{
            createReservation
        }}>
            {children}
        </ReservationContext.Provider>
    )
}

export const useReservation = ()=>{
    const context = useContext(ReservationContext)

    if(!context) {
        throw new Error("use Reservation turi but naudiohamos su restaueant provider")
    }

    return context
}

//?