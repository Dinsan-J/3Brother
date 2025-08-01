import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from "lucide-react";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your photography services. Can you help me with more information?"
    );
    const phoneNumber = "94702202620"; // Updated phone number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          variant="hero"
          size="icon"
          className="h-14 w-14 rounded-full shadow-glow hover:scale-110 transition-all duration-300 bg-[#25D366] hover:bg-[#25D366]"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-card border border-border rounded-2xl shadow-elegant z-50 animate-scale-in ">
          {/* Header */}
          <div className=" p-4 rounded-t-2xl bg-green-600 ">
            <div className="flex items-center space-x-3 ">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div className="">
                <h4 className="font-semibold text-secondary">
                  3Brother Studio
                </h4>
                <p className="text-sm text-secondary/80">
                  Usually responds within an hour
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-sm text-foreground">
                👋 Hi there! Thanks for your interest in 3Brother Studio. How
                can we help you create something beautiful today?
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                Quick Actions:
              </p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-left"
                  onClick={openWhatsApp}
                >
                  📸 Wedding Photography Inquiry
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-left"
                  onClick={openWhatsApp}
                >
                  🎥 Event Videography Inquiry
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-left"
                  onClick={openWhatsApp}
                >
                  📅 Check Availability
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-left"
                  onClick={openWhatsApp}
                >
                  💰 Get Quote
                </Button>
              </div>
            </div>

            <Button
              onClick={openWhatsApp}
              variant="hero"
              className="w-full bg-[#25D366] "
            >
              <Send className="h-4 w-4 mr-2 " />
              Start WhatsApp Chat
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By clicking above, you'll be redirected to WhatsApp
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
