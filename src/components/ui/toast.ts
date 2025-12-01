import toast, { type ToastOptions } from "react-hot-toast";

const defaultOptions: ToastOptions = {
  duration: 3000,
  style: {
    background: 'rgba(28,35,51,0.7)', // frosted-dark
    color: '#0ff',                     // neon-cyan text
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.75rem',
    padding: '0.75rem 1.25rem',
    fontWeight: 500,
  },
};

export const showSuccess = (message: string, options?: ToastOptions) => {
  toast.success(message, { ...defaultOptions, ...options });
};

export const showError = (message: string, options?: ToastOptions) => {
  toast.error(message, { ...defaultOptions, ...options });
};

export const showInfo = (message: string, options?: ToastOptions) => {
  toast(message, { ...defaultOptions, ...options });
};
