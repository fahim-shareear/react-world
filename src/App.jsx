import { Suspense } from 'react'
import './App.css'
import Countries from './Componants/Countries'


const countryPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())


function App() {

  return (
    <>
        <Suspense fallback={<p>Nadir On The Go Is Loading</p>}>
          <Countries countryPromise={countryPromise}></Countries>
        </Suspense>
    </>
  )
}

export default App
