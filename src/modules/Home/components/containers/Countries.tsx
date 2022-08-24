import { Country } from '../molecules/Country'

export const Countries = () => {
  return (
    <section className="flex flex-col gap-4">
      <Country
        image="https://flagcdn.com/cn.svg"
        name="China"
        population={1402112000}
        region="Asia"
        capital="Beijing"
      />
      <Country
        image="https://flagcdn.com/cn.svg"
        name="China"
        population={1402112000}
        region="Asia"
        capital="Beijing"
      />
      <Country
        image="https://flagcdn.com/cn.svg"
        name="China"
        population={1402112000}
        region="Asia"
        capital="Beijing"
      />
    </section>
  )
}
