const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Krunal Patel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;