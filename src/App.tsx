import React, { useState, useEffect } from 'react';

// Типы пользователей для Ак Билим
type UserRole = 'admin' | 'coordinator' | 'teacher' | 'parent';

interface User {
  id: string;
  username: string;
  role: UserRole;
  fullName: string;
}

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  // Данные для входа
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'aydanek' && password === 'akbilim2025') {
      const userData: User = {
        id: '1',
        username: 'aydanek',
        role: 'admin',
        fullName: 'Айданек Наримбековна'
      };
      setUser(userData);
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Неверный логин или пароль');
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5', fontFamily: 'sans-serif' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '350px' }}>
          <h2 style={{ textAlign: 'center', color: '#1a3353', marginBottom: '24px' }}>AK BILIM 🐼</h2>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '16px' }}>
              <input 
                type="text" 
                placeholder="Логин" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }} 
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="password" 
                placeholder="Пароль" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', boxSizing: 'border-box' }} 
              />
            </div>
            {error && <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      {/* Боковая панель */}
      <div style={{ width: '250px', background: '#1a3353', color: 'white', padding: '20px' }}>
        <h3>Ак Билим</h3>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>Роль: {user?.role === 'admin' ? 'Администратор' : 'Координатор'}</p>
        <hr style={{ opacity: 0.2 }} />
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '10px 0', cursor: 'pointer' }}>📊 Дашборд</li>
            <li style={{ padding: '10px 0', cursor: 'pointer' }}>👥 Ученики</li>
            <li style={{ padding: '10px 0', cursor: 'pointer' }}>👨‍🏫 Учителя</li>
            <li style={{ padding: '10px 0', cursor: 'pointer' }}>📋 Расписание</li>
            {/* Специфическая роль для координатора */}
            <li style={{ padding: '10px 0', cursor: 'pointer', color: '#ffd700' }}>⭐ Панель Координатора</li>
          </ul>
        </nav>
      </div>

      {/* Основной контент */}
      <div style={{ flex: 1, background: '#f8f9fa', padding: '30px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <h2>Добро пожаловать, {user?.fullName}!</h2>
          <button onClick={() => setIsLoggedIn(false)} style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #ddd', cursor: 'pointer' }}>Выйти</button>
        </header>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <p style={{ color: '#666', marginBottom: '5px' }}>Всего учеников</p>
            <h3 style={{ margin: 0 }}>124</h3>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <p style={{ color: '#666', marginBottom: '5px' }}>Учителей</p>
            <h3 style={{ margin: 0 }}>12</h3>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <p style={{ color: '#666', marginBottom: '5px' }}>Координаторов</p>
            <h3 style={{ margin: 0 }}>2</h3>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <p style={{ color: '#666', marginBottom: '5px' }}>Новых лидов</p>
            <h3 style={{ margin: 0 }}>8</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;