import { useQuery } from '@tanstack/react-query'
import { getPortfolio } from '../api/getPortfolio'
import { calculatePortfolio } from '../utils/calculatePortfolio'

export function usePortfolio() {
  const query = useQuery({
    queryKey: ['portfolio'],
    queryFn: getPortfolio,
    staleTime: 60_000,
    retry: false,
    refetchOnWindowFocus: false,
  })

  const holdings = query.data?.holdings ?? []
  const history = query.data?.history ?? []

  const { totalValue, dayPL } = calculatePortfolio(holdings)

  return {
    holdings,
    history,
    totalValue,
    dayPL,
    isPending: query.isPending,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  }
}