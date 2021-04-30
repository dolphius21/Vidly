import ListGroup from 'react-bootstrap/ListGroup';

const ListGroupComp = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem
  } = props;

  return (
    <ListGroup>
      {items.map((item) => (
        <ListGroup.Item
          key={item[valueProperty] ? item[valueProperty] : 0}
          onClick={() => onItemSelect(item)}
          active={item === selectedItem}
        >
          {item[textProperty]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

ListGroupComp.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

export default ListGroupComp;
