import { Filter } from '../molecules/Filter'
import { Searcher } from '../molecules/Searcher'

export const Actions = () => {
  return (
    <section className="flex flex-col gap-2 md:flex md:flex-row md:gap-8">
      <Searcher />
      <Filter />
    </section>
  )
}
