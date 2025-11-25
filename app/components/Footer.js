export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">CrowdFund</div>
        <div className="footer-meta">
          © {new Date().getFullYear()} CrowdFund. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
