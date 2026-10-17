import React, { useState } from 'react';
import { Send, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import TornDivider from './TornDivider';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    selectedServices: [],
    budget: 'Not decided yet',
    details: ''
  });

  const [errors, setErrors] = useState({});

  const availableServices = [
    'SEO Optimization',
    'Social Media Marketing',
    'Video & Motion Graphics',
    'Graphic Design',
    'Content & Copywriting',
    'Google Ads',
    'Meta Ads'
  ];

  const budgetOptions = [
    'Under ₹10,000',
    '₹10,000 – ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000+',
    'Not decided yet'
  ];

  const handleServiceToggle = (serviceName) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceName);
      if (exists) {
        return { ...prev, selectedServices: prev.selectedServices.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, serviceName] };
      }
    });
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required.';
    if (!formData.company.trim()) errs.company = 'Company name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid business email is required.';
    if (formData.selectedServices.length === 0) errs.services = 'Please select at least one required service.';
    if (!formData.details.trim()) errs.details = 'Please briefly share your project goals.';
    return errs;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const message = [
      'Hello PIXETRICKS! I would like to discuss a project.',
      '',
      `Name: ${formData.name.trim()}`,
      `Company: ${formData.company.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim() || 'Not provided'}`,
      `Services: ${formData.selectedServices.join(', ')}`,
      `Monthly budget: ${formData.budget}`,
      `Project goals: ${formData.details.trim()}`,
    ].join('\n');
    const whatsappUrl = `https://wa.me/918825860664?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] text-[#EFE6DE] relative overflow-hidden">
      <TornDivider />
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#9A0002]/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Value Proposition */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6DE]/10 border border-[#EFE6DE]/15 text-[11px] font-bold uppercase tracking-wider text-[#EFE6DE] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#EFE6DE] animate-ping"></span>
                Let's Get Started
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#EFE6DE] tracking-tight mb-6 transition-colors duration-400 hover:text-[#9A0002] cursor-pointer">
                READY TO TAKE <br />
                <span className="text-[#EFE6DE] transition-colors duration-400 hover:text-[#9A0002]">YOUR BRAND FORWARD?</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Have an idea, a business or a marketing challenge? Let's talk about it. Tell us what you're looking for, and we'll explore how PIXETRICKS can help.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-[#9A0002] text-[#EFE6DE] flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block">Easy Communication</span>
                  <span className="text-sm font-bold text-[#EFE6DE]">Reach our team through the agreed channel.</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-[#9A0002] text-[#EFE6DE] flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block">Clear Progress Reports</span>
                  <span className="text-sm font-bold text-[#EFE6DE]">Know what's done, how campaigns perform and what's next.</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-[#9A0002] text-[#EFE6DE] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block">Your Feedback Matters</span>
                  <span className="text-sm font-bold text-[#EFE6DE]">We'll make sure your campaigns represent your brand.</span>
                </div>
              </div>
            </div>

            {/* SLA Trust Badge */}
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#EFE6DE]" />
              <span className="text-xs text-neutral-300">
                Your feedback helps make sure the content and campaigns represent your brand.
              </span>
            </div>
          </div>

          {/* Right Column: Conversion Contact Form */}
          <div className="lg:col-span-7 bg-neutral-900/90 rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-2xl relative">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#EFE6DE] mb-6 transition-colors duration-400 hover:text-[#9A0002] cursor-pointer">
              Tell Us About Your Project
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed mb-6">Share a few details about your business and the services you're interested in. We'll use them to understand your needs and plan our conversation.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-[#EFE6DE] placeholder-neutral-500 focus:outline-none focus:border-[#9A0002] transition-colors"
                  />
                  {errors.name && <span className="text-[11px] text-[#EFE6DE] font-bold block mt-1">{errors.name}</span>}
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                    Business or Brand Name *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex D2C Apparel"
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-[#EFE6DE] placeholder-neutral-500 focus:outline-none focus:border-[#9A0002] transition-colors"
                  />
                  {errors.company && <span className="text-[11px] text-[#EFE6DE] font-bold block mt-1">{errors.company}</span>}
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@apexbrand.com"
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-[#EFE6DE] placeholder-neutral-500 focus:outline-none focus:border-[#9A0002] transition-colors"
                  />
                  {errors.email && <span className="text-[11px] text-[#EFE6DE] font-bold block mt-1">{errors.email}</span>}
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-[#EFE6DE] placeholder-neutral-500 focus:outline-none focus:border-[#9A0002] transition-colors"
                  />
                  {errors.phone && <span className="text-[11px] text-[#EFE6DE] font-bold block mt-1">{errors.phone}</span>}
                </div>
              </div>

              {/* Required Service Multi-Select */}
              <div>
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                  Which Services Are You Interested In? *
                </label>
                <p className="text-[11px] text-neutral-400 mb-2">Select all that apply.</p>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((service) => {
                    const selected = formData.selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => handleServiceToggle(service)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                          selected
                            ? 'bg-[#9A0002] text-[#EFE6DE] border-[#9A0002]'
                            : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        {selected ? '✓ ' : '+ '}
                        {service}
                      </button>
                    );
                  })}
                </div>
                {errors.services && <span className="text-[11px] text-[#EFE6DE] font-bold block mt-1">{errors.services}</span>}
              </div>

              {/* Estimated Monthly Budget Selector */}
              <div>
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                  Estimated Monthly Marketing Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, budget: opt })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                        formData.budget === opt
                          ? 'bg-[#9A0002] text-[#EFE6DE] border-[#9A0002]'
                          : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                  Tell Us About Your Goals *
                </label>
                <textarea
                  rows="4"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="What are you looking to achieve? What challenges are you facing?"
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-[#EFE6DE] placeholder-neutral-500 focus:outline-none focus:border-[#9A0002] transition-colors"
                ></textarea>
                {errors.details && <span className="text-[11px] text-[#EFE6DE] font-bold block mt-1">{errors.details}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#9A0002] text-[#EFE6DE] font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-[#760002] transition-colors flex items-center justify-center gap-2 shadow-xl shadow-[#9A0002]/20"
              >
                <span>Prepare My Enquiry</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>

      </div>

    </section>
  );
}
