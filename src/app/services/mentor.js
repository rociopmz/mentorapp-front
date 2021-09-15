import { _api } from "./api";



export const findMentor = () => _api.get('/');

export const createMentor = (data) => {
    _api.post('/create_mentee')
}

export const updateMentor = (data) => {
    _api.post('/update_mentee')
}
