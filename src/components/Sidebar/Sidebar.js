const Sidebar = ({catalogs}) => {
  const brands = (catalogs) => {
    return [ ...new Set(catalogs.map(item =>item['brand-type'])) ];
  }

  const templatePrice = ['Up to %curr%25', '%curr%25 to %curr%50', '%curr%50 to %curr%200', '%curr%200 to %curr%1000'];
  const symbol = catalogs.length > 0 ? catalogs[0].currency.symbol : '£';
  const prices = templatePrice.map(price => price.replaceAll(/%curr%/gi, symbol))

  return (
    <div className="sidebar">
      <div className="row">
        <span className="title">Featured Brands</span>
        <div className="brands list">
          { 
            brands(catalogs).map((brand, index) => <span key={index}>
              <input type="checkbox"  /><span>{brand}</span>
            </span>
          )}
        </div>
      </div>
      <div className="row">
        <span className="title">Price</span>
        <div className="prices list">
          { prices.map((price, index) => <span key={index}>{price}</span> ) }
        </div>
      </div>
      
    </div>
  )
}
export default Sidebar;