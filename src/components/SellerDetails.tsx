import { User, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type FormData = {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  sendToMore: boolean;
};

const SellerDetails = () => {
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-[#1A5F7A] text-xl font-semibold">Seller Details</h2>
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg border flex items-center justify-center">
            <img 
              src="/placeholder.svg" 
              alt="VCARE MEDICINES"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">VCARE MEDICINES</h3>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="text-gray-600">GST</div>
          <div className="font-medium">27AEKPB3528C1ZX</div>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-1 text-sm bg-green-50 text-green-700 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Trusted Seller
          </div>
          <div className="flex items-center gap-1 text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            SUPER BONANZA
          </div>
        </div>

        <div className="space-y-4 text-gray-600">
          <div className="flex gap-3">
            <User className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm font-medium">Director</div>
              <div className="text-sm">Mr Suneet Bhutta</div>
            </div>
          </div>

          <div className="flex gap-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm font-medium">Member Since</div>
              <div className="text-sm">9 Years</div>
            </div>
          </div>

          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm font-medium">Address</div>
              <div className="text-sm">
                Shop No : C-13, First Floor, Shree Ram Industrial Estate, GD Ambekar Marg, Wadala, Mumbai, Maharashtra, 400031, India
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#1A5F7A] text-sm hover:underline cursor-pointer">
          Cosmetic Chemicals In Mumbai
        </div>

        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1 text-[#1A5F7A] border-[#1A5F7A]"
          >
            View Number
          </Button>
          <Button 
            variant="outline"
            className="flex-1 text-[#1A5F7A] border-[#1A5F7A]"
          >
            Contact Seller
          </Button>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mt-8 pt-8 border-t">
        <div className="bg-red-600 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold text-center">Contact Supplier</h2>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-b-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy-blue font-semibold">
                      Name Surname <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Name Surname" {...field} />
                    </FormControl>
                    <div className="text-right text-sm text-gray-500">0/35</div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy-blue font-semibold">
                      E-Mail <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="E-Mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy-blue font-semibold">
                      Phone <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="flex">
                        <Select>
                          <SelectTrigger className="w-[100px]">
                            <SelectValue placeholder="+90" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+90">+90</SelectItem>
                            <SelectItem value="+1">+1</SelectItem>
                            <SelectItem value="+44">+44</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input className="flex-1 ml-2" placeholder="501 234 56 78" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy-blue font-semibold">
                      Country <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="tr">Turkey</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy-blue font-semibold">
                      Message <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Message" 
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <div className="text-right text-sm text-gray-500">0/10000</div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sendToMore"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="text-sm text-gray-600 leading-none">
                      Would you like to send this message to more relevant companies?
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex justify-between items-center pt-4">
                <div className="text-sm">
                  Do you have an account? 
                  <a href="/sign-in" className="text-red-600 ml-1 font-semibold">
                    SIGN IN
                  </a>
                </div>
                <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8">
                  Next
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;