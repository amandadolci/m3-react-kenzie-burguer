import { useState } from 'react';
import { StyledInput } from './style';

export function InputSearch({ searchProducts }) {
	const [value, setValue] = useState('');

	return (
		<StyledInput
			onSubmit={event => {
				event.preventDefault();
				searchProducts(value);
				setValue('');
			}}>
			<input
				value={value}
				type='text'
				placeholder='Digitar pesquisa'
				onChange={event => {
					setValue(event.target.value);
					searchProducts(value);
				}}
			/>
			<button>Pesquisar</button>
		</StyledInput>
	);
}
