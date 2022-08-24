import { Actions } from './components/containers/Actions'
import { Countries } from './components/containers/Countries'

export const HomeView = () => {
  return (
    <main className="p-5">
      <Actions />
      <Countries />
    </main>
  )
}
