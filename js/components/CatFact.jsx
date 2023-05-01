import { useState, useEffect } from 'react';
import axios from 'axios';

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

    const handleSave = async () => {
        try {
            const res = await axios.post('/api/records', {
                fact,
                name,
            });
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const insertRecord = (event) => {
        event.preventDefault();

        const description = document.getElementById('random-fact').innerHTML;

        console.log(description);
        const data = { description };
        fetch('/api/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(() => {
                console.log('New record inserted');
                setFactSaved(true);
                setFactSavedMessage('Fact saved!');
            });
    };

    const [factSaved, setFactSaved] = useState(false);
    const [factSavedMessage, setFactSavedMessage] = useState('');
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Random cat fact:</h1>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="border border-gray-300 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                        <p id="random-fact" className="text-lg text-gray-800 dark:text-white">{fact}</p>

                    </div>
                    <form className="max-w-sm mx-auto">
                        <button
                            type="submit"
                            onClick={insertRecord}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-300"
                        >
                            Save
                        </button>
                        {factSaved && (
                            <div className="text-green-500 font-bold mt-4">{factSavedMessage}</div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CatFact;