import logo from '../../assets/logo.svg';
import { InputSearch } from './InputSearch/InputSearch';
import { StyledHeader } from './style';

export function Header({ searchProducts }) {
	return (
		<StyledHeader>
			<div>
				<img src={logo} alt='Burguer Kenzie' />
				<InputSearch searchProducts={searchProducts} />
			</div>
		</StyledHeader>
	);
}
