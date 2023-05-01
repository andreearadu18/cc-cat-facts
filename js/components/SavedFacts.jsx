import {useEffect, useState} from "react";

export default function SavedFacts() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        try{
            fetch('/api/records', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(json => setRecords(json.data));
        }
        catch (error) {
            console.log(error);
        }
    }, []);

    const deleteRecord = (event) => {
        event.preventDefault();
        const id = event.target.id;
        try {
            fetch(`/api/records?id=${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(json => {
                    setRecords(records.filter(record => record._id !== id));
                });
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Saved facts</h1>
            </div>
            <div className="container px-6 py-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    {records.map(record => (
                        <div
                            key={record._id}
                            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {record.description}
                            </p>
                            <div className={"flex justify-center mt-4"}>
                                <button type="button"
                                        id={record._id}
                                        onClick={deleteRecord}
                                        className="focus:outline-none text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-300 dark:focus:bg-green-400">Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}