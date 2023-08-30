import React from 'react';

import s from './Box4.module.scss';

const Box4 = (styles) => {
  return (
    <div className={`${styles} ${s.container}`}>
      <b>
        Caja4:{' '}
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

export default Box4;
