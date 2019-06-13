import React from "react";

import Dog from "./Dog";

const DogList = props => {
  const { doggos } = props;
  return (
    <div>
      {doggos.map(doggo => (
        <Dog doggo={doggo} />
      ))}
    </div>
  );
};

export default DogList;
