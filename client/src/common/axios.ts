import axios from 'axios'

export type ResponseTuple<T> = [boolean, T | Error]

export async function get<T>(url: string): Promise<ResponseTuple<T>> {
  try {
    return [true, (await axios.get(url)).data]
  } catch (error) {
    return [false, error]
  }
}

export async function put<T>(url: string, data: T): Promise<ResponseTuple<T>> {
  try {
    return [true, (await axios.put(url, data)).data]
  } catch (error) {
    return [false, error]
  }
}

export async function post<T>(url: string, data: T): Promise<ResponseTuple<T>> {
  try {
    return [true, (await axios.post(url, data)).data]
  } catch (error) {
    return [false, error]
  }
}
