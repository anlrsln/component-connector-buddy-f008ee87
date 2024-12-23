import { Briefcase, Award, Users, Calendar, CreditCard, CheckCircle } from 'lucide-react';

const CompanyDetails = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">Company Details</h2>
      
      <p className="text-gray-600">
        We are Manufacturer & Wholesaler of Bagru & Sanganeri Handblock Printed Saree,Suits,Dress Material, Running Material and many of other Women Apparels.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Business Type</h3>
            <p className="text-gray-500">Manufacturer, Supplier</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Employee Count</h3>
            <p className="text-gray-500">10</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
            <Award className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Establishment</h3>
            <p className="text-gray-500">2019</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
            <Calendar className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Working Days</h3>
            <p className="text-gray-500">Monday To Sunday</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">GST NO</h3>
            <p className="text-gray-500">08ABAFR1588B1ZC</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Payment Mode</h3>
            <p className="text-gray-500">Wallet & UPI, Cheque/DD, Online Payments (NEFT/RTGS/IMPS), Cash</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;