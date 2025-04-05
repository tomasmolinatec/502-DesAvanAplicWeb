import React, { useEffect, useState } from "react";

// ------------------------
// Función: fetchMockData
// Función asíncrona para obtener datos de una API de prueba
const fetchMockData = async (): Promise<any> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const data = await response.json();
    return data;
};

// ------------------------
// Componente: SimpleFetch
// Demuestra el uso de useEffect para obtener datos de una API
const SimpleFetch: React.FC = () => {
    // Estados para manejar la carga y los datos
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>(null);

    // useEffect para cargar datos cuando el componente se monta
    useEffect(() => {
        // Función para obtener los datos
        const loadData = async () => {
            try {
                const result = await fetchMockData();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        // Iniciar la carga de datos
        loadData();
    }, []); // Array vacío significa que se ejecuta solo al montar el componente

    // Función para recargar los datos manualmente
    const handleRefresh = async () => {
        setLoading(true);
        try {
            const result = await fetchMockData();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
            <h2>API Data Example</h2>

            {/* Botón para recargar los datos */}
            <button
                onClick={handleRefresh}
                style={{ marginBottom: '10px', padding: '5px 10px' }}
            >
                Get Data
            </button>

            {/* Indicador de carga */}
            {loading && (
                <div style={{ margin: '20px 0' }}>
                    <p>Loading data...</p>
                    <div className="spinner" style={{
                        width: '20px',
                        height: '20px',
                        border: '3px solid #f3f3f3',
                        borderTop: '3px solid #3498db',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }}></div>
                    <style>{`
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}</style>
                </div>
            )}

            {/* Mostrar los datos cuando estén disponibles */}
            {!loading && data && (
                <div style={{ marginTop: '1rem' }}>
                    <h3>Data from Mock API:</h3>
                    <pre style={{
                        background: '#f5f5f5',
                        padding: '10px',
                        borderRadius: '4px',
                        color: 'black',
                    }}>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>
            )}

            {/* Mostrar mensaje de error si no hay datos y no está cargando */}
            {!loading && !data && (
                <div style={{ color: 'red' }}>
                    Error: No data available
                </div>
            )}
        </div>
    );
};

export default SimpleFetch;