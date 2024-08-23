import axios from "axios"
import { usersType } from "../type/usersType"

class TodoService {
  private URL = 'https://contact-server-pd98.onrender.com/znakomstva'
  async getAll() {
    const {data} = await axios.get<usersType[]>(`${this.URL}`)
    return data
  }

  async getId(id: number) {
    const {data} = await axios.get(`${this.URL}/${id}`)
    return data
  }

  async patchId (item: usersType) {
    let id = item.id
    const {data} = await axios.patch(`${this.URL}/${id}`, 
      item
    );
    return data
  }

  async fetchCards(str:string) {
    if(str === "City") str = '/'
    else if(str ==='') str = ''
    else str = `?city=${str}`
    const {data} = await axios.get<usersType[]>(`${this.URL}/${str}`)
    return data
  }

}
export default new TodoService()

