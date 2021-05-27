import { getStorageItem, setStorageItem } from './storage.js';

const menu = [
	{
		id: 1,
		title: 'buttermilk pancakes',
		category: 'breakfast',
		price: 15.99,
		img: './images/item-1.jpeg'
	},

	{
		id: 2,
		title: 'diner double',
		category: 'lunch',
		price: 13.99,
		img: './images/item-2.jpeg'
	},
	{
		id: 3,
		title: 'Dinner',
		category: 'Dinner',
		price: 40.11,
		img: './images/item-10.jpeg'
	},
	{
		id: 4,
		title: 'country delight',
		category: 'breakfast',
		price: 20.99,
		img: './images/item-4.jpeg'
	},
	{
		id: 5,
		title: 'egg crunch',
		category: 'lunch',
		price: 22.99,
		img: './images/item-5.jpeg'
	},
	{
		id: 6,
		title: 'oreo dream',
		category: 'shakes',
		price: 18.99,
		img: './images/item-6.jpeg'
	},
	{
		id: 7,
		title: 'bacon overflow',
		category: 'breakfast',
		price: 8.99,
		img: './images/item-7.jpeg'
	},
	{
		id: 8,
		title: 'american classic',
		category: 'lunch',
		price: 12.99,
		img: './images/item-8.jpeg'
	},
	{
		id: 9,
		title: 'quarantine buddy',
		category: 'shakes',
		price: 16.99,
		img: './images/item-9.jpeg'
	},
	{
		id: 10,
		title: 'godzilla milkshake',
		category: 'shakes',
		price: 6.99,
		img: './images/item-3.jpeg'
	},
	{
		id: 11,
		title: 'Milo Shake',
		category: 'shakes',
		price: 3.99,
		img: './images/item-14.jpeg'
	},
	{
		id: 12,
		title: 'Vanilla Cream Shake',
		category: 'shakes',
		price: 2.99,
		img: './images/item-13.jpeg'
	},
	{
		id: 13,
		title: 'Italian Wedding Crush',
		category: 'Dinner',
		price: 25.11,
		img: './images/item-11.jpeg'
	},
	{
		id: 14,
		title: ' Bruschetta',
		category: 'Dinner',
		price: 15.49,
		img: './images/item-12.jpeg'
	}
];

let electricLocal = [];

const setLocal = () => {
	electricLocal = menu.map((menuItems) => {
		const { id, title, img, category, price } = menuItems;
		return { id, title, img, category, price };
	});
	setStorageItem('ElectricLocal', electricLocal);
};
electricLocal = getStorageItem('ElectricLocal');

export { setLocal, electricLocal };
