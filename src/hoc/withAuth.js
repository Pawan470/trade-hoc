import { useEffect } from "react";


export default function withAuth(Component) {
  const Hoc = () => {
    useEffect(() => {
      if (location.pathname === '/') {
        document.body.classList.add('home-page');
      } else {
        document.body.classList.remove('home-page');
      }
  
      return () => {
        document.body.classList.remove('home-page');
      };
    }, [location.pathname]);
  
  
    return Component
  }

  return Hoc
}