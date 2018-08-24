import React from 'react';

const ListGroup = ({ items, selectedItem, textProperty, valueProperty, onItemSelect }) => {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li
                    key={item[valueProperty]}
                    onClick={() => onItemSelect(item)}
                    className={selectedItem[textProperty] === item[textProperty] ? "list-group-item active" : "list-group-item"}
                    style={{ cursor: 'pointer' }}
                >
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default ListGroup;