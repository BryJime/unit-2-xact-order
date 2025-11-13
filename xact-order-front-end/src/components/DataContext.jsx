
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();


export const DataProvider = ({ children }) => {

    const [allExams, setAllExams] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const fetchExams = async () => {

        try {
            const response = await fetch('http://localhost:8080/exams/all', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });


            if (!response.ok) {

                let error = await response.json();

                throw new Error(error.message || '******Failed to fetch exams********');


            } else {
                const data = await response.json();

                setAllExams(data);
                setIsLoading(false);
            }


        } catch (error) {
            
            console.error('**********Error fetching exams***********:', error);
        }
    }

    useEffect(() => {
        fetchExams();
    }, []);

    return (
        <DataContext.Provider value={{ fetchExams, allExams, isLoading }}>
            {children}
        </DataContext.Provider>
    )
}