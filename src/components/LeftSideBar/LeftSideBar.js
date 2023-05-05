import arrow_down from '../../images/Arrow-down.svg'
import { MAX_PAGE_NUMBER } from '../../utils/constants';

export default function LeftSideBar({ counter, clickHandle, name }) {
  const padd = counter * 42;

  return (
    <div className="leftSideBar">
      <p className='leftSideBar__name'>{name}</p>
      <div className='leftSideBar__slider-container'>
        <p className='leftSideBar__page'>0{counter + 1}</p>
        <div className='leftSideBar__slider-back'>
          <div className='leftSideBar__slider-back leftSideBar__slider-runner' style={{ marginTop: padd }} />
        </div>
        <p className='leftSideBar__page leftSideBar__page_last'>0{MAX_PAGE_NUMBER}</p>
      </div>
      <button className='leftSideBar__button' onClick={clickHandle}><img src={arrow_down} alt=''/></button>
    </div>
  );
}
