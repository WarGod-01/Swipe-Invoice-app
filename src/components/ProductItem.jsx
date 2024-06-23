import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";
import { useSelector } from "react-redux";

const ProductItem = (props) => {
  const { onItemizedItemEdit } = props;

  const data = useSelector((state) => {
    return state.invoices;
  });
  const [productsItems, setProductsItems] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const products = data[0]?.items || [];
      setProductsItems(products);
      console.log("ProductsItems:", products);
    }
  }, [data]);
  //const ProductsItems = data[0]?.items || [];
  const itemTable = productsItems.map((item) => {
    console.log("Item in Mapping:", item);
    return (
      <ItemRow
        key={item.itemId}
        item={item}
        onItemizedItemEdit={onItemizedItemEdit}
      />
    );
  });

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{itemTable}</tbody>
      </Table>
    </div>
  );
};
const ItemRow = ({ item, onItemizedItemEdit }) => {
  const handleDelete = () => {};

  return (
    <tr>
      <td>
        <EditableField
          onItemizedItemEdit={(evt) => onItemizedItemEdit(evt, item.itemId)}
          cellData={{
            type: "text",
            name: "itemID",
            placeholder: "Item ID",
            value: item.itemId,
            id: item.itemId,
          }}
        />
      </td>
      <td>
        <EditableField
          onItemizedItemEdit={(evt) => onItemizedItemEdit(evt, item.itemId)}
          cellData={{
            type: "text",
            name: "itemName",
            placeholder: "Item name",
            value: item.itemName,
            id: item.itemId,
          }}
        />
      </td>
      <td>
        <EditableField
          onItemizedItemEdit={(evt) => onItemizedItemEdit(evt, item.itemId)}
          cellData={{
            leading: "$",
            type: "number",
            name: "itemPrice",
            min: 1,
            step: "0.01",
            precision: 2,
            textAlign: "text-end",
            value: item.itemPrice,
            id: item.itemId,
          }}
        />
      </td>
      <td>
        <EditableField
          onItemizedItemEdit={(evt) => onItemizedItemEdit(evt, item.itemId)}
          cellData={{
            type: "number",
            name: "itemQuantity",
            min: 1,
            step: "1",
            value: item.itemQuantity,
            id: item.itemId,
          }}
        />
      </td>
      <td>
        <EditableField
          onItemizedItemEdit={(evt) => onItemizedItemEdit(evt, item.itemId)}
          cellData={{
            type: "text",
            name: "itemDescription",
            placeholder: "Item description",
            value: item.itemDescription,
            id: item.itemId,
          }}
        />
      </td>
      <td className="text-center" style={{ minWidth: "50px" }}>
        <BiTrash
          onClick={handleDelete}
          style={{ height: "33px", width: "33px", padding: "7.5px" }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
};

export default ProductItem;
