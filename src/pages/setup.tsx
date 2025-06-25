
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Phone, Clock, Globe, User, Save, Trash2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface Customer {
  id: string;
  name: string;
  phone: string;
  callTime: string;
  language: string;
  translationLanguage?: string;
  status: 'active' | 'paused';
}

const Setup = () => {
  const { toast } = useToast();
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      phone: '+1-555-0123',
      callTime: '20:00',
      language: 'English',
      translationLanguage: 'Spanish',
      status: 'active'
    },
    {
      id: '2',
      name: 'Michael Chen',
      phone: '+1-555-0456',
      callTime: '19:30',
      language: 'English',
      status: 'active'
    }
  ]);

  const [newCustomer, setNewCustomer] = useState({
    name: '',
    phone: '',
    callTime: '',
    language: 'English',
    translationLanguage: ''
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 
    'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Russian'
  ];

  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.phone || !newCustomer.callTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const customer: Customer = {
      id: Date.now().toString(),
      ...newCustomer,
      translationLanguage: newCustomer.translationLanguage || undefined,
      status: 'active'
    };

    setCustomers([...customers, customer]);
    setNewCustomer({
      name: '',
      phone: '',
      callTime: '',
      language: 'English',
      translationLanguage: ''
    });
    setShowAddForm(false);

    toast({
      title: "Customer Added",
      description: `${customer.name} has been added to your agent's call list`
    });
  };

  const handleDeleteCustomer = (id: string) => {
    const customer = customers.find(c => c.id === id);
    setCustomers(customers.filter(c => c.id !== id));
    
    toast({
      title: "Customer Removed",
      description: `${customer?.name} has been removed from the call list`
    });
  };

  const toggleCustomerStatus = (id: string) => {
    setCustomers(customers.map(customer => 
      customer.id === id 
        ? { ...customer, status: customer.status === 'active' ? 'paused' : 'active' }
        : customer
    ));
  };

  return (
    <div className="min-h-screen bg-warm-gradient">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-warm-brown mb-6">
            Agent Setup
          </h1>
          <p className="text-xl text-warm-brown/80 font-inter max-w-3xl mx-auto">
            Configure your Omni Dimension agent to call customers at their preferred times
          </p>
        </div>

        {/* Agent Status */}
        <Card className="bg-white/90 backdrop-blur-sm border border-cream p-8 rounded-2xl mb-8 animate-fade-in-delayed">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-soft-peach w-16 h-16 rounded-2xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-terracotta" />
              </div>
              <div>
                <h2 className="text-warm-brown font-poppins font-bold text-2xl mb-2">Agent Status</h2>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-green-100 text-green-800 border-green-200 font-poppins">
                    ● Active
                  </Badge>
                  <span className="text-warm-brown/70 font-inter">
                    Next call: Today at 7:30 PM
                  </span>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-terracotta to-peach hover:from-peach hover:to-terracotta text-white font-poppins">
              Configure Agent
            </Button>
          </div>
        </Card>

        {/* Customer List */}
        <Card className="bg-white/90 backdrop-blur-sm border border-cream p-8 rounded-2xl mb-8 animate-fade-in-delayed">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-warm-brown font-poppins font-bold text-2xl">Customer List</h2>
            <Button 
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-terracotta to-peach hover:from-peach hover:to-terracotta text-white font-poppins"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Customer
            </Button>
          </div>

          <div className="space-y-6">
            {customers.map((customer, index) => (
              <div key={customer.id} className="border border-cream rounded-xl p-6 hover:shadow-md transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-soft-peach w-12 h-12 rounded-xl flex items-center justify-center">
                      <User className="w-6 h-6 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="text-warm-brown font-poppins font-bold text-lg">{customer.name}</h3>
                      <div className="flex items-center space-x-4 text-warm-brown/70 font-inter text-sm">
                        <div className="flex items-center space-x-1">
                          <Phone className="w-4 h-4" />
                          <span>{customer.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{customer.callTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Globe className="w-4 h-4" />
                          <span>{customer.language}</span>
                          {customer.translationLanguage && (
                            <span>→ {customer.translationLanguage}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Badge 
                      className={customer.status === 'active' 
                        ? 'bg-green-100 text-green-800 border-green-200' 
                        : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                      }
                    >
                      {customer.status === 'active' ? '● Active' : '⏸ Paused'}
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleCustomerStatus(customer.id)}
                      className="font-poppins"
                    >
                      {customer.status === 'active' ? 'Pause' : 'Resume'}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteCustomer(customer.id)}
                      className="text-red-600 border-red-200 hover:bg-red-50 font-poppins"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Add Customer Form */}
        {showAddForm && (
          <Card className="bg-white/90 backdrop-blur-sm border border-cream p-8 rounded-2xl animate-fade-in">
            <h2 className="text-warm-brown font-poppins font-bold text-2xl mb-6">Add New Customer</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-warm-brown font-poppins font-semibold">Name *</Label>
                <Input
                  id="name"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
                  placeholder="Customer name"
                  className="mt-2 border-cream bg-white/90 font-inter"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-warm-brown font-poppins font-semibold">Phone Number *</Label>
                <Input
                  id="phone"
                  value={newCustomer.phone}
                  onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})}
                  placeholder="+1-555-0123"
                  className="mt-2 border-cream bg-white/90 font-inter"
                />
              </div>
              
              <div>
                <Label htmlFor="callTime" className="text-warm-brown font-poppins font-semibold">Call Time *</Label>
                <Input
                  id="callTime"
                  type="time"
                  value={newCustomer.callTime}
                  onChange={(e) => setNewCustomer({...newCustomer, callTime: e.target.value})}
                  className="mt-2 border-cream bg-white/90 font-inter"
                />
              </div>
              
              <div>
                <Label htmlFor="language" className="text-warm-brown font-poppins font-semibold">Primary Language</Label>
                <Select value={newCustomer.language} onValueChange={(value) => setNewCustomer({...newCustomer, language: value})}>
                  <SelectTrigger className="mt-2 border-cream bg-white/90 font-inter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map(lang => (
                      <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="translationLanguage" className="text-warm-brown font-poppins font-semibold">Translation Language (Optional)</Label>
                <Select value={newCustomer.translationLanguage} onValueChange={(value) => setNewCustomer({...newCustomer, translationLanguage: value})}>
                  <SelectTrigger className="mt-2 border-cream bg-white/90 font-inter">
                    <SelectValue placeholder="Select translation language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map(lang => (
                      <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAddForm(false)}
                className="font-poppins"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddCustomer}
                className="bg-gradient-to-r from-terracotta to-peach hover:from-peach hover:to-terracotta text-white font-poppins"
              >
                <Save className="w-5 h-5 mr-2" />
                Add Customer
              </Button>
            </div>
          </Card>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Setup;
