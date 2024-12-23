import SellerInfo from './SellerInfo';
import ContactSupplierForm from './ContactSupplierForm';

const SellerDetails = () => {
  return (
    <div className="bg-white rounded-lg p-6 space-y-6 h-full">
      <SellerInfo />
      <ContactSupplierForm />
    </div>
  );
};

export default SellerDetails;