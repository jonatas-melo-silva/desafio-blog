import { Layouts } from './layouts'
import { Home } from './pages'

export function App() {
  return (
    <Layouts.Public>
      <Home />
    </Layouts.Public>
  )
}
