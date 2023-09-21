// - No componente App:
//   1.  Crie o state de produtos;
//   2.  Utilize o useEffect com a sintaxe de montagem, faça uma requisição utilizando o fetch no endpoint da API da Hamburgueria da Kenzie;
//       URL que deve ser usada no fetch -> https://hamburgueria-kenzie-json-serve.herokuapp.com/products
//   3.  Importe o componente <ProductsList/> e passe por props esse state;
//   4.  Crie a função searchProducts;
//       - searchProducts: Responsável por filtrar (use o método filter) e mostrar apenas os produtos com o mesmo texto escrito no input de busca;
//   5.  Crie a função handleClick(productId);
//       - handleClick: Esta função deve receber por parâmetro o id e usar o método find para encontrar o item no array com o mesmo id do
//       produto e será responsável por adicionar o produto selecionado no state currentSale.

import { api } from './services/api';
import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { Cart } from './components/Cart/Cart';
import { GlobalStyle } from './styles/GlobalStyle';
import { GlobalButton } from './styles/button';

function App() {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [currentSale, setCurrentSale] = useState([]);
	const [inputValue, setInputValue] = useState('');

	async function loadProducts() {
		try {
			const { data } = await api.get();
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		loadProducts();
	}, []);

	function searchProducts(inputValue) {
		const searchedProducts = products.filter(
			({ name, category }) =>
				name.toLowerCase().includes(inputValue.toLowerCase()) ||
				category.toLowerCase().includes(inputValue.toLowerCase())
		);
		setFilteredProducts(searchedProducts);
		setInputValue(inputValue);
	}

	function handleClick(productId) {
		const addedProduct = products.find(({ id }) => id === productId);
		const productOnCart = currentSale.find(({ id }) => id === addedProduct.id);

		if (productOnCart) {
			const cart = currentSale.filter(product => product.id !== productOnCart.id);
			productOnCart.cartTotal = productOnCart.cartTotal + 1;
			setCurrentSale([...cart, productOnCart]);
		} else {
			setCurrentSale([...currentSale, { ...addedProduct, cartTotal: 1 }]);
		}
	}

	return (
		<>
			<GlobalStyle />
			<GlobalButton />
			<Header searchProducts={searchProducts} />
			<main>
				{filteredProducts.length > 0 ? (
					<section className='searchSection'>
						<div>
							<span>
								<h1>Resultados para: </h1>
								<h1 className='inputValue'>{inputValue}</h1>
							</span>
							<button className='eraseSearch' onClick={() => setFilteredProducts([])}>
								Limpar busca
							</button>
						</div>
						<ProductList products={filteredProducts} handleClick={handleClick} />
					</section>
				) : (
					<ProductList products={products} handleClick={handleClick} />
				)}
				<Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
			</main>
		</>
	);
}

export default App;
