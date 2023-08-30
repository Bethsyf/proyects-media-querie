import React from 'react';
import Image from 'next/image';

import s from './Box4.module.scss';
import image from '../../public/image.png';

const Box4 = (styles) => {
  return (
    <div className={`${styles} ${s.container}`}>
      <p>Caja4:</p> <Image src={image} alt="image" width={150} height={150} />
    </div>
  );
};

export default Box4;
