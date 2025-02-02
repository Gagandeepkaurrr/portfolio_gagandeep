import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_022p6mn',    // Replace with your EmailJS Service ID
      'template_siq160i',   // Replace with your EmailJS Template ID
      e.target,
      'KD1yB8RFXPt7WaDmg'        // Replace with your EmailJS User ID
    )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('Failed to send message. Please try again later.'));
  };

  return (
    <section id="contact" className="contact">
      <h2 className='co'>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status">{status}</p>}
    </section>
  );
};

export default Contact;
