function Contact() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Contact</span>
        </div>
      </nav>

      {/* Content */}
      <div className="container mt-5">
        <div className="row">

          {/* Form */}
          <div className="col-md-6">
            <h3>Hubungi Kami</h3>
            <form>
              <div className="mb-3">
                <label>Nama</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>

              <div className="mb-3">
                <label>Pesan</label>
                <textarea className="form-control"></textarea>
              </div>

              <button className="btn btn-primary">Kirim</button>
            </form>
          </div>

          {/* Info */}
          <div className="col-md-6">
            <h3>Informasi</h3>
            <p>📍 Jl. Sultan Agung, Banyuwangi</p>
            <p>📞 08123456789</p>

            <iframe
              src="https://maps.google.com/maps?q=banyuwangi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              title="map"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;