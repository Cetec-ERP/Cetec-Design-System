import { useEffect } from 'react';

export const useOnClose = (
  ref: React.RefObject<HTMLElement | null>,
  onClose?: () => void,
) => {
  useEffect(() => {
    if (!onClose) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref, onClose]);
};
