import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import SellerPanelNavbar from '../components/seller/SellerPanelNavbar';

const CreateProduct = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SellerPanelNavbar />
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">Create New Product</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Image</h2>
                <p className="text-sm text-gray-500 mb-2">Upload your product image here</p>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="max-h-48 mx-auto" />
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div>
                        <label htmlFor="image-upload" className="cursor-pointer text-primary hover:text-primary-hover">
                          Upload an image
                        </label>
                        <span className="text-gray-500"> or drag and drop</span>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG</p>
                        <input
                          id="image-upload"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-sm text-gray-500 mb-2">Add your product details and necessary information here</p>
                <Textarea
                  className="min-h-[150px]"
                  placeholder="Enter product description..."
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Enter product name" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Slug</label>
                <Input placeholder="product-slug" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Details</label>
                <Textarea placeholder="Enter product details..." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Select Icon</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="icon1">Icon 1</SelectItem>
                    <SelectItem value="icon2">Icon 2</SelectItem>
                    <SelectItem value="icon3">Icon 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Parent Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cat1">Category 1</SelectItem>
                    <SelectItem value="cat2">Category 2</SelectItem>
                    <SelectItem value="cat3">Category 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <Button 
              onClick={() => navigate('/seller-panel')}
              variant="outline" 
              className="mr-4"
            >
              Cancel
            </Button>
            <Button className="bg-primary hover:bg-primary-hover">
              Add Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;