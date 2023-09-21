// ProductsList: Responsável por renderizar a lista de produtos;
// - No componente <ProductsList />:
//   1. Importe o componente <Product />;
//   2. Faça um map na lista de produtos que recebeu por props;
//   3. Passe cada elemento recebido como props para o componente <Product />.
import { Product } from './Product/Product';
import { StyledList } from './style';

export function ProductList({ products, handleClick }) {
	return (
		<StyledList>
			{products.map(product => (
				<Product key={product.id} product={product} handleClick={handleClick} />
			))}
		</StyledList>
	);
}
