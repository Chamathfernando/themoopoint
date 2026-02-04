
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Module {
  name: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  website?: string;
  category: 'ERP' | 'Finance' | 'Retail' | 'Real Estate' | 'Construction';
  modules: Module[];
}
