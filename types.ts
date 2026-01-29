
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  // Use React.ReactNode to allow passing SVG or other components as icons
  icon: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}