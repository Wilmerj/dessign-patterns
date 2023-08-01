import React from 'react';
import { Listing } from './Listing';
import { withLoader } from '../withLoader';
import { ListingsGrid } from './ListingsGrid';

export function Listings(props) { // props sended from withLoader HoC
  if(props.data.listings.length === 0) return (<div>No listings found</div>)

  return (
    <ListingsGrid>
      {props.data.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}

export default withLoader(Listings , 'https://api.myjson.com/bins/1fva3m')