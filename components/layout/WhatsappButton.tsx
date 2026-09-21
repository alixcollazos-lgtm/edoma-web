// components/layout/WhatsappButton.tsx
import { Icons } from "@/components/ui/icons";
import { getWhatsappLink } from "@/lib/constants";

export function WhatsappButton() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        width: "56px",
        height: "56px",
        minWidth: "56px",
        minHeight: "56px",
        maxWidth: "56px",
        maxHeight: "56px",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        color: "white",
        boxShadow: "0 10px 25px rgba(37, 211, 102, 0.30)",
      }}
    >
      <Icons.whatsapp
        width="26"
        height="26"
        style={{
          width: "26px",
          height: "26px",
          minWidth: "26px",
          minHeight: "26px",
          maxWidth: "26px",
          maxHeight: "26px",
        }}
      />
    </a>
  );
}