# React - Entrega S2 - Hamburgueria da Kenzie

- Componentes necessários para esta aplicação:

  1.  App: Responsável por centralizar os componentes e administrar o compartilhamento de informações por props;
  2.  ProductsList: Responsável por renderizar a lista de produtos;
  3.  Product: Responsável por apresentar as informações do produto: nome, categoria e preço, além de um button para adicionar ao carrinho;
  4.  Cart: Responsável por apresentar os produtos inseridos no carrinho e o valor total da compra.

- Funções para esta aplicação:

  1.  showProducts: Responsável por filtrar (use o método filter) e mostrar apenas os produtos com o mesmo texto escrito no input de busca;
  2.  handleClick: Esta função deve receber por parâmetro o id e usar o método find para encontrar o item no array com o mesmo id do produto e será responsável por adicionar o produto selecionado no state currentSale.

- States para esta aplicação (sugestão):
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

- No componente App:

  1.  Crie o state de produtos;
  2.  Utilize o useEffect com a sintaxe de montagem, faça uma requisição utilizando o fetch no endpoint da API da Hamburgueria da Kenzie;
      URL que deve ser usada no fetch -> https://hamburgueria-kenzie-json-serve.herokuapp.com/products
  3.  Importe o componente <ProductsList/> e passe por props esse state;
  4.  Crie a função showProducts;
  5.  Crie a função handleClick(productId);

- No componente <ProductsList />:

  1. Importe o componente <Product />;
  2. Faça um map na lista de produtos que recebeu por props;
  3. Passe cada elemento recebido como props para o componente <Product />.

- No componente <Product />:

  1.  Aqui você vai precisar da função handleClick (criada no componente App) e passe por parâmetro o id do produto atual que será usado para adicionar ao carrinho;
  2.  Renderize a categoria, o nome e o preço, além de um button para adicionar ao carrinho;

- No componente <Cart />:
  1.  Use o método reduce para mostra o total da venda;
  2.  Passe por props o state currentSale.
