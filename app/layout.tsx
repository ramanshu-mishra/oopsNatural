import '../styles/globals.css';



export const metadata = {
  title: 'Ops Natural Spices & Food',
  description: 'स्वाद जो ले आये माँ के हाथों की याद - Ops Natural.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className=''>
      <body className=' flex flex-col '>{children}</body>
    </html>
  );
}
