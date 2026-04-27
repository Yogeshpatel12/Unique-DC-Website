import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="bg-slate-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <p className="text-brand-red font-bold uppercase tracking-widest text-[10px] mb-4">Contact Engineering</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 uppercase">Let's Connect</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
              Reach out to our sales and engineering team directly using the options below. We aim to respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
           

            <section className="space-y-12">
              <article>
                <h3 className="text-3xl font-bold mb-10 text-slate-900 tracking-tight">Visit Office</h3>
                <div className="space-y-8">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-slate-50 text-brand-red">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">REGISTERED & HEAD OFFICE</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Unique DC Motor And Brakes
                        <br /> Power House, Gudli, Rajasthan 313024
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-slate-50 text-brand-red">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Office Hours</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Mon - Fri: 9:00 AM - 6:00 PM
                        <br /> Sat: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="pt-10 border-t border-gray-100">
                <h3 className="text-lg font-bold mb-8 text-slate-900 uppercase tracking-widest">Direct Links</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <a
                    href="https://wa.me/918233268311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-sm bg-slate-50 p-5 text-left transition hover:bg-slate-100"
                  >
                    <MessageCircle size={24} className="text-green-600" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">WhatsApp</p>
                      <p className="font-bold text-slate-900">+91-82332 68311</p>
                    </div>
                  </a>

                  <a
                    href="tel:+917976958311"
                    className="flex items-center gap-4 rounded-sm bg-slate-50 p-5 text-left transition hover:bg-slate-100"
                  >
                    <Phone size={24} className="text-brand-red" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Call Sales</p>
                      <p className="font-bold text-slate-900">+91-79769 58311</p>
                    </div>
                  </a>

                  <a
                    href="mailto:unique@dcmotorbrake.com"
                    className="flex items-center gap-4 rounded-sm bg-slate-50 p-5 text-left transition hover:bg-slate-100 sm:col-span-2"
                  >
                    <Mail size={24} className="text-red-600" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Us</p>
                      <p className="font-bold text-slate-900">unique@dcmotorbrake.com</p>
                    </div>
                  </a>
                </div>
              </article>

              <article className="pt-10 border-t border-gray-100">
                <h3 className="text-lg font-bold mb-8 text-slate-900 uppercase tracking-widest">IndiaMART</h3>
                <a
                  href="https://www.indiamart.com/unique-dcmotor-brake/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6 shadow-xl shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center gap-5">
                      <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-orange-500 text-white font-black text-2xl border-4 border-orange-600">
                        IM
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Market Listing</p>
                        <h4 className="text-3xl font-extrabold text-slate-950">Visit Our IndiaMART Store</h4>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                          Browse our products and contact us directly through IndiaMART for fast response and verified business listings.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 lg:ml-10">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-lg shadow-brand-red/20 transition group-hover:bg-brand-red/90">
                        <ExternalLink size={20} />
                      </span>
                      <span className="text-sm font-bold uppercase tracking-widest text-brand-red">Open IndiaMART</span>
                    </div>
                  </div>
                </a>
              </article>

              <div className="overflow-hidden rounded-sm border border-gray-200">
                <iframe
                  title="Gudli, Rajasthan location"
                  src="https://www.google.com/maps?q=JRHF+Q5G,+Gudli,+Rajasthan+313024&output=embed"
                  className="h-64 w-full"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
