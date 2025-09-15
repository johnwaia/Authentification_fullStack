import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export default function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const username =
    location.state?.username ||
    localStorage.getItem('lastUsername') ||
    'utilisateur';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('lastUsername');
    navigate('/', { replace: true });
  };

  const handleAddContact = () => {
    navigate('/addContact');
  }

  return (
    <div>
      <div>Bienvenue, {username} !</div>
        <button onClick={handleAddContact}>Ajouter un contact</button>
        <button>Voir mes contacts</button>
        <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
}

