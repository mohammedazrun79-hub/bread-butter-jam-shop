export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">About Us</h4>
            <p className="text-gray-400">Fresh bread, butter, and jam delivered to your doorstep.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/cart" className="hover:text-white">Cart</a></li>
              <li><a href="/auth/login" className="hover:text-white">Login</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <p className="text-gray-400">Email: support@breadbutterjam.com</p>
            <p className="text-gray-400">Phone: +1-800-BREAD-JAM</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Bread, Butter & Jam Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}