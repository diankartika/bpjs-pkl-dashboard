import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const { role } = router.query;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const roleLabel = role === 'admin' ? 'Admin' : 'Mitra';

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'admin') {
      router.push('/admin');
    } else if (role === 'mitra') {
      router.push('/mitra');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login {roleLabel}
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border px-4 py-2 rounded mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Masuk
        </button>
      </form>
    </div>
  );
}
