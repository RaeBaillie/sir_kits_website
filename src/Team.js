const team = [
    {
        id: 0,
        name: 'Rae Baillie',
        image: './blank.png',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat urna ex. Ut id ullamcorper orci. Suspendisse sollicitudin ultrices odio ac viverra. Mauris ut elit id sem euismod interdum. Aliquam fermentum justo in diam tempus varius. Quisque molestie mauris quis odio varius, sit amet rhoncus dui commodo. Pellentesque posuere turpis ut luctus ultricies.",
        link: "www.linkedin.com/in/rae-baillie-49b884334"
    },
    {
        id: 1,
        name: 'Lehan Jones',
        image: './blank.png',
        description: "Morbi felis felis, mollis sed ipsum eget, fringilla volutpat est. Phasellus congue ornare fringilla. Nunc non sagittis libero, non finibus dolor. Donec nec enim luctus, posuere arcu at, sollicitudin enim. Pellentesque ornare neque placerat leo gravida, quis aliquam lectus imperdiet. Curabitur vitae arcu sed tortor ultricies laoreet. Nullam egestas nibh ante, ac pulvinar lectus hendrerit nec.",
        link: null
    },
];

function Team() {
    return (
        <div className='Team'>
            {
                team.map((person) => (
                    <div className='Person' key={person.id}>
                        <img src={person.image} alt={person.name}></img>
                        <div className='Info'>
                            <h2>{person.name}</h2>
                            <p>{person.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Team