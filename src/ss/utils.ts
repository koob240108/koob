import { useLocation } from 'wouter'

export
const useIs_page = ({ path }: { path: string}) => {
  const [location] = useLocation()
  return location == path
}
