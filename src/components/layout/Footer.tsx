export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-bg-tertiary">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} Jordan Barhoumeh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
