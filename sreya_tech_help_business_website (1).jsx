<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tech With Sreya</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #faf7f2;
      color: #2b2b2b;
    }

    header {
      padding: 80px 20px;
      text-align: center;
      background: linear-gradient(135deg, #f7eee4, #efe4ff);
    }

    h1 {
      font-size: 48px;
      margin-bottom: 10px;
    }

    h1 span {
      color: #8b5cf6;
    }

    p {
      max-width: 700px;
      margin: 10px auto;
      font-size: 18px;
      line-height: 1.6;
    }

    .btn {
      display: inline-block;
      margin: 10px;
      padding: 12px 20px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: bold;
    }

    .primary {
      background: #8b5cf6;
      color: white;
    }

    .secondary {
      background: white;
      border: 1px solid #ddd;
      color: #333;
    }

    section {
      padding: 60px 20px;
      max-width: 1000px;
      margin: auto;
    }

    .services {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    .about {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      align-items: center;
    }

    .about img {
      width: 300px;
      border-radius: 20px;
    }

    footer {
      text-align: center;
      padding: 40px;
      font-size: 14px;
      color: #777;
    }

    .contact {
      background: #8b5cf6;
      color: white;
      text-align: center;
      border-radius: 20px;
      padding: 40px;
    }

    a {
      color: inherit;
    }
  </style>
</head>
<body>

<header>
  <h1>Tech With <span>Sreya</span></h1>
  <p>
    Helping you feel confident using technology — from emails and phones to resumes,
    social media, and everyday digital life.
  </p>
  <a class="btn primary" href="mailto:ssreya@umich.edu">Contact Me</a>
  <a class="btn secondary" href="#services">View Services</a>
</header>

<section id="services">
  <h2 style="text-align:center;">Services</h2>
  <div class="services">
    <div class="card">
      <h3>💻 Tech Support</h3>
      <p>Email setup, phone help, storage cleanup, passwords, and basic troubleshooting.</p>
    </div>
    <div class="card">
      <h3>📄 Resume Help</h3>
      <p>Resumes, LinkedIn profiles, job applications, and interview prep.</p>
    </div>
    <div class="card">
      <h3>🎨 Graphic Design</h3>
      <p>Flyers, social posts, invitations, and simple branding materials.</p>
    </div>
    <div class="card">
      <h3>📱 Social Media</h3>
      <p>Account setup, posting help, and content guidance.</p>
    </div>
    <div class="card">
      <h3>🇫🇷 French Tutoring</h3>
      <p>Beginner-friendly French lessons and practice support.</p>
    </div>
    <div class="card">
      <h3>✨ Personalized Help</h3>
      <p>One-on-one support tailored to your exact needs.</p>
    </div>
  </div>
</section>

<section class="about">
  <img src="Sreya.png" alt="Sreya" />
  <div>
    <h2>About Me</h2>
    <p>
      I graduated from the University of Michigan in 2024 with a BA in Marketing & Communications
      and currently work at Wayfair as a Marketing Associate.
    </p>
    <p>
      I love helping people understand technology in a simple, patient, and stress-free way.
      Once you learn the basics, everything becomes much easier — and I enjoy making that process fun and approachable.
    </p>
  </div>
</section>

<section class="contact">
  <h2>Get In Touch</h2>
  <p>Email: ssreya@umich.edu</p>
  <p>Phone: 734-972-1584</p>
</section>

<footer>
  © 2025 Tech With Sreya • Built with care 💜
</footer>

</body>
</html>
