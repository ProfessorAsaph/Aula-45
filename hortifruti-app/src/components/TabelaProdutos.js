export default function TabelaProdutos({produtos}) {

    const listarProdutos = produtos.map( produto => 
        <ProdutoTableRow produto={produto} key={produto.name}/>
    );

    return(
        <table>
            <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th>Estoque</th>
            </tr>
            {listarProdutos}
        </table>
    );
}

function ProdutoTableRow({produto}){

    if(produto.stocked){
        return(
            <tr>
                <td>{produto.name}</td> 
                <td>{produto.category}</td>
                <td>{produto.price}</td>
                <td>Em estoque</td>
            </tr>
        );
    } else {
        return(
            <tr style={{ color: 'red' }}>
                <td>{produto.name}</td> 
                <td>{produto.category}</td>
                <td>{produto.price}</td>
                <td>Em falta</td>
            </tr>
        );
    }
}