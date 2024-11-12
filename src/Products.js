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

function Products() {
    return (
        <div className='Products'>
            {
                products.map((product) => (
                    <div>
                        <div className="desc">{product.name}</div>
                        <div className="name">{product.description}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;