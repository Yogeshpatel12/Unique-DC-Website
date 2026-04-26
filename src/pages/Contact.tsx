import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = React.useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Product Quotation',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulated API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', phone: '', subject: 'Product Quotation', message: '' });
    }, 1500);
  };

  const handleReset = () => {
    setFormState('idle');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-[10px] mb-4">Contact Engineering</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 uppercase">Let's Connect</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
              Get in touch with our experts for technical consultation or quotation requests. We respond to all inquiries within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-10 text-slate-900 tracking-tight uppercase">Send a Message</h3>
              
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-50 border border-gray-100 p-12 text-center rounded-sm"
                >
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">Message Sent Successfully</h4>
                  <p className="text-slate-500 text-sm mb-8">Thank you for reaching out. Our technical team has received your request and will contact you shortly via email.</p>
                  <button 
                    onClick={handleReset}
                    className="text-brand-red font-bold text-xs uppercase tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={formState === 'submitting'}
                        className="w-full bg-slate-50 border border-gray-200 p-4 rounded-sm outline-none focus:border-brand-red transition-colors text-sm" 
                        placeholder="e.g. Robert Smith" 
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={formState === 'submitting'}
                        className="w-full bg-slate-50 border border-gray-200 p-4 rounded-sm outline-none focus:border-brand-red transition-colors text-sm" 
                        placeholder="robert@company.com" 
                      />
                    </motion.div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={formState === 'submitting'}
                        className="w-full bg-slate-50 border border-gray-200 p-4 rounded-sm outline-none focus:border-brand-red transition-colors text-sm" 
                        placeholder="+91 XXXX XXXX" 
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={formState === 'submitting'}
                        className="w-full bg-slate-50 border border-gray-200 p-4 rounded-sm outline-none focus:border-brand-red transition-colors text-sm appearance-none"
                      >
                        <option>Product Quotation</option>
                        <option>Technical Support</option>
                        <option>Custom Engineering</option>
                        <option>Other Enquiry</option>
                      </select>
                    </motion.div>
                  </div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Requirements</label>
                    <textarea 
                      required 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={formState === 'submitting'}
                      rows={5} 
                      className="w-full bg-slate-50 border border-gray-200 p-4 rounded-sm outline-none focus:border-brand-red transition-colors text-sm" 
                      placeholder="Please describe your application, required torque, voltage, etc..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <button 
                      disabled={formState === 'submitting'}
                      className="w-full bg-slate-900 text-white font-bold py-5 rounded-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formState === 'submitting' ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        <>Send Inquiry <Send size={14} /></>
                      )}
                    </button>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-bold mb-10 text-slate-900 tracking-tight">Visit Office</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center text-brand-red shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Corporate HQ</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        123 Industrial Estate, Phase II, New Link Road, <br />
                        Andheri (East), Mumbai, Maharashtra 400001, India.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center text-brand-red shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Office Hours</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Mon - Fri: 9:00 AM - 6:00 PM <br />
                        Sat: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-gray-100">
                <h3 className="text-lg font-bold mb-8 text-slate-900 uppercase tracking-widest">Direct Links</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="https://wa.me/919999999999" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 bg-slate-50 rounded-sm hover:bg-slate-100 transition-all group border border-transparent hover:border-green-200"
                  >
                    <MessageCircle size={24} className="text-green-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">WhatsApp</div>
                      <div className="font-bold text-slate-900">+91 99999 99999</div>
                    </div>
                  </a>
                  <a href="tel:+919999999999" className="flex items-center gap-4 p-5 bg-slate-50 rounded-sm hover:bg-slate-100 transition-all group border border-transparent hover:border-brand-red/20">
                    <Phone size={24} className="text-brand-red" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">Call Sales</div>
                      <div className="font-bold text-slate-900">+91 99999 99999</div>
                    </div>
                  </a>
                  <a href="mailto:sales@uniquedcbrakes.com" className="flex items-center gap-4 p-5 bg-slate-50 rounded-sm hover:bg-slate-100 transition-all group col-span-1 sm:col-span-2">
                    <Mail size={24} className="text-red-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">Email Us</div>
                      <div className="font-bold text-slate-900">sales@uniquedcbrakes.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-slate-100 rounded-sm overflow-hidden relative grayscale opacity-70">
                 <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                    Google Maps Integration Placeholder
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
