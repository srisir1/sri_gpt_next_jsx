import './globals.css'

import { SessionProvider } from '../components/SessionProvider';
import Sidebar from '../components/Sidebar';
import ToastProvider from '../components/ClientProvide';

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          <SessionProvider>
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
