import { setLocal, electricLocal } from './data.js';
import setSearch from './search.js';

//date
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

//display menuItems
const menuContianer = document.querySelector('.menuContainer');

const displayMenuItems = (menuItem) => {
	const Items = menuItem
		.map((eachItem) => {
			return `<div class="col-md-4 mb-5">
                <div class="single-item border align-self-center text-capitalize">
                  <img src="${eachItem.img}" alt="${eachItem.title}" class="img-fluid w-100" />
                  <div class="px-2">
                  <p class="lead name">${eachItem.title}</p>
                     <p>$ ${eachItem.price}</p>
                    </div>
                </div>
            </div>`;
		})
		.join(' ');
	menuContianer.innerHTML = Items;
};

// buttons functionality
const btnContainer = document.querySelector('.btn-container');

const displayButtons = () => {
	//display buttons here
	const categories = [ 'all', ...new Set(electricLocal.map((btn) => btn.category)) ];
	const category = categories
		.map((Catrgorybtn) => {
			return ` <button data-id=${Catrgorybtn} class="btn btn-warning text-capitalize filter-btn">${Catrgorybtn}</button> `;
		})
		.join(' ');
	btnContainer.innerHTML = category;

	//filter btns functions here
	const filterBtn = document.querySelectorAll('.filter-btn');
	filterBtn.forEach((buttons) => {
		buttons.addEventListener('click', (e) => {
			const buttonDataId = e.target.dataset.id;

			const menuItems = electricLocal.filter((btnFilter) => {
				if (btnFilter.category == buttonDataId) {
					return btnFilter;
				}
			});

			if (buttonDataId == 'all') {
				displayMenuItems(electricLocal);
			} else {
				displayMenuItems(menuItems);
			}
		});
	});
};

//content load
window.addEventListener('DOMContentLoaded', () => {
	setLocal();
	displayButtons();
	displayMenuItems(electricLocal);
	setSearch(electricLocal);
});

export default displayMenuItems;
