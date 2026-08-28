import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phone = "8801767917722"; // UCA WhatsApp নম্বর

  return (
    <a
      href={`https://wa.me/${phone}`}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
}

export default WhatsAppButton;