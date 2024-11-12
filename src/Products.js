import './App.css';
import blank from './blank.png';

const products = [
    {
        id: 0,
        name: 'Product1',
        image: blank,
        description: "blah blah blah"
    },
    {
        id: 1,
        name: 'Product2',
        image: blank,
        description: "very good product to buy"
    },
];

function ProductDisplay(id, name, image, description) {
    return (
        <>
          <button>
            <img src={image} alt={name} />
            <div className="info">
              <div className="description">{description}</div>
              <div className="name">{name}</div>
            </div>
          </button>
        </>
      );
}

function Products() {
    return(
        <div classname = 'Product_List'>
            {
                products.map(({
                id, name, image, description,
                }) => (
                <ProductDisplay
                    id={id}
                    name={name}
                    desc={description}
                    image={image}
                />
                ))
            }
        </div>
    )
}

export default Products;