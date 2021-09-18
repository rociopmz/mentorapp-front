import { _api } from "./api";



export const findMentor = () => _api.get('/');

export const createMentor = (data) => {
    _api.post('/create_mentor')
}

export const updateMentor = (data) => {
    _api.patch('/update_mentor')
}
