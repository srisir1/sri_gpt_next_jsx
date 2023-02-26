import './globals.css'

import { SessionProvider } from '../components/SessionProvider';
import Sidebar from '../components/Sidebar';
import ToastProvider from '../components/ClientProvide';
import { getServerSession } from 'next-auth';
import authOptions from '../pages/api/auth/[...nextauth]';

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          <SessionProvider session={session}>
            <div className='flex'>
              <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                <Sidebar />
              </div>
              <div className='bg-[#343541] flex-1'>
                {children}
                <ToastProvider />
              </div>
            </div>
          </SessionProvider >
        </main>
      </body>
    </html>
  )
}
