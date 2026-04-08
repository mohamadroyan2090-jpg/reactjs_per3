function Team() {
  const team = [
    { 
      id: 1, 
      name: "Royan", 
      role: "Frontend Developer", 
      image: "https://i.pravatar.cc/150?img=1",
      bio: "Ahli dalam React dan UI/UX, pecinta kopi dan kode.",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    { 
      id: 2, 
      name: "Febi", 
      role: "Backend Developer", 
      image: "https://i.pravatar.cc/150?img=2",
      bio: "Spesialis database dan API, suka tantangan teknis.",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    { 
      id: 3, 
      name: "Rehan", 
      role: "UI/UX Designer", 
      image: "https://i.pravatar.cc/150?img=3",
      bio: "Mendesain pengalaman pengguna yang indah dan intuitif.",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-3">👥 Our Team</h2>
        <p className="text-center text-muted mb-5">Kami adalah tim yang berdedikasi untuk memberikan yang terbaik</p>
        
        <div className="row text-center">
          {team.map((member) => (
            <div className="col-md-4 mb-4" key={member.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <img 
                    src={member.image} 
                    className="rounded-circle mb-3 border border-3 border-primary" 
                    alt={member.name}
                    width="150" 
                    height="150"
                    style={{ objectFit: "cover" }}
                  />
                  <h5 className="fw-bold">{member.name}</h5>
                  <p className="text-primary">{member.role}</p>
                  <p className="text-muted small">{member.bio}</p>
                  <div className="social-links mt-3">
                    <a href={member.social.twitter} className="me-3 text-decoration-none text-secondary">🐦 Twitter</a>
                    <a href={member.social.linkedin} className="me-3 text-decoration-none text-secondary">💼 LinkedIn</a>
                    <a href={member.social.github} className="text-decoration-none text-secondary">💻 GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;