import './style.css'

export default function Footer() {
  return (
    <footer className="mt-5 footer">
      <p className="text-center text-light">
        Handcrafted &nbsp;with &nbsp;much &nbsp;<span className="fs-3">☕</span>&nbsp; and
        &nbsp; <span className="fs-3">❤️</span> by &nbsp;
        <a
          href="https://sacv-portfolio.web.app/"
          target="_Blank"
          className="text-light"
          rel="noreferrer"
        >
            SERGIO CAMPBELL DEV
        </a>&nbsp; using &nbsp;
        <a
          href="https://es.reactjs.org/"
          target="_Blank"
          className="text-light"
          rel="noreferrer"
        >
          <span className="fs-3">⚛️,</span>
        </a>
        &nbsp; &nbsp;stylized &nbsp;with &nbsp;
        <a
          href="https://getbootstrap.com/"
          target="_Blank"
          className="text-light"
          rel="noreferrer"
        >
          <span className="fs-3">🅱️</span>
        </a>
        &nbsp; and &nbsp;deploy &nbsp;in &nbsp;
        <a
          href="https://firebase.google.com/"
          target="_Blank"
          className="text-light"
          rel="noreferrer"
        >
          <span className="fs-3">🔥</span>
        </a>
      </p>
    </footer>
  );
}
