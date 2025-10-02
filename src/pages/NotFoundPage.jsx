import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="app">
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <Link to="/">Kembali ke Beranda</Link>
    </div>
  );
};

export default NotFoundPage;