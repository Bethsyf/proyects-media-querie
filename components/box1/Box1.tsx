import React from 'react';

import s from './Box1.module.scss';

const Box1 = (styles) => {
  return (
    <div className={`${styles} ${s.container}`}>
      <b>
        Caja1:{' '}
        <i>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          quibusdam, est molestias magnam ipsa dolor, expedita mollitia in
          consequuntur perferendis, voluptas pariatur ipsam alias magni quod
          odio eligendi reiciendis facilis.
        </i>
      </b>
    </div>
  );
};

export default Box1;
