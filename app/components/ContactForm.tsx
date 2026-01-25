'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert('Chyba pri odosielaní správy. Skúste to prosím znova alebo nás kontaktujte telefonicky.');
      }
    } catch (error) {
      alert('Chyba pri odosielaní správy. Skúste to prosím znova alebo nás kontaktujte telefonicky.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-700 font-semibold text-lg">Správa bola odoslaná</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-green-600 hover:text-green-700 underline text-sm"
        >
          Odoslať ďalšiu správu
        </button>
      </div>
    );
  }

  return (
    <form 
      action="https://formspree.io/f/xjgwbkwb" 
      method="POST"
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      {/* Hidden inputs */}
      <input type="hidden" name="_subject" value="Dopyt z webu – prenájom odvlhčovačov Trenčín" />
      <input type="hidden" name="source" value="odvlhcovaceprenajom.sk" />
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Meno
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Telefón
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Správa
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Odosiela sa...' : 'Odoslať správu'}
      </button>
    </form>
  );
}
