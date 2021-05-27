//get local storage item
const getStorageItem = (storage) => {
	let storageItem = localStorage.getItem(storage);
	if (storageItem) {
		storageItem = JSON.parse(localStorage.getItem(storage));
	} else {
		storageItem = [];
	}
	return storageItem;
};

//set the local storage item
const setStorageItem = (name, item) => {
	return localStorage.setItem(name, JSON.stringify(item));
};

export { setStorageItem, getStorageItem };
