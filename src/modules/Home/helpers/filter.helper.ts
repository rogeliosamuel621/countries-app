import { TFilters } from '../interface/filter.interface'

export const getFilterText = (filter: TFilters) => {
  if (filter === 'region') return 'Filter by Region'
  if (filter === 'africa') return 'Africa'
  if (filter === 'americas') return 'America'
  if (filter === 'asia') return 'Asia'
  if (filter === 'europe') return 'Europe'
  if (filter === 'oceania') return 'Oceania'

  return ''
}
