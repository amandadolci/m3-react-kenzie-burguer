// Product: Responsável por apresentar as informações do produto: nome, categoria e preço, além de um button para adicionar ao carrinho;
// - No componente <Product />:
//   1.  Aqui você vai precisar da função handleClick (criada no componente App) e passe por parâmetro o id do produto atual que será usado para adicionar ao carrinho;
//   2.  Renderize a categoria, o nome e o preço, além de um button para adicionar ao carrinho;
import { StyledCard } from './style';

export function Product({ product, handleClick }) {
	const { category, id, img, name, price } = product;

	return (
		<StyledCard>
			<figure>
				<img
					className={id === 4 || id === 5 ? 'imageBig' : id === 6 ? 'imageMedium' : null}
					src={img}
					alt={name}
				/>
			</figure>
			<div>
				<h2>{name}</h2>
				<small>{category}</small>
				<h3>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
				<button onClick={() => handleClick(id)}>Adicionar</button>
			</div>
		</StyledCard>
	);
}
