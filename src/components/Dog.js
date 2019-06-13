import React from 'react';

const Dog = props => {
    const { doggo } = props; 
    return <img src={doggo} alt='' />;
}
 
export default Dog;
