import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { firebaseApp } from '../../../firebase/utils';
import { addProductStart, deleteProductStart, fetchProductsStart } from '../../../redux/Products/products.actions';
import Button from '../../forms/Button';
import FormInput from '../../forms/FormInput';
import Modal from '../../Modal';
import Table from '../../Table/Table';
import './AdminProducts.css';


const ProductsTableHead = [
    'Name',
    'Image',
    'Price'
];

const ProductsList = [
  {
      orderDate: '12, sep 1202',
      orderID: '124443E4',
      amount:'$12'
  }
]
const renderHead = (item, index) => <th key={index}>{item}</th>

const mapState = ({products}) => {
  return {
    products: products.products
  }
}


function AdminProducts(props) {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [productName, setProductName] = useState('');
  const [productUsage, setProductUsage] = useState('');
  const [productContain,setProductContain] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState('');
  const routePath = useLocation();
  const storage = getStorage(firebaseApp);
  const toggleModal = () => setHideModal(!hideModal);

  const renderBody = (item, index) => (
    <tr key={index}>
        {/* <td>vitamin c</td>
        <td>vitamin - image</td>
        <td>$12</td> */}
        <td>{item.productName}</td>
        <td> <img className="thumbnail" src={item.productThumbnail} /></td>
        <td>${item.productPrice}</td>
        <td><MdDelete onClick={() => dispatch(deleteProductStart("item.documentID"))} className='delete_cart_item' color='rgb(197, 0, 0)'size={20}  /></td>
      
    </tr>
  )
  const configModal = {
    hideModal,
    toggleModal
  };

  
  useEffect(() => {
    dispatch(fetchProductsStart());
  },[]);

  const resetForm = () => {
    setHideModal(true);
    setProductName('');
    setProductThumbnail('');
    setProductPrice(0);
    setProductDesc('');
    setProductSize('');
    setProductUsage('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addProductStart({
      productName,
      productThumbnail,
      productUsage,
      productSize,
      productPrice,
      productDesc
    }));
    resetForm();

  };

  const uploadImage = (e) => {
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(uploadProgress);
    },(err) => console.log(err), () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setProductThumbnail(downloadURL);
        console.log(productThumbnail);
      })
    }
    );
  }
 
return (
  <div>
      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <h2>
              Add new product
            </h2>

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={e => setProductName(e.target.value)}
            />
            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            />
            <FormInput
              label="Description"
              type="text"
              value={productDesc}
              handleChange={e => setProductDesc(e.target.value)}
            />
            <FormInput
              label="Usage"
              type="text"
              value={productUsage}
              handleChange={e => setProductUsage(e.target.value)}
            />
            {/* <FormInput
              label="What It Contains"
              type="text"
              value={productContain}
              handleChange={e => setProductContain(e.target.value)}
            /> */}
            <FormInput
              label="Size in ml"
              type="text"
              value={productSize}
              handleChange={e => setProductSize(e.target.value)}
            />
            <label>Image</label><br />
            <input
              label="Image"
              type={'file'}
              name='upload-image'
              onChange={uploadImage}
             />
             <br/>
            <Button type="submit">Add product</Button>
          </form>
        </div>
      </Modal>
      <h2 className='page-header'>Products</h2>
      <Button  onClick={() => toggleModal()}>
        Add new product
      </Button>
      <div className='row'>
          <div className='col-12'>
              <div className='card'>
                  <div className='card__body'>
                      {(products && products.length > 0 ) && 
                      <Table
                          limit='10'
                          headData={ProductsTableHead}
                          renderHead={(item,index) => renderHead(item,index)}
                          bodyData={products}
                          renderBody={(item,index) => renderBody(item, index)}
                      /> 
                      }
                  </div>
              </div>
          </div>
      </div>
  </div>
)
}

export default AdminProducts;