import React, { Suspense } from 'react';
import Countries from './Componants/Countries';

const countryPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())


const App = () => {
  return (
    <>
      <Suspense fallback={<p>Nadir on the loading..........</p>}>
          <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  );
};

export default App;