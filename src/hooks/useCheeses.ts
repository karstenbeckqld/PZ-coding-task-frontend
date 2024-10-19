import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import { CanceledError } from "axios";
import { Cheese } from "../types/CheeseTypes.ts";

const useCheeses = () => {
    // The useState hooks are used to store the fetched data and potential errors. The cheeses state is initialized as
    // an empty string array, while the error state is initialized as null.
    const [cheeses, setCheeses] = useState<Cheese[]>([]);
    const [error, setError] = useState<string | null>(null);

    // We use the useEffect hook to fetch data from the API using axios and the defined base path in api-client.ts.
    // Therefore, we can use solely / as path here and as GET is the default request method, we don't have to define
    // a request method explicitly.
    // We also handle cancellations in this hook by creating a new AbortController instance and returning the abort
    // method as a way to prevent unwanted behavior when an asynchronous operation (like an API call or a timer) is
    // still running, but the component using the useEffect hook gets unmounted or updated before the operation
    // completes.
    useEffect(() => {

        const controller = new AbortController();

        apiClient.get<Cheese[]>('/cheese')
            .then(response => setCheeses(response.data))
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError(error.message)});

        return () => controller.abort();
    }, []);

    return { cheeses, error };
}

export default useCheeses;