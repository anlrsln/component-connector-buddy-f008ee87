import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

const ContactSupplierForm = () => {
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="mt-8 pt-8 border-t">
      <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
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
                    Name Surname <span className="text-primary">*</span>
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
                    E-Mail <span className="text-primary">*</span>
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
                    Phone <span className="text-primary">*</span>
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
                    Country <span className="text-primary">*</span>
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
                    Message <span className="text-primary">*</span>
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
                <a href="/sign-in" className="text-primary ml-1 font-semibold">
                  SIGN IN
                </a>
              </div>
              <Button type="submit" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8">
                Next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactSupplierForm;