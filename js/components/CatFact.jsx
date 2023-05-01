import { useState, useEffect } from 'react';
import axios from 'axios';

const CatFact = () => {
    const [fact, setFact] = useState('');
    const [name, setName] = useState('');

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

        const description = document.getElementById('description').value;
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
                document.getElementById('description').value = '';
            });
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Cat Fact App!</h1>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                    Random Fact:
                </h1>
                <div className="max-w-3xl mx-auto">
                    <div className="border border-gray-300 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                        <p className="text-lg text-gray-800 dark:text-white">{fact}</p>
                    </div>
                    <form className="max-w-sm mx-auto">
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Fact description
                            </label>
                            <textarea
                                id="description"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={insertRecord}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CatFact;
