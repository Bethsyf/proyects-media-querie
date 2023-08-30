import s from '../styles/pages/index.module.scss';
import Box1 from '../components/box1/Box1';
import Box2 from '../components/box2/Box2';
import Box3 from '../components/box3/Box3';
import Box4 from '../components/box4/Box4';

const IndexPage = () => (
  <div className={s.container}>
    <div className={s.containerInner}>
      <p className={s.title}>Media Queries</p>
      <p className={s.mobile}>Movil-tablet</p>
      <p className={s.laptop}>Portatil</p>
      <p className={s.special}>Especial</p>
    </div>
    <div className={s.top}>
      <Box1 styles={s.box1} />
      <Box2 styles={s.box2} />
    </div>
    <div className={s.bottom}>
      <Box3 styles={s.box3} />
      <Box4 styles={s.box4} />
    </div>
  </div>
);

export default IndexPage;
