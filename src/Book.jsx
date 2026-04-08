function Book() {
  const books = [
    { id: 1, title: "Atomic Habits", author: "James Clear", price: 89000, image: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg" },
    { id: 2, title: "Ikigai", author: "Héctor García", price: 75000, image: "https://m.media-amazon.com/images/I/81lz2GjMJyL._AC_UF1000,1000_QL80_.jpg" },
    { id: 3, title: "The Psychology of Money", author: "Morgan Housel", price: 95000, image: "https://m.media-amazon.com/images/I/81beUky0qYL._AC_UF1000,1000_QL80_.jpg" },
    { id: 4, title: "Laut Bercerita", author: "Leila S. Chudori", price: 89000, image: "https://cdn.gramedia.com/uploads/items/9786024812830_Laut-Bercerita.jpg" },
    { id: 5, title: "Dilan 1990", author: "Pidi Baiq", price: 79000, image: "https://cdn.gramedia.com/uploads/items/9786024245577_Dilan-Diaz.jpg" },
    { id: 6, title: "Think and Grow Rich", author: "Napoleon Hill", price: 69000, image: "https://m.media-amazon.com/images/I/71QxXv6UfjL._AC_UF1000,1000_QL80_.jpg" },
    { id: 7, title: "The 7 Habits", author: "Stephen Covey", price: 99000, image: "https://picsum.photos/300/200?random=7" },
    { id: 8, title: "Deep Work", author: "Cal Newport", price: 85000, image: "https://picsum.photos/300/200?random=8" },
    { id: 9, title: "Start With Why", author: "Simon Sinek", price: 78000, image: "https://picsum.photos/300/200?random=9" },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">📚 Koleksi Buku Kami</h1>
      <p className="text-center text-muted mb-5">Temukan berbagai buku inspiratif untuk mengubah hidup Anda</p>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <div className="card h-100 shadow-sm">
              <img 
                src={book.image} 
                className="card-img-top" 
                alt={book.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <p className="card-text small text-secondary flex-grow-1">
                  Buku inspiratif tentang pengembangan diri dan kesuksesan.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h5 text-primary mb-0">Rp{book.price.toLocaleString()}</span>
                  <button className="btn btn-sm btn-primary">
                    <i className="fa-solid fa-cart-shopping me-1"></i>
                    Beli
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;