import React from 'react';

interface ToastProps {
  message: string | null;
  downloadUrl?: string;
  isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, downloadUrl, isVisible }) => {
  if (!message) return null;

  return (
    <div
      className={`toast ${isVisible ? 'show' : ''}`}
      role="status"
      aria-live="polite"
    >
      <span>{message} </span>
      {downloadUrl && (
        <a href={downloadUrl} download>
          Try again
        </a>
      )}
    </div>
  );
};
