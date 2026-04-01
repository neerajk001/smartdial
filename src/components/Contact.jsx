// Contact.jsx
import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Instagram } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdpklpr";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { id, value } = event.target;
    // Mobile validation: only allow up to 10 digits
    if (id === "mobile") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [id]: cleaned }));
      return;
    }
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Final mobile validation
    if (formData.mobile.length !== 10) {
      setStatus({ type: "error", message: "Please enter a valid 10-digit mobile number." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
          source: "landing-contact",
        }),
      });

      if (!response.ok) {
        throw new Error(`Formspree submit failed: ${response.status}`);
      }

      setStatus({ type: "success", message: "Thanks! Your details were submitted successfully." });
      setFormData({ name: "", email: "", mobile: "", message: "" });
    } catch (error) {
      console.error("Contact form submit failed", error);
      setStatus({ type: "error", message: "Submission failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (    
    // 1. Kept the light gradient background
    <section className="w-full bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
                                     
        {/* 2. NEW: High-Contrast "Contact Hub" Card */}
        <Motion.div      
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}    
          transition={{ duration: 0.7, ease: "easeOut" }}
          // This card is the new centerpiece
          className="mx-auto max-w-6xl overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl shadow-blue-900/20 border border-slate-200/70"
        >
          {/* 3. NEW: Internal Grid for 50/50 Split */}
          <div className="grid lg:grid-cols-2">
            
            {/* --- LEFT (INFO) - Dark Side --- */}      
            <Motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-slate-900 p-6 sm:p-8 md:p-12"
            >
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-slate-400 md:text-4xl">
                Get in Touch
              </h2>
              <p className="mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg leading-7 text-slate-300">
                Let's connect and show you how Smart Dial can transform your
                loan sales process.
              </p>     
            
              {/* Redesigned Info List for Dark Mode */}
              <div className="space-y-5 sm:space-y-6">    
                <a    
                  href="mailto:info@smartdial.co.in"    
                  className="flex items-start gap-4 group"
                >
                  <div className="shrink-0 rounded-lg bg-blue-900/50 p-3 text-blue-300 transition-colors group-hover:bg-blue-800">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>      
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Email
                    </h3>
                    <p className="text-base text-blue-300 transition-colors group-hover:text-white">
                      info@smartdial.co.in
                    </p>
                  </div>
                </a>

                <a
                  href="tel:9730170684"
                  className="flex items-start gap-4 group"
                >
                  <div className="shrink-0 rounded-lg bg-blue-900/50 p-3 text-blue-300 transition-colors group-hover:bg-blue-800">
                    <Phone className="h-6 w-6" />
                  </div>   
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Phone   
                    </h3>      
                    <p className="text-base text-blue-300 transition-colors group-hover:text-white">
                      9730170684
                    </p>
                  </div>         
                </a>    

                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-blue-900/50 p-3 text-blue-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Office
                    </h3>
                    <p className="text-base text-slate-300">
                      B-203, 204, 205, Lawrence Trade Center,<br />
                      Manikpur Road, Near Madhuram Hotel,<br />
                      Vasai West 401202
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/_smartdial_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="shrink-0 rounded-lg bg-blue-900/50 p-3 text-blue-300 transition-colors group-hover:bg-blue-800">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Instagram
                    </h3>
                    <p className="text-base text-blue-300 transition-colors group-hover:text-white">
                      @__smartsolutions__
                    </p>
                  </div>
                </a>
              </div>
            </Motion.div>

            {/* --- RIGHT (FORM) - Light Side --- */}
            <Motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-white p-6 sm:p-8 md:p-12"
            >
              <h3 className="mb-5 sm:mb-6 text-xl sm:text-2xl font-semibold text-slate-900">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="10-digit mobile number"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="How can we help?"
                    required
                  ></textarea>
                </div>
                {status.message && (
                  <p
                    className={`text-sm ${
                      status.type === "success" ? "text-emerald-600" : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
