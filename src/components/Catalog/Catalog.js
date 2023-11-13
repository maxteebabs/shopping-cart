import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import {BsInfoCircle} from 'react-icons/bs';

const Catalog = ({ catalog }) => {
  console.log('catalog', catalog)
  const getRatings = ({rating}) => {
    const maxFullStars = Math.trunc(rating);
    const frac = rating % 1;
    const stars = [];

    for(let i = 1; i<=5; i++) {
      if(i <= maxFullStars) {
        stars.push( <FaStar></FaStar>);
      }else if(frac > 0) {
        stars.push(<FaStarHalfAlt></FaStarHalfAlt>);
      }else{
        stars.push( <FaRegStar></FaRegStar>); 
      }
    }
    return stars;
  }
  return (
    <div className="catalog">
      <span className="img-wrapper"><img alt={catalog.title} src={catalog['image-url']} /></span>
      <span className='sponsored'>Sponsored <BsInfoCircle className='s-icon'></BsInfoCircle></span>
      <span className='title'>{catalog.title}</span>
      <div className='ratings'><span>{ getRatings(catalog.ratings) }</span> <span>{catalog.ratings.stars}</span></div>
      <span className='pricing'>
        <sup>{catalog.currency.symbol}</sup>
        <span>{(catalog.amount.toFixed(2))}</span>
      </span>
      <span className='store-info'>{catalog['store-info']}</span>
      <span className='customer-info'>{catalog['customer-info'] }</span>

    </div>
  )
};

export default Catalog;