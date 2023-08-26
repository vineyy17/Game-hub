import useData from '../services/api-client'

interface Platform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () => useData<Platform>('platforms/lists/parents')

export default usePlatforms
