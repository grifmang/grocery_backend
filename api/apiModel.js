const db = require('../data/dbConfig.js');

module.exports = {
    getAllItems,
    addItem,
    checkItem,
    clearList,
    checkDisplayItem
}

function getAllItems() {
    return db('list')
}

function addItem(item) {
    return db('list').insert(item);
}

async function checkDisplayItem(id) {
    const items = await getAllItems();
    if (items.length > 0) {
        let item = items.filter(element => element.id === id);
        return db('list').update({ display: false}).where({ id });
    }
}

async function checkItem(id) {
    const items = await getAllItems();
    if (items.length > 0) {
        let item = items.filter(element => element.id === id);
        return db('list').update({ checked:  !item.checked}).where({ id });
    }
}

async function clearList() {
    const items = await getAllItems();
    items.map(async element => {
        await checkDisplayItem(element.id)
    })
}