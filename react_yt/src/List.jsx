import PropTypes from 'prop-types';

const List = (props) => {

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(food => <li key={food.id}>{food.name} : &nbsp; <b>{food.calories}</b></li>);

    return (
        <>
            <h2 className="list-category">{category}</h2>
            <ul className="list-item">{listItems}</ul>
        </>

    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number }))
}

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List



// fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
//fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
// fruits.sort((a, b) => a.calories - b.calories); //ACCENDING
//fruits.sort((a, b) => b.calories - a.calories); //DECENDING

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100) //FOR LOW CAL
//const highCalFruits = fruits.filter(fruit => fruit.calories > 100)

// const modifiedListItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name} : &nbsp; <b>{highCalFruit.calories}</b></li>); //AFTER FILTERS
// const originalListItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b></li>);