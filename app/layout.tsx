import type { Metadata } from 'next';
import '@/index.css';

export const metadata: Metadata = {
    title: 'ZifyBot Landing Page',
    description: 'Design Complete Landing Page',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
