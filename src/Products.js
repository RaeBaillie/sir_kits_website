import './App.css';

const products = [
    {
        id: 0,
        name: 'Product1',
        image: '/blank.png',
        description: "blah blah blah"
    },
    {
        id: 1,
        name: 'Product2',
        image: '/blank.png',
        description: "very good product to buy"
    },
];

function Products() {
    return (
        <div className='Products'>
            {
                products.map((product) => (
                    <div className='Product' key={product.id}>
                        <img src={product.image} alt={product.name}></img>
                        <div className='Info'>
                            <div className="name">{product.name}</div>
                            <div className="desc">{product.description}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;