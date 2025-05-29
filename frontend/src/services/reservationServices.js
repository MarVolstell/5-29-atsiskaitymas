import fetchRequest from "../utilities/fetchRequest";

export const getReservations = async()=>{
    const res = await fetchRequest(`/reservation`, {method: 'GET'})
    return res.data.Reservations
}

export const getReservationById = async (id)=>{
    const res = await fetchRequest(`/reservation/${id}`, {method: 'GET'})
    return res.data.Reservations
}

export const createReservation = async (ReservationData) => {
    console.log(ReservationData)
    return fetchRequest('/reservation', { method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify(ReservationData) });
}
 
export const updateReservation = async (id, ReservationData) => {
    return fetchRequest(`/reservation/${id}`, { method: 'PATCH', body: JSON.stringify(ReservationData) });
}
 
export const deleteReservation = async (id) => {
    await fetchRequest(`/reservation/${id}`, { method: 'DELETE' });
    return null
}