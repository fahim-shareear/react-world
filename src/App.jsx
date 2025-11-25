import React, { Suspense } from 'react';
import Countries from './Componants/Countries';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

const App = () => {
  return (
    <>
      <Suspense fallback={<p>Nadir on the go is loading.......</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
};

export default App;