// Cart: Responsável por apresentar os produtos inseridos no carrinho e o valor total da compra.
// - No componente <Cart />:
//   1.  Use o método reduce para mostrar o total da venda;
//   2.  Passe por props o state currentSale.

import { StyledCart } from './style';

export function Cart({ currentSale, setCurrentSale }) {
	const totalValue = currentSale.reduce((previousValue, currentValue) => {
		if (currentValue.cartTotal > 1) {
			return previousValue + currentValue.price * currentValue.cartTotal;
		} else {
			return previousValue + currentValue.price;
		}
	}, 0);

	const emptyCart = () => setCurrentSale([]);

	function removeProduct(productId) {
		const updatedCart = currentSale.filter(product => product.id !== productId);
		setCurrentSale(updatedCart);
	}

	function updateTotal(id, cartTotal, operation) {
		let cart = currentSale.filter(product => product.id !== id);
		let indexOfProductToUpdate;
		const productToUpdate = currentSale.find((product, i) => {
			if (product.id === id) {
				indexOfProductToUpdate = i;
				return product;
			}
		});
		if (cartTotal === 1 && operation === '-') {
			removeProduct(id);
		} else {
			if (operation === '+') {
				cartTotal = cartTotal + 1;
			} else {
				cartTotal = cartTotal - 1;
			}
			const updatedProduct = { ...productToUpdate, cartTotal: cartTotal };
			cart.splice(indexOfProductToUpdate, 0, updatedProduct);
			setCurrentSale([...cart]);
		}
	}

	return (
		<StyledCart>
			<span className='cartHeader'>
				<h2>Carrinho de compras</h2>
			</span>
			{currentSale.length > 0 ? (
				<section className='cartSection'>
					<ul className='cartList'>
						{currentSale.map(({ id, name, category, img, cartTotal }) => (
							<li key={id}>
								<figure>
									<img
										className={
											id === 4 || id === 5 ? 'imageBig' : id === 6 ? 'imageMedium' : null
										}
										src={img}
										alt={name}
									/>
								</figure>
								<div>
									<span>
										<h3>{name.length > 16 ? `${name.substring(0, 16)}...` : name}</h3>
										<button onClick={() => removeProduct(id)}>Remover</button>
									</span>
									<span>
										<small>{category}</small>
										<div>
											<button>-</button>
											<p>{cartTotal}</p>
											<button onClick={() => updateTotal(id, cartTotal, '+')}>+</button>
										</div>
									</span>
								</div>
							</li>
						))}
					</ul>
					<div className='cartTotal'>
						<span>
							<h3>Total</h3>
							<h3 className='totalValue'>
								{totalValue.toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL',
								})}
							</h3>
						</span>
						<button onClick={emptyCart}>Remover todos</button>
					</div>
				</section>
			) : (
				<div className='emptyCart'>
					<h2>Sua sacola está vazia</h2>
					<small>Adicione itens</small>
				</div>
			)}
		</StyledCart>
	);
}
