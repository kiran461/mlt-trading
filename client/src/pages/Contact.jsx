import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '', subject: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/api/inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error("Submission failed", err);
        }
    };


    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
                Contact Us
            </h1>
            <p className="text-center text-gray-700 mb-10">
                We'd love to hear from you! Fill out the form below or reach us through the contact details provided.
            </p>

            <form className="bg-white shadow-md rounded-2xl px-6 py-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        name="name"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        name="email"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                    rows="5"
                    placeholder="Your Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                <button
                    type="submit"
                    className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition w-full md:w-auto"
                >
                    Send Message
                </button>
            </form>

            <div className="mt-12 text-center text-sm text-gray-600">
                📍 <strong>Office:</strong> Mumbai, Maharashtra, India <br />
                📧 <strong>Email:</strong> contact@mlttrading.com <br />
                📞 <strong>Phone:</strong> +91-8286243899
            </div>
        </div>
    );
};

export default Contact;
