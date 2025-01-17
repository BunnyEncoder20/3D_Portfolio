import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // loading state
  const [loading, setLoading] = useState(false);

  // Form variaibles
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Functions
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // serviceID: service_b06jxzg
    // templateID: template_eqs45qf
    try {
      await emailjs.send(
        "service_b06jxzg",
        "template_eqs45qf",
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Varun",
          to_email: "varun.verma2024@gmailcom",
          message: form.message,
        },
        "86cKHqKsf__-wyvus"
      );

      setLoading(false);
      alert("Message sent successfully");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal bg"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Connect with me</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether your're looking to build a new website, improve your
            exisiting platform, or bring a unique project to life, I'm here to
            help
          </p>

          {/* Contact Form */}
          <form
            className="mt-12 flex flex-col space-y-7"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                className="field-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Bruce Wayne"
                required
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                className="field-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="not_batman@email.com"
                required
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                className="field-input"
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi, I want to hire you right now..."
                required
                rows={5}
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Email"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
