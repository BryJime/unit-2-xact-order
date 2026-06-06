// Reusable data context for managing exam data across the application
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();


export const DataProvider = ({ children }) => {

    const [allExams, setAllExams] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(false);

    const fetchExams = async () => {

        const API_BASE_URL =
            import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

        try {
            setIsLoading(true);
            setError(false);

            const response = await fetch(`${API_BASE_URL}/exams/all`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });


            if (!response.ok) {

                let errData = await response.json();

                throw new Error(errData.message || '******Failed to fetch exams********');


            }

            const data = await response.json();

            setAllExams(data);

        } catch (e) {
            console.error('**********Error fetching exams***********:', e);
            setError(true);
            setAllExams(null);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchExams();
    }, []);

    return (
        <DataContext.Provider value={{ fetchExams, allExams, isLoading, error }}>
            {children}
        </DataContext.Provider>
    )
}