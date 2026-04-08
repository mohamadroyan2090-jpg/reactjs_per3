function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Atomic Habits: Perubahan Kecil Memberikan Hasil Yang Luar Biasa.
            </h1>
            <p className="lead">
              Cara untuk membiasakan diri untuk lebih baik dan melawan kebiasaan buruk.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Beli Sekarang
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Lihat Detail
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img 
              className="rounded-lg-3" 
              src="https://picsum.photos/720/600" 
              alt="Hero Book" 
              width="720" 
            />
          </div>
        </div>
      </div>

      {/* Best Seller Section */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Koleksi buku-buku terlaris dan viral yang wajib kamu baca!
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <a href="#" className="btn btn-primary">Lihat Semua</a>
              <a href="#" className="btn btn-secondary">Rekomendasi</a>
            </div>
          </div>
        </div>
      </section>

      {/* Daftar Buku */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            
            {/* Buku 1 */}
            <div className="col">
              <div className="card shadow-sm h-100 d-flex flex-column">
                <img 
                  src="https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg" 
                  className="card-img-top" 
                  alt="Atomic Habits"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold">Atomic Habits</h5>
                  <h6 className="card-subtitle mb-2 text-muted">James Clear</h6>
                  <p className="card-text small flex-grow-1">
                    Perubahan kecil yang memberikan hasil luar biasa.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="h5 text-primary mb-0">Rp89.000</span>
                    <button type="button" className="btn btn-sm btn-outline-primary">Beli Sekarang</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Buku 2 */}
            <div className="col">
              <div className="card shadow-sm h-100 d-flex flex-column">
                <img 
                  src="https://m.media-amazon.com/images/I/81lz2GjMJyL._AC_UF1000,1000_QL80_.jpg" 
                  className="card-img-top" 
                  alt="Ikigai"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold">Ikigai</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Héctor García & Francesc Miralles</h6>
                  <p className="card-text small flex-grow-1">
                    Rahasia panjang umur dan bahagia ala Jepang.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="h5 text-primary mb-0">Rp75.000</span>
                    <button type="button" className="btn btn-sm btn-outline-primary">Beli Sekarang</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Buku 3 */}
            <div className="col">
              <div className="card shadow-sm h-100 d-flex flex-column">
                <img 
                  src="https://m.media-amazon.com/images/I/81beUky0qYL._AC_UF1000,1000_QL80_.jpg" 
                  className="card-img-top" 
                  alt="The Psychology of Money"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold">The Psychology of Money</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Morgan Housel</h6>
                  <p className="card-text small flex-grow-1">
                    Pelajaran abadi tentang kekayaan, keserakahan, dan kebahagiaan.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="h5 text-primary mb-0">Rp95.000</span>
                    <button type="button" className="btn btn-sm btn-outline-primary">Beli Sekarang</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Buku 4 */}
            <div className="col">
              <div className="card shadow-sm h-100 d-flex flex-column">
                <img 
                  src="https://cdn.gramedia.com/uploads/items/9786024812830_Laut-Bercerita.jpg" 
                  className="card-img-top" 
                  alt="Laut Bercerita"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold">Laut Bercerita</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Leila S. Chudori</h6>
                  <p className="card-text small flex-grow-1">
                    Novel tentang perjuangan dan pengorbanan aktivis mahasiswa.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="h5 text-primary mb-0">Rp89.000</span>
                    <button type="button" className="btn btn-sm btn-outline-primary">Beli Sekarang</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Buku 5 */}
            <div className="col">
              <div className="card shadow-sm h-100 d-flex flex-column">
                <img 
                  src="https://cdn.gramedia.com/uploads/items/9786024245577_Dilan-Diaz.jpg" 
                  className="card-img-top" 
                  alt="Dilan 1990"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold">Dilan 1990</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Pidi Baiq</h6>
                  <p className="card-text small flex-grow-1">
                    Kisah cinta khas Bandung yang romantis dan lucu.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="h5 text-primary mb-0">Rp79.000</span>
                    <button type="button" className="btn btn-sm btn-outline-primary">Beli Sekarang</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Buku 6 */}
            <div className="col">
              <div className="card shadow-sm h-100 d-flex flex-column">
                <img 
                  src="https://m.media-amazon.com/images/I/71QxXv6UfjL._AC_UF1000,1000_QL80_.jpg" 
                  className="card-img-top" 
                  alt="Think and Grow Rich"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold">Think and Grow Rich</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Napoleon Hill</h6>
                  <p className="card-text small flex-grow-1">
                    Klasik pengembangan diri dan kesuksesan finansial.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="h5 text-primary mb-0">Rp69.000</span>
                    <button type="button" className="btn btn-sm btn-outline-primary">Beli Sekarang</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;