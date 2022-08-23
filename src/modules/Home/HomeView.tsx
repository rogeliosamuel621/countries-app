import { Header } from '@components/containers/Header'
import { Actions } from './components/containers/Actions'

export const HomeView = () => {
  return (
    <div className="bg-light-2 dark:bg-dark-2 transition">
      <Header />
      <main className="p-5">
        <Actions />
      </main>
    </div>
  )
}
