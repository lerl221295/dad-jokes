import { QueryResult, useQuery } from 'react-query'
import api from 'api'

interface Joke {
  id: string
  joke: string
  status: number
}

const getRandomJoke = async (): Promise<Joke> => {
  try {
    const { data } = await api.get('/')
    return data
  } catch (e) {
    throw new Error(e.message)
  }
}

export default function useRandomJoke(): QueryResult<Joke> {
  return useQuery('randomJoke', getRandomJoke)
}
