
import { Button } from "./components/ui/button"
import { Progress } from "./components/ui/progress"
import Ex from './components/Ex'

const App = () => {
  return (
    <div className="p-5 space-y-2 bg-gray-100">
      <Button>Click me</Button>
      <Progress value={33} />
      <Ex/>
    </div>
  )
}

export default App