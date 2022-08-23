import { useThemeContext } from '@contexts/Theme.context'
import { Search } from 'react-feather'

export const Searcher = () => {
  const { color } = useThemeContext()

  return (
    <div className="flex bg-light-1 dark:bg-dark-1 p-3 gap-3 rounded shadow-lg w-full transition">
      <div>
        <Search size={20} color={color} strokeWidth={3.5} className="transition" />
      </div>
      <div className="w-full">
        <form action="">
          <input
            type="text"
            className="bg-light-1 dark:bg-dark-1 border-none font-semibold text-xs w-full outline-none text-black dark:text-white transition"
            placeholder="Search for a country..."
          />
        </form>
      </div>
    </div>
  )
}
