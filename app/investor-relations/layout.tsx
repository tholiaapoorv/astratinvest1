import type { Metadata } from "next"; 
export const metadata: Metadata = { title: 'Investor Relations' }; 
export default function Layout({ children }: { children: React.ReactNode }) { 
    return <>{children}</>; 
}