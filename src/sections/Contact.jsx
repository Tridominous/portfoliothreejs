import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
    const formRef = useRef();
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",  
        message: "",
    });

    const handleChange = ({target: {name, value}}) => {
        setForm(prevForm => ({...prevForm, [name]: value}));
    };

    
    const handleSubmit =async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, {
                from_name: form.name,
                to_name: 'James Mou',
                from_email: form.email,
                to_email: 'jamesmou02@gmail.com',
                message: form.message,
            }, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

            setLoading(false);
            showAlert({
                show: true,
                text: 'Thank you for your message 😃',
                type: 'success',
              });
    
              setTimeout(() => {
                hideAlert(false);
                setForm({
                  name: '',
                  email: '',
                  message: '',
                });
              }, [3000]);
        } catch (error) {
            setLoading(false);
            console.error(error);

            showAlert({
                show: true,
                text: "I didn't receive your message 😢",
                type: 'danger',
              });
        }
    };

  return (
    <section className="c-space my-20" id="contact">
    {alert.show && <Alert {...alert} />}
    
    <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>
        <div className="contact-container">
            <h3 className="head-text">Let’s Connect!</h3>
            <p className="text-lg text-white-600 mt-3">
            Ready to create something amazing? Whether you need a brand-new website, want to elevate your current platform, or have a unique project in mind, I’m excited to help bring your vision to life. Let’s make it happen together!
            </p>

            <form 
                ref={formRef} 
                onSubmit={handleSubmit}
                className="flex flex-col mt-12 space-y-7"
                >
                <label className="space-y-3">
                    <span className="field-label">Name</span>
                    <input 
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="field-input"
                        placeholder="Nikola Tesla"
                        />
                </label>

                <label className="space-y-3">
                    <span className="field-label">Email</span>
                    <input 
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="field-input"
                        placeholder="nikolatesla@mail.com"
                        />
                </label>

                <label className="space-y-3">
                    <span className="field-label">Your Message</span>
                    <textarea 
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="field-input"
                        placeholder="Hi, I'm interested in building a website for my coffee shop..."
                        />
                </label>

                <button className="field-btn" type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}

                    <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                </button>

            </form>
        </div>
    </div>
    </section>
  )
}

export default Contact