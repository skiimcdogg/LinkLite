import "./About.css";

function About() {
  return (
    <div className="about__container">
      <h1 className="about__title">About LinkLite</h1>
      <p className="about__text">
        Hi, I’m Antoine, and I built LinkLite to practice and have fun while
        honing my backend development skills. I've always been interested in
        learning how to secure and optimize web applications, and what better
        way to experiment than with a URL shortener?
      </p>
      <h3 className="about__sub-title">My main goals were to:</h3>
      <ul className="about__list">
        <li>Create solid, clean and secure backend using Django/Python.</li>
        <li>Implement email verification to ensure user security.</li>
        <li>Use tokens to handle secure authentication and request.</li>
      </ul>
      <h3 className="about__sub-title">Technologies used:</h3>
      <ul className="about__list">
        <li>
          <span className="about__span">Backend</span>: Django,
          DRF (Python) and Postgresql
        </li>
        <li>
          <span className="about__span">Security</span>:
          Token-based authentication and email verification
        </li>
        <li>
        <span className="about__span">Frontend</span>: React,
          Tailwindcss
        </li>
        <li>
        <span className="about__span">Deployment</span>: The application is deployed using Docker Compose, with an Nginx image serving the frontend, hosted on Gandi.
        </li>
      </ul>
      <p className="about__text">
        You can also find me on LinkedIn, where I’ve shared more details about
        this project, including a test account you can use to explore the app:
      </p>
      <ul className="about__list">
        <li>
          <a
            href="https://www.linkedin.com/in/antoine-stouff/"
            target="_blank"
            rel="noopener noreferrer"
            className="about__link"
          >
            My LinkedIn post for more details
          </a>
        </li>
      </ul>
      <p className="about__text">
        Feel free to reach me out:
      </p>
      <ul className="about__list">
        <li>
          <a
            href="https://www.antoinestouff.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neonBlue"
          >
            My portfolio
          </a>
        </li>
        <li><span className="about__span">Email</span>: antoine.stouff78500@gmail.com</li>
      </ul>
    </div>
  );
}

export default About;
