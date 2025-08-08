import './globals.css'
import PrelineScriptWrapper from './../components/PrelineScriptWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gray-100 text-gray-900'>{children}</body>
      <PrelineScriptWrapper />
    </html>
  );
}
