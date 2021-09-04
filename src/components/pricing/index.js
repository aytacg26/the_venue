import PricingBox from './PricingBox';

const pricingState = [
  {
    price: 100,
    position: 'Balcony',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum libero, nesciunt repellendus maxime',
    link: 'http://sales-venue.com/balcony',
    delay: 500,
  },
  {
    price: 150,
    position: 'Medium',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum libero, nesciunt repellendus maxime',
    link: 'http://sales-venue.com/medium',
    delay: 0,
  },
  {
    price: 200,
    position: 'Star',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum libero, nesciunt repellendus maxime',
    link: 'http://sales-venue.com/star',
    delay: 500,
  },
];

const Pricing = () => {
  return (
    <div className='bck_black'>
      <div className='center_wrapper pricing_section'>
        <h2>Pricing</h2>
        <div className='pricing_wrapper'>
          {pricingState.map((pricing) => (
            <PricingBox {...pricing} key={pricing.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
