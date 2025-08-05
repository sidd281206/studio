export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Siddharth Shinde. All rights reserved.</p>
      </div>
    </footer>
  );
}
