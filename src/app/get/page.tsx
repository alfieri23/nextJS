//import React, { useEffect, useState } from "react";
import Dados from "../components/Dados";
import DadosComplex from "../components/DadosComplex";


export default async function getApi() {
    //Ajuste
    /*const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:3000/api/users', {cache: 'no-store'});
            const data = await res.json();
            setData(result);
        }

        fetchData();
    }, []);*/

    // Call api-route
    //const res = await fetch('http://localhost:3000/api/users', {cache: 'no-store'});
    const res = await fetch('http://localhost:3000/api/users');
    const data = await res.json();

    console.log("data João", data);


    return (
        <main className="dark text-foreground bg-background" style={{
            height: "100vh",
            padding: "32px"
        }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridColumnGap: "32px",
                gridRowGap: "32px",
            }}>
                <p>Teste New Branch</p>
                {data.map(user => (
                    <DadosComplex
                        key={user.id}
                        name={user.name}
                        id={user.id}
                        email={user.email}
                        address={user.address}
                    />
                ))}
            </div>
        </main>
    )
}