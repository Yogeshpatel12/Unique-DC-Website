import { motion } from "motion/react";
import indiaMartLogo from "../assets/Indiamart_logo.png";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ExternalLink,
  Building2,
  Globe,
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      value: "+91-82332 68311",
      href: "https://wa.me/918233268311",
      color: "text-green-600",
      bgColor: "bg-green-50 hover:bg-slate-400",
      borderColor: "border-green-200",
      description: "Instant messaging for quick inquiries",
    },
    {
      icon: Phone,
      title: "Call Sales Team",
      value: "+91-79769 58311",
      href: "tel:+917976958311",
      color: "text-red-600",
      bgColor: "bg-red-50 hover:bg-slate-400",
      borderColor: "border-red-200",
      description: "Direct line to our sales engineers",
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "unique@dcmotorbrakes.com",
      href: "mailto:unique.electromagneticbrake@gmail.com",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 hover:bg-slate-400",
      borderColor: "border-blue-200",
      description: "Technical inquiries and quotes",
    },
  ];

  return (
    <div className="pt-5">
      {/* Hero Section */}
      <section className="relative bg-slate-950 py-28 md:py-32 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(248,113,113,0.3),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(248,113,113,0.2),_transparent_50%)]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-red/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2  border-brand-red/20 mb-8">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-[0.2em]">
                Get In Touch
              </span>
            </div>

            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Let's Build Something
              <span className="block text-metallic-red text-yellow-500">
                Reliable Together
              </span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
              Connect with our engineering team for custom braking solutions,
              technical support, or partnership opportunities. We're here to
              help you achieve operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+917976958311"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-metallic-red gap-3 px-8 py-4 text-white font-bold uppercase tracking-widest rounded-full shadow-lg shadow-brand-red/25 hover:shadow-sm hover:shadow-brand-yellow/30 transition-all"
              >
                <Phone size={20} />
                Call Now
              </motion.a>

              <motion.a
                href="mailto:unique,electromagneticbrake@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-metallic-red gap-3 px-8 py-4 text-white font-bold uppercase tracking-widest rounded-full shadow-lg shadow-brand-red/25 hover:shadow-sm hover:shadow-brand-yellow/30 transition-all"
              >
                <Mail size={20} />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-24 bg-slate-600 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4 uppercase">
              Multiple Ways to Connect
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Choose the communication method that works best for your schedule
              and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-3xl border ${method.borderColor} ${method.bgColor} p-8 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="relative z-10">
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg mb-6 ${method.color}`}
                  >
                    <method.icon size={32} />
                  </div>

                  <h3 className="text-xl font-bold uppercase text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                    {method.title}
                  </h3>

                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {method.description}
                  </p>

                  <p className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {method.value}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Office Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 uppercase text-slate-900 mb-4">
                  Visit Our Headquarters
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Located in the industrial heart of Rajasthan, our facility
                  combines traditional craftsmanship with modern engineering
                  excellence.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red shrink-0">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-slate-900 mb-1">
                      Registered & Head Office
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Unique DC Motor And Brakes
                      <br />
                      Power House, Gudli
                      <br />
                      Rajasthan 313024, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-slate-900 mb-1">
                      Business Hours
                    </h4>
                    <div className="text-slate-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-sm text-slate-500">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
                <iframe
                  title="Gudli, Rajasthan location"
                  src="https://www.google.com/maps?q=JRHF+Q5G,+Gudli,+Rajasthan+313024&output=embed"
                  className="h-96 w-full"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-yellow-500" />
                    <span className="text-sm font-semibold text-slate-900">
                      Our Location
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IndiaMART Section */}
      <section className="py-24 bg-slate-700 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
              Explore Our Marketplace
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Discover our complete product catalog and verified business
              listings on India's largest B2B marketplace.
            </p>
          </motion.div>

          <motion.a
            href="https://www.indiamart.com/unique-dcmotor-brake/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-white border border-white p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-200"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white font-black text-2xl md:text-2xl shadow-2xl">
                    UDMB
                  </div>
                  <div className="absolute -inset-2 bg-red-500/10 rounded-3xl blur-lg" />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
                  <Globe size={14} className="mr-2" />
                  Verified Business Listing
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  Visit Our <b>IndiaMART</b> Store
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                  Browse our comprehensive product catalog, view detailed
                  specifications.
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="flex items-center justify-center rounded-3xl bg-white p-4 shadow-2xl border border-red-100">
                    <img
                      src={indiaMartLogo}
                      alt="IndiaMART Logo"
                      className="h-20 md:h-24 w-auto object-contain"
                    />
                  </div>

                  <div className="absolute -inset-2 bg-red-200/12 rounded-2xl blur-lg" />
                </div>
              </div>
            </div>

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-slate-600 via-transparent to-slate-600 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4 uppercase">
              Send Us Your Requirement
            </h2>

            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Fill out the form below and our engineering team will contact you
              within 24 hours with the best solution for your application.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
          >
            <iframe
              title="Contact Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSd2hLhKc6kHawpXCFSJsVtI0ugK9ZbU1IIPgmRoY8u0gJds8g/viewform?embedded=true"
              width="100%"
              height="1300"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
