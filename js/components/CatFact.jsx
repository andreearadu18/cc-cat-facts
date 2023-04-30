import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CatFact = () => {
    const [fact, setFact] = useState('');

    useEffect(() => {
        const fetchFact = async () => {
            try {
                const { data } = await axios.get('https://catfact.ninja/fact');
                setFact(data.fact);
            } catch (error) {
                console.error(error);
            }
        };
        fetchFact();
    }, []);

    const CatFactContainer = styled.div`
    padding: 20px;
    background-color: ${props => (props.dark ? '#333' : '#f9f9f9')};
    color: ${props => (props.dark ? '#f9f9f9' : '#333')};
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  `;

    return (
        <CatFactContainer dark={fact.length % 2 === 0}>
            <h2>Random Facts:</h2>
            <p>{fact}</p>
        </CatFactContainer>
    );
};

export default CatFact;
