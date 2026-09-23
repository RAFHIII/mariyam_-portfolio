import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Mariyam Rafhiya — Video Editor & Creative Media Professional',
  description: 'Portfolio of Mariyam Rafhiya (Frame_8), a video editor and creative media professional with 2 years of experience in promotional videos, event highlights, and social media campaigns.',
  icons: {
    icon: [
      { url: '/logo.jpeg', type: 'image/jpeg' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

