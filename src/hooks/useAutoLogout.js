import { useEffect } from 'react';

export const useAutoLogout = () => {
  useEffect(() => {
    // Check if this tab has been marked
    const tabMarked = sessionStorage.getItem('tabMarked');
    
    if (!tabMarked) {
      // Mark this tab
      sessionStorage.setItem('tabMarked', 'true');
      
      // If user exists, this is a new tab - logout
      if (localStorage.getItem('user')) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '/';
      }
    }
  }, []);
};