
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Sitter {
    id: number;
    name: string;
    hourlyRate: number;
}

const DogSitters: React.FC = () => {
    const [sitters, setSitters] = useState<Sitter[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/DogSitters')
            .then(response => setSitters(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Dog Sitters</h1>
            <ul>
                {sitters.map(sitter => (
                    <li key={sitter.id}>{sitter.name} - ${sitter.hourlyRate}/hr</li>
                ))}
            </ul>
        </div>
    );
};

export default DogSitters;