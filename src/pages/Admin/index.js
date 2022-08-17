import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './../../components/Modal';
import FormInput from './../../components/forms/FormInput';
import Button from './../../components/forms/Button';
import './styles.scss';
import { addProductStart, deleteProductStart, fetchProductsStart } from '../../redux/Products/products.actions';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { firebaseApp } from '../../firebase/utils';
import { useLocation } from 'react-router-dom';


const mapState = ({products}) => {
  return {
    products: products.products
  }
}


const Admin = props => {
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
  const configModal = {
    hideModal,
    toggleModal
  };
  
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

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
    const videoFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${videoFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, videoFile);
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
    <div className="admin">

      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>
              Add new product
            </Button>
          </li>
        </ul>
      </div>

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
      <div className="manageProducts">

        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>
                  Manage Products
                </h1>
              </th>
            </tr>
            <tr>
              <td>
                <table className="results" border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    {(Array.isArray(products) && products.length > 0) && products.map((product, index) => {
                      const {
                        productName,
                        productThumbnail,
                        productPrice,
                        documentID
                      } = product;

                      return (
                        <tr key={index}>
                          <td>
                            <img className="thumb" src={productThumbnail} />
                          </td>
                          <td>
                            {productName}
                          </td>
                          <td>
                            ${productPrice}
                          </td>
                          <td>
                            <Button onClick={() => dispatch(deleteProductStart(documentID))}>
                              Delete
                            </Button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>

              </td>
            </tr>
          </tbody>
        </table>

      </div>


    </div>
  );
}

export default Admin;