import { getFilterText } from '@modules/Home/helpers/filter.helper'
import { TFilters } from '@modules/Home/interface/filter.interface'
import { useState } from 'react'

export const Filter = () => {
  const [filter, setFilter] = useState<TFilters>('region')
  const filterText = getFilterText(filter)

  return <button>{filterText}</button>
}
