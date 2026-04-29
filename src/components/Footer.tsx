export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0E0C08' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 pb-4 border-b" style={{ borderColor: '#1A1610' }}>
          <p className="text-sm" style={{ color: '#3A3028' }}>
            Марина Панайотова — психотерапевт
          </p>
          <p className="text-sm" style={{ color: '#2A2018' }}>
            © {new Date().getFullYear()}
          </p>
        </div>
        <p className="text-sm text-center" style={{ color: '#3A3028' }}>
          Сайтът е изготвен от{' '}
          <a
            href="https://avltechsolutions.org"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            style={{ color: '#4A3A28' }}
          >
            AVL Tech Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
