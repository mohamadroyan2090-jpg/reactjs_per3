import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.name}! Pesan Anda telah terkirim.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-3">📞 Contact Us</h2>
        <p className="text-center text-muted mb-5">Ada pertanyaan? Hubungi kami!</p>
        
        <div className="row">
          {/* Form Kontak */}
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h5 className="mb-3">Kirim Pesan</h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nama Lengkap</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Pesan</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      rows="4" 
                      placeholder="Tulis pesan Anda di sini..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    <i className="fa-regular fa-paper-plane me-2"></i>
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Info & Map */}
          <div className="col-md-6">
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <h5 className="mb-3">Informasi Kontak</h5>
                <div className="mb-3">
                  <p className="mb-2">📍 <strong>Alamat:</strong> Banyuwangi, Jawa Timur, Indonesia</p>
                  <p className="mb-2">📞 <strong>Telepon:</strong> 0812-3456-7890</p>
                  <p className="mb-2">📧 <strong>Email:</strong> bookstore@gmail.com</p>
                  <p>🕒 <strong>Jam Operasional:</strong> Senin - Jumat (09:00 - 17:00)</p>
                </div>
              </div>
            </div>
            
            <div className="card shadow-sm">
              <div className="card-body p-0">
                <iframe
                  src="https://www.google.com/maps?q=Banyuwangi&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;