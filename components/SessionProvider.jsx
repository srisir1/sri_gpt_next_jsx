'use client'

import { SessionProvider as Provider } from 'next-auth/react';
export function SessionProvider({ children, session }) {
    return (
        <Provider>
            {children}
        </Provider>
    )
}