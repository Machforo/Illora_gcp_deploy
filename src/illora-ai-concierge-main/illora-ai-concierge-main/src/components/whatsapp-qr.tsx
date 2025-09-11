import React from 'react';

export function WhatsAppQR({ className = "" }: { className?: string }) {
  return (
    <div className={`w-32 h-32 mx-auto mb-3 bg-white rounded-lg p-2 shadow-sm ${className}`}>
      <img 
        src="https://i.postimg.cc/KzcRMmyr/Illora-Retreats-AI-Concierage-1024.jpg" 
        alt="WhatsApp QR Code" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
