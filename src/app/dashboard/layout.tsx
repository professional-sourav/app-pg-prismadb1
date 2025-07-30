import './dashboard.css'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gray-100 text-gray-900'>{children}</body>
    </html>
  );
}
