const Hello = (props) => (
  <div>
    <p>Hello {props.name} from Hello</p>
  </div>
)


const App = () => {
  console.log('Hello from component')
  const now = new Date()
  return(
  <div>
    <p>Hello world. The time is {now.toString()}</p>
    <Hello name="Atul" />
  </div>
)
}

export default App