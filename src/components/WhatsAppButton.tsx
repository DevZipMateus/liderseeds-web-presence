import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5566996933519"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-colors"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
