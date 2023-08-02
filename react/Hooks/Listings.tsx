import React from 'react';
import useListing from './hooks/useListings';
import { Listings } from '../presentational/Listings'; // Empty

export default function ListingsContainerComponent() {
  const { data } = useListing();
  if (!data) return null;

  return <Listings listings={data.listings} />;
}
