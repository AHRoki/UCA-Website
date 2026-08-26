import "./Contact.css";

import {
  lazy,
  Suspense,
  useState,
} from "react";

import emailjs from "@emailjs/browser";

import {
  ToastContainer,
  toast,
} from "react-toastify";

import { FaSpinner } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";

const LazyReCAPTCHA = lazy(
  () => import("react-google-recaptcha")
);

const MAX_MESSAGE_LENGTH = 500;

// ==========================
// EmailJS Configuration
// ==========================

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const AUTO_REPLY_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ==========================
// reCAPTCHA Configuration
// ==========================

const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",

    // Honeypot
    website: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] =
    useState(null);

  // ==========================
  // Handle Input Change
  // ==========================

  const handleChange = (e) => {
    const {
      name,
      value,
    } = e.target;

    const newValue =
      name === "message"
        ? value.slice(0, MAX_MESSAGE_LENGTH)
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ==========================
  // Validation
  // ==========================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name =
        "Please enter your name.";
    } else if (
      formData.name.trim().length < 3
    ) {
      newErrors.name =
        "Name must contain at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email =
        "Invalid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject =
        "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Please write your message.";
    } else if (
      formData.message.trim().length < 20
    ) {
      newErrors.message =
        "Message must contain at least 20 characters.";
    }

    return newErrors;
  };

  // ==========================
  // Submit Handler
  // ==========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    // Honeypot Protection
    if (formData.website !== "") {
      return;
    }

    const validationErrors =
      validateForm();

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    if (!captchaToken) {
      toast.error(
        "Please verify that you are not a robot."
      );
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        to_email: formData.email,
        phone:
          formData.phone || "N/A",
        subject: formData.subject,
        message: formData.message,
      };

      // ==========================
      // Admin Email
      // ==========================

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      // ==========================
      // Auto Reply
      // ==========================

      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      toast.success(
        "Thank you! Your message has been sent successfully. We will contact you soon."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        website: "",
      });

      setErrors({});
      setCaptchaToken(null);
    } catch (error) {
      console.error(
        "EmailJS Error:",
        error
      );

      toast.error(
        "Failed to send message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="contact-section"
        id="contact"
      >
        <div className="container">

          {/* Section Title */}

          <div
            className="section-title"
            data-aos="fade-up"
          >
            <span>
              GET IN TOUCH
            </span>

            <h2>
              Contact Universal Consulting Agency
            </h2>

            <p>
              We'd love to hear from you. Whether
              you need engineering, consulting,
              project management or business
              solutions, our team is ready to help.
            </p>
          </div>

          <div className="contact-grid">

            {/* ==========================
                Contact Information
            ========================== */}

            <div
              className="contact-info"
              data-aos="fade-right"
            >

              <div className="info-card">
                <div
                  className="info-icon"
                  aria-hidden="true"
                >
                  📍
                </div>

                <div>
                  <h3>
                    Office Address
                  </h3>

                  <p>
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div
                  className="info-icon"
                  aria-hidden="true"
                >
                  📞
                </div>

                <div>
                  <h3>
                    Phone
                  </h3>

                  <p>
                    +880 1767-917722
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div
                  className="info-icon"
                  aria-hidden="true"
                >
                  ✉️
                </div>

                <div>
                  <h3>
                    Email
                  </h3>

                  <p>
                    anwarrki66@gmail.com
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div
                  className="info-icon"
                  aria-hidden="true"
                >
                  🌐
                </div>

                <div>
                  <h3>
                    Website
                  </h3>

                  <p>
                    uca-website-one.vercel.app
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div
                  className="info-icon"
                  aria-hidden="true"
                >
                  🕒
                </div>

                <div>
                  <h3>
                    Office Hours
                  </h3>

                  <p>
                    Saturday – Thursday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* ==========================
                Contact Form
            ========================== */}

            <div
              className="contact-form-wrapper"
              data-aos="fade-left"
            >
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >

                {/* Honeypot */}

                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex="-1"
                  aria-hidden="true"
                  style={{
                    display: "none",
                  }}
                />

                {/* Name */}

                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className={
                      errors.name
                        ? "error"
                        : ""
                    }
                    aria-invalid={
                      !!errors.name
                    }
                    required
                  />

                  {errors.name && (
                    <small
                      className="form-error"
                      role="alert"
                    >
                      {errors.name}
                    </small>
                  )}
                </div>

                {/* Email */}

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className={
                      errors.email
                        ? "error"
                        : ""
                    }
                    aria-invalid={
                      !!errors.email
                    }
                    required
                  />

                  {errors.email && (
                    <small
                      className="form-error"
                      role="alert"
                    >
                      {errors.email}
                    </small>
                  )}
                </div>

                {/* Phone */}

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>

                {/* Subject */}

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={
                      errors.subject
                        ? "error"
                        : ""
                    }
                    aria-invalid={
                      !!errors.subject
                    }
                    required
                  />

                  {errors.subject && (
                    <small
                      className="form-error"
                      role="alert"
                    >
                      {errors.subject}
                    </small>
                  )}
                </div>

                {/* Message */}

                <div className="form-group">
                  <label htmlFor="message">
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    name="message"
                    placeholder="Write Your Message..."
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={
                      MAX_MESSAGE_LENGTH
                    }
                    className={
                      errors.message
                        ? "error"
                        : ""
                    }
                    aria-invalid={
                      !!errors.message
                    }
                    required
                  />

                  <div className="message-footer">
                    {errors.message ? (
                      <small
                        className="form-error"
                        role="alert"
                      >
                        {errors.message}
                      </small>
                    ) : (
                      <span />
                    )}

                    <small className="character-count">
                      {formData.message.length}
                      /
                      {MAX_MESSAGE_LENGTH}
                    </small>
                  </div>
                </div>

                {/* ==========================
                    reCAPTCHA
                ========================== */}

                <div
                  className="form-group captcha-wrapper"
                  aria-label="Security verification"
                >
                  <Suspense
                    fallback={
                      <div
                        className="captcha-loading"
                        aria-live="polite"
                      >
                        Loading security verification...
                      </div>
                    }
                  >
                    <LazyReCAPTCHA
                      sitekey={
                        RECAPTCHA_SITE_KEY
                      }
                      onChange={(token) =>
                        setCaptchaToken(token)
                      }
                      onExpired={() =>
                        setCaptchaToken(null)
                      }
                    />
                  </Suspense>
                </div>

                {/* Submit Button */}

                <button
                  type="submit"
                  className="contact-btn"
                  disabled={loading}
                  aria-live="polite"
                >
                  {loading ? (
                    <>
                      <FaSpinner
                        className="spinner"
                        aria-hidden="true"
                      />

                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

              </form>
            </div>

          </div>

          {/* ==========================
              Google Map
          ========================== */}

          <div
            className="contact-map"
            data-aos="fade-up"
          >
            <iframe
              title="UCA Office Location Map"
              src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* ==========================
          Toast Notifications
      ========================== */}

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Contact;