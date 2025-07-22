import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '', subject: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE_URL}/api/inquiry`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Message sent successfully!");
                setForm({ name: '', email: '', message: '', subject: '' }); // reset form
            } else {
                toast.error(data.message || "Failed to send message.");
            }
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
            console.error("Submission failed", err);
        } finally {
            setLoading(false);
        }
    };

    const texts = {
        title: "Contact Us",
        subtitle: "We'd love to hear from you! Fill out the form below or reach us through the contact details provided.",
        sendMessage: "Send Message",
        loading: "Sending...",
        form: {
            name: "Full Name",
            email: "Email Address",
            subject: "Subject",
            message: "Your Message"
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
                {texts.title}
            </h1>
            <p className="text-center text-gray-700 mb-10">
                {texts.subtitle}
            </p>

            <form className="bg-white shadow-md rounded-2xl px-6 py-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder={texts.form.name}
                        value={form.name}
                        onChange={handleChange}
                        name="name"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="email"
                        placeholder={texts.form.email}
                        value={form.email}
                        onChange={handleChange}
                        name="email"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <input
                    type="text"
                    placeholder={texts.form.subject}
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                    rows="5"
                    placeholder={texts.form.message}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                <button
                    type="submit"
                    className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition w-full md:w-auto disabled:opacity-60"
                    disabled={loading}
                >
                    {loading ? texts.loading : texts.sendMessage}
                </button>
            </form>

            <div className="mt-12 text-center text-sm text-gray-600">
                📍 <strong>Office:</strong> Mumbai, Maharashtra, India <br />
                📧 <strong>Email:</strong> contact@mlttrading.com <br />
                📞 <strong>Phone:</strong> +91-8286243899
            </div>

            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
};

export default Contact;
