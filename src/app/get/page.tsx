import Dados from "../components/Dados";
import DadosComplex from "../components/DadosComplex";


export default function getApi() {
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
                <Dados></Dados>
                <Dados></Dados>
                <DadosComplex></DadosComplex>
            </div>
        </main>
    )
}