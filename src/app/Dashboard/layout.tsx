'use client';
import React from 'react';
import Sidebar from './SideBar/SideBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
    </div>
  );
}