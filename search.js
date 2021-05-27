//serach functioning
import displayMenuItems from './app.js';

const setSearch = (electricLocal) => {
	const searchForm = document.querySelector('.search-form');
	const input = document.querySelector('.input');

	searchForm.addEventListener('keyup', () => {
		const value = input.value.toLowerCase();
		let newElectricLocal = [];
		if (value) {
			newElectricLocal = electricLocal.filter((item) => {
				let { title } = item;
				title = title.toLowerCase();
				if (title.startsWith(value)) {
					return item;
				}
			});
			displayMenuItems(newElectricLocal);
			const menuContianer = document.querySelector('.menuContainer');
			if (newElectricLocal.length < 1) {
				menuContianer.innerHTML = `<div class="text-danger text-center">
			<h4>Oops! no item found</h4></div>`;
			}
		} else {
			displayMenuItems(electricLocal);
		}
	});
};

export default setSearch;
