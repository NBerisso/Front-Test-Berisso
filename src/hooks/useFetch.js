import { useQuery } from 'react-query'
import axios from 'axios';

function usefetch () {
    
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading } = useQuery(
    ['podcast authors'],
    () => axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
  )

  return {
    loading,
    data,
  }
}

export default usefetch;