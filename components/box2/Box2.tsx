import React from 'react';

import s from './Box2.module.scss';

const Box2 = (styles) => {
  return (
    <div className={`${styles} ${s.container}`}>
      <b>
        Caja2:{' '}
        <i>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          dignissimos itaque tempore quisquam molestiae eius provident a minima
          iste corporis est tempora commodi enim velit, sit unde harum facilis
          magni!
        </i>
      </b>
    </div>
  );
};

export default Box2;
