export default function TabelaProdutos({produtos}) {

    const listarProdutos = produtos.map( produto => 
        <ProdutoTableRow produto={produto} key={produto.name}/>
    );

    return(
        <table>
            <tr>
                <th>Nome</th>
                <th>Preço</th>
            </tr>
            {listarProdutos}
        </table>
    );
}

function ProdutoTableRow({produto}){
    return(
        <tr>
            {produto.stocked ? 
                <td>{produto.name}</td> 
            : 
                <td style={{ color: 'red' }} >{produto.name}</td>
            }
            <td>{produto.price}</td>
        </tr>
    );
}