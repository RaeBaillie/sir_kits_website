import './App.css';

const products = [
    {
        id: 0,
        name: 'Product1',
        image: '/blank.png',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat urna ex. Ut id ullamcorper orci. Suspendisse sollicitudin ultrices odio ac viverra. Mauris ut elit id sem euismod interdum. Aliquam fermentum justo in diam tempus varius. Quisque molestie mauris quis odio varius, sit amet rhoncus dui commodo. Pellentesque posuere turpis ut luctus ultricies."
    },
    {
        id: 1,
        name: 'Product2',
        image: '/blank.png',
        description: "Morbi felis felis, mollis sed ipsum eget, fringilla volutpat est. Phasellus congue ornare fringilla. Nunc non sagittis libero, non finibus dolor. Donec nec enim luctus, posuere arcu at, sollicitudin enim. Pellentesque ornare neque placerat leo gravida, quis aliquam lectus imperdiet. Curabitur vitae arcu sed tortor ultricies laoreet. Nullam egestas nibh ante, ac pulvinar lectus hendrerit nec."
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
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;