import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

function CssParty() {
  const location = useLocation();
  const Item = React.lazy(
    () => import(`../cssItems${location.pathname}/index.tsx`)
  );
  return (
    <Suspense fallback={<Loading />}>
      <Item />
    </Suspense>
  );
}

function Loading(): JSX.Element {
  return <h1>Loading...</h1>;
}

export default CssParty;
