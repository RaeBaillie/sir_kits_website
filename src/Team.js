const team = [
    {
        id: 0,
        name: 'Rae Baillie',
        image: './blank.png',
        description: "blah blah blah",
        link: "www.linkedin.com/in/rae-baillie-49b884334"
    },
    {
        id: 1,
        name: 'Lehan Jones',
        image: './blank.png',
        description: "very good product to buy",
        link: null
    },
];

function Team() {
    return (
        <div className='Team'>
            {
                team.map((person) => (
                    <div className='Person'>
                        <img src={person.image} alt={person.name}></img>
                        <div className='Info'>
                            <div className="desc">{person.name}</div>
                            <div className="name">{person.description}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Team