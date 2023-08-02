import Memory from "./components/Memory"
import "./App.scss"

const data = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]

const App = () => {
  return (
    <Memory data={data}/>
  )
}

export default App