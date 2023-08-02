import React from 'react';

const useListing = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return {
    data,
  };
};

export default useListing;
