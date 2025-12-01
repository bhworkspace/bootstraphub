'use client'
import { motion } from "framer-motion";
import Image from "next/image";

interface WhatsAppButtonProps {
  phoneNumber?: string;
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const defaultMessage = "Hello, I’m interested in starting a new project with BootstrapHub.";
  const encodedMessage = encodeURIComponent(defaultMessage);

  // Remove any non-digit characters from the number
  const cleanNumber = (phoneNumber || "919845398453").replace(/\D/g, "");

  // Detect mobile device
  const isMobile = () => {
    if (typeof navigator === "undefined") return false;
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  // Handle click
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    let link = "";

    if (isMobile()) {
      // Open directly in WhatsApp app
      link = `whatsapp://send?phone=${cleanNumber}&text=${encodedMessage}`;
    } else {
      // Open in WhatsApp Web
      link = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    }

    window.open(link, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-transparent rounded-full flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/Images/WhatsApp.svg.webp"
        alt="WhatsApp"
        width={128}
        height={128}
        className="object-contain"
        priority
      />
    </motion.button>
  );
}


