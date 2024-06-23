import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";
import EditableField from "./EditableField";
import {
  deleteInvoice,
  addInvoice,
  updateInvoice,
  selectInvoiceList,
} from "../redux/invoicesSlice";

const ProductsTab = () => {
  const productsData = useSelector((state) => {
    return state.invoices;
  });

  const dispatch = useDispatch();

  const onItemizedItemEdit = (evt, id) => {
    const updatedItems = productsData.items.map((oldItem) => {
      if (oldItem.itemId === id) {
        return { ...oldItem, [evt.target.name]: evt.target.value };
      }
      return oldItem;
    });
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <BiArrowBack size={18} />
        <div className="fw-bold mt-1 mx-2 cursor-pointer">
          <Link to="/">
            <h5>Go Back</h5>
          </Link>
        </div>
      </div>
      <ProductItem onItemizedItemEdit={onItemizedItemEdit} />
    </>
  );
};

export default ProductsTab;
