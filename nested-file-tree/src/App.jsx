
import data from "./assets/files.json";
import Tree from './components/Tree';

function App() {
  return (
    <>
      <Tree data={data} adder={0}/>
    </>
  )
}

export default App
