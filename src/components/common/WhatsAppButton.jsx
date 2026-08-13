import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phone = "8801700000000"; // আপনার WhatsApp নম্বর দিন

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