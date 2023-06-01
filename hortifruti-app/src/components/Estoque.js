import TabelaProdutos from "./TabelaProdutos";
import {useState} from 'react';

export default function Estoque({produtos}) {

    const [filtro, setFiltro] = useState("");
    const [somenteEstoque, setSomenteEstoque] = useState(false);

    return(
        <>
            <BarraPesquisa 
                filtro={filtro} 
                aoModificarFiltro={setFiltro}
                somenteEstoque={somenteEstoque}
                aoModificarEstoque={setSomenteEstoque}
            />
            <TabelaProdutos produtos={produtos} />
        </>
    );
}

function BarraPesquisa({filtro, somenteEstoque}){
    return(
        <form>
        <input
            type="text" 
            placeholder="Pesquisar..."
            value={filtro}         
        />
        <label>
            <input
                type="checkbox"
                checked={somenteEstoque}
            />
            Somente mostrar produtos em estoque
        </label>
        </form>
    );
}