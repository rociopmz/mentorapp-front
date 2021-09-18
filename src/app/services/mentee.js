import { _api } from "./api";



export const findMentee = () => _api.get('/');

export const createMentee = (data) => _api.post('/create_mentee')

export const updateMentee = (data) => _api.patch('/update_mentee')


