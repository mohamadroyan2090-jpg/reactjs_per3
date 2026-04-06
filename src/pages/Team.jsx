function Team() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Team Kami</span>
        </div>
      </nav>

      {/* Content */}
      <div className="container mt-5">
        <div className="row text-center">

          <div className="col-md-4">
            <div className="card shadow">
              <img src="https://via.placeholder.com/200" className="card-img-top" alt="Royan" />
              <div className="card-body">
                <h5>Mohamad Royan</h5>
                <p>Backend Developer</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <img src="https://via.placeholder.com/200" className="card-img-top" alt="Febi" />
              <div className="card-body">
                <h5>Febi</h5>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <img src="https://via.placeholder.com/200" className="card-img-top" alt="Septa" />
              <div className="card-body">
                <h5>Septa</h5>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Team;