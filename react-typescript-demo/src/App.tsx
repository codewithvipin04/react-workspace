import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'

import './App.css'

function App() {
  const PersonName = {
    first: 'Vipin',
    last: 'Sikarwar'
  }
  const List = [
    {
      first: 'Vipin',
      last: 'Sikarwar'
    },
    {
      first: 'Vipin1',
      last: 'Sikarwar1'
    },
    {
      first: 'Vipin2',
      last: 'Sikarwar2'
    }
  ]

  return (
    <>
      <section id="center">
        {/* <Greet name={'Vipin'} messageCount={10} isLoggedIn={true}/>
        <Person name={PersonName}/>
        <PersonList list={List}/> */}
        {/* <Status status={'loading'}/>
        <Oscar><Heading>Oscar goes to corporate managers !!</Heading></Oscar> */}
        {/* <Button handleClick={(event, id) => console.warn('Botton Clicked!!', event, id)}/> */}
        {/* <Input value='' handleChange={(event) => console.log(event)}/> */}
        <Container styles={{border: '1px solid black', padding: '1px', backgroundColor: 'white'}}/>
      </section>
    </>
  )
}

export default App
