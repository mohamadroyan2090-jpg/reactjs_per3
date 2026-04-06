function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Selamat Datang di Kasir Pintar</h1>
      <p className="lead">
        Sistem manajemen penjualan yang memudahkan bisnis Anda
      </p>

      <img 
        src="https://via.placeholder.com/600x300" 
        className="img-fluid rounded"
      />

      <div className="container mt-5">
        <div className="row text-center">

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5>Manajemen Produk</h5>
                <p>Mengelola data produk dengan mudah</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5>Transaksi Cepat</h5>
                <p>Proses pembayaran lebih cepat dan efisien</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5>Laporan Penjualan</h5>
                <p>Melihat laporan secara otomatis</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;