import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

import Product from "../../../types/product";
import DataLayer from '../../../lib/data-layer';

const DeleteProductModal = React.lazy(() => import('./DeleteProductModal'));
const SaveProductModal = React.lazy(() => import('./SaveProductModal'));

type ProductsTableProps = {
  products: Product[];
};

const emptyProduct: Product = {
  category: '',
  description: '',
  id: 0,
  image: '',
  price: 0,
  title: '',
};

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
  // State
  const [error, setError] = React.useState<any>(null);
  const [listedProducts, setListedProducts] = React.useState<Product[]>(products);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false);
  const [showSaveModal, setShowSaveModal] = React.useState<boolean>(false);

  // Handlers
  const onCloseDeleteModal = React.useCallback(() => setShowDeleteModal(false), [setShowDeleteModal]);
  const onCloseSaveModal = React.useCallback(() => setShowSaveModal(false), [setShowSaveModal]);
  const onDelete = React.useCallback(() => {
    if (selectedProduct) {
      setShowDeleteModal(false);
      setLoading(true);
      DataLayer.delete.product(selectedProduct.id!)
        .then(() => setListedProducts((prevState: Product[]) => prevState.filter((item: Product) => item.id !== selectedProduct.id)))
        .catch((error: any) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [selectedProduct, setShowDeleteModal, setListedProducts, setLoading]);
  const onSave = React.useCallback((p: Product) => {
    if (selectedProduct) {
      setShowSaveModal(false);
      setLoading(true);
      if (p.id) {
        DataLayer.update.product(p)
          .then((editedProduct: Product) => setListedProducts((prevState: Product[]) => prevState.map((item: Product) => item.id === editedProduct.id ? editedProduct : item)))
          .catch((error: any) => setError(error))
          .finally(() => setLoading(false));
      } else {
        // Delete id property since it is a create action
        delete p.id;

        DataLayer.create.product(p)
          .then((createdProduct: Product) => {
            setListedProducts((prevState: Product[]) => [...prevState, createdProduct]);
          })
          .catch((error: any) => setError(error))
          .finally(() => setLoading(false));
      }
    }
  }, [selectedProduct, setShowSaveModal, setListedProducts, setLoading]);
  const onShowDeleteModal = React.useCallback((p: Product) => {
    setSelectedProduct(p);
    setShowDeleteModal(true);
  }, [setSelectedProduct, setShowDeleteModal]);
  const onShowSaveModal = React.useCallback((p?: Product) => {
    setSelectedProduct(p ?? emptyProduct);
    setShowSaveModal(true);
  }, [setSelectedProduct, setShowSaveModal])

  // Render
  if (error) {
    return (
      <Alert variant="danger">
        {error?.message || 'Something went wrong while fetching products.'}
      </Alert>
    );
  }

  return (
    <React.Suspense fallback={<Spinner animation="border" />}>
      {
        loading
          ? (
            <div style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center', width: '100wh' }}>
              <Spinner animation="border" />
            </div>
          )
          : (
            <>
              <Button onClick={() => onShowSaveModal()} style={{ float: 'left', margin: 10 }} variant="primary">Create Product</Button>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th id='aaaa'>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    listedProducts.map((p: Product) => (
                      <tr key={p.id}>
                        <td width='2%'>{p.id}</td>
                        <td width='23%'>{p.title}</td>
                        <td width='45%'>{p.description}</td>
                        <td width='10%'>{p.category}</td>
                        <td width='5%'>{p.price}</td>
                        <td width='5%'><img alt={p.title} src={p.image} style={{ height: 60, width: 60 }} /></td>
                        <td width='10%'>
                          <Button onClick={() => onShowSaveModal(p)} variant="link"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16" style={{ color: 'blue' }}>
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg></Button>
                          <Button onClick={() => onShowDeleteModal(p)} variant="link"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16" style={{ color: 'red' }}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                          </svg></Button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
              <link rel="stylesheet" href="./css.css" />
            </>
          )
      }
      <DeleteProductModal
        onDelete={onDelete}
        onHide={onCloseDeleteModal}
        product={selectedProduct}
        show={showDeleteModal}
      />
      <SaveProductModal
        onHide={onCloseSaveModal}
        onSave={onSave}
        product={selectedProduct}
        show={showSaveModal}
      />
    </React.Suspense>
  );
};

export default ProductsTable;
