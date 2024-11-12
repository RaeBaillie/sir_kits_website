import blank from './blank.png';

const team = [
    {
        id: 0,
        name: 'Rae Baillie',
        image: blank,
        description: "blah blah blah",
        link: "www.linkedin.com/in/rae-baillie-49b884334"
    },
    {
        id: 1,
        name: 'Lehan Jones',
        image: blank,
        description: "very good product to buy",
        link: null
    },
];

function Team() {
    return (
        <div className='Team'>
            {
                team.map((person) => (
                    <div>
                        <div className="desc">{person.name}</div>
                        <div className="name">{person.description}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Team