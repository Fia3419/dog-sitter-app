import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dogs = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/Dogs')
            .then(response => setDogs(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Dogs</h1>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.id}>
                        {dog.name} ({dog.breed}, {dog.size})
                        - Owner: {dog.dogOwner?.name || 'Unknown'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dogs;
