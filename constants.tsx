
import React from 'react';
import { NavLink, ServiceItem, Product } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Our Promise', href: '#promise' },
  { label: 'Our Solutions', href: '#solutions' },
  { label: 'Our Story', href: '#story' },
  { label: 'What We Do', href: '#services' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'rebs',
    name: 'Real estate management ERP',
    tagline: 'Comprehensive Enterprise Control for Real Estate',
    description: 'A dedicated solution designed to streamline the complex operations of real estate development and land sales.',
    category: 'Real Estate',
    website: 'www.rebserp.com',
    modules: [
      {
        name: 'Marketing and Customer Management',
        features: ['Introducer Management', 'Manage Customer Inquiries', 'Customer Management', 'Sales Reports', 'Manage Customer Documents', 'Agreement Creation']
      },
      {
        name: 'Land Sale Operation',
        features: ['Store Land Details', 'Property Block Planning', 'Price List Management', 'Block Sales and Discounts', 'Block Inquiries', 'Reservations and Re-sale', 'Reservation Charges', 'Profit Transfers', 'Stock Balance Report', 'Branch-wise Stock Report', 'Project-wise Stock Report']
      },
      {
        name: 'Project Management',
        features: ['Create Feasibility Reports', 'Project Budgeting', 'Project Payments', 'Supplier Management', 'Transfer Internal and External Funds', 'Payment Vouchers and Cheque Printing']
      },
      {
        name: 'Sales Commission',
        features: ['Configure Commission Rates', 'Set Staff Commission Rates', 'Commission Calculation', 'Commission Reports']
      },
      {
        name: 'Work in Progress',
        features: ['Detail Dashboard', 'Department & Project Wise Tasks', 'Tasks Allocation', 'Define Task Timeline', 'Subtask Management', 'Extension and Approvals', 'Monitor Progress', 'Deadline Notifications']
      },
      {
        name: 'Loan and Collection Management',
        features: ['Schedule Loan Payments', 'Rescheduling Loan Payments', 'Early Settlements', 'Repossession', 'Recovery Management', 'Due Date Notifications', 'Arrears Report', 'Collection Report', 'Receipt Printing', 'SMS Receipts']
      },
      {
        name: 'Finance',
        features: ['General Ledger', 'Cash Book', 'Bank Reconciliation', 'Cash Advances', 'Petty Cash Management', 'Fixed Asset Management', 'Automate Depreciation/Disposal', 'Bank Loan Management', 'Tax Calculations and Reporting', 'Fuel & Phone Bill Management', 'Cheque Register', 'Receipting', 'Recurring Payments', 'Invoicing and Cheque Printing', 'Payee Management', 'Final Accounts']
      },
      {
        name: 'Equipment and Vehicle Maintenance',
        features: ['Store Vehicle & Equipment Details', 'Insurance and License Details', 'Maintenance and Service Records', 'Breakdown Records', 'Running Charts']
      },
      {
        name: 'HR Management',
        features: ['Detail Dashboard', 'Employee Management', 'Leaves and Attendance', 'Asset Allocation', 'Payroll', 'Personal Loan Management', 'Employee Appraisal', 'Event Notifications']
      },
      {
        name: 'MIS Reporting',
        features: ['Department Vise Dashboards', 'MIS Reports for Each Module']
      },
      {
        name: 'Access and Permissions',
        features: ['Email/WhatsApp/SMS Notifications', 'Unlimited Users', 'Branch Level Access', 'User Role-based Permissions']
      }
    ]
  },
  {
    id: 'cerpa',
    name: 'Production and Manufacturing ERP',
    tagline: 'Specialized ERP for Manufacturing & Construction',
    description: 'Precision lifecycle management designed for large-scale production, fabrication, and complex manufacturing operations.',
    category: 'Construction',
    website: 'www.cerpa.lk',
    modules: [
      {
        name: 'Marketing And Customer Management',
        features: ['Call sheet management', 'Customer request Management', 'Customer Management', 'Sales Target and Management', 'Customer Payment And follow-ups', 'Customer Agreements and Notification management', 'Customer document Management']
      },
      {
        name: 'Production / Construction Module',
        features: ['Quotation And BOQ management', 'Design configurations', 'Project Creation', 'Project timeline management', 'BOM and project Budget management', 'Project Progress and Inspection Management', 'Defect Management', 'Customer Complain management', 'Product Risk Assessment', 'Work Order creation and fabrication management']
      },
      {
        name: 'Inventory Management',
        features: ['MR approval and management', 'PO and Po related Service Management', 'GRN', 'Supplier Invoicing and Payment Management', 'Material transfer issue and sales management']
      },
      {
        name: 'Subcontractor Management',
        features: ['Subcontractor agreement creation', 'Task progress Vice payment allocation', 'Subcontractor evaluation', 'Subcontractor Termination', 'Advance and Final payment Management']
      },
      {
        name: 'WIP Module',
        features: ['Department, project Wise task creation', 'Employee task allocation', 'Task timeline defining', 'Subtask management and subtask allocation', 'Time extension and approvals', 'Progress management', 'Deadline notification', 'Employee wise dashboard']
      },
      {
        name: 'Finance',
        features: ['General Ledger', 'Cash Book', 'Bank Reconciliation', 'Cash Advances', 'Petty Cash Management', 'Fixed Asset Management', 'Automate Depreciation/Disposal', 'Bank Loan Management', 'Tax Calculations and Reporting', 'Fuel & Phone Bill Management', 'Cheque Register', 'Receipting', 'Recurring Payments', 'Invoicing and Cheque Printing', 'Payee Management', 'Final Accounts']
      },
      {
        name: 'Equipment and Vehicle Maintenance',
        features: ['Store Vehicle & Equipment Details', 'Insurance and License Details', 'Maintenance and Service Records', 'Breakdown Records', 'Running Charts']
      },
      {
        name: 'HR Module',
        features: ['Employee Management', 'Leave Management', 'Attendance Management', 'Company Asset Allocation', 'Payroll', 'Personal Loan Management (PAL)', 'Appraisal Management', 'Employee dashboard and event notification', 'Welfare Payment And salary Advance management']
      },
      {
        name: 'Access and Permissions',
        features: ['Unlimited Users', 'Branch Level Access', 'User Role-based Permissions']
      }
    ]
  },
  {
    id: 'gorentally',
    name: 'Rental Property Management ERP',
    tagline: 'The Ultimate Platform for Property Rentals',
    description: 'Optimized for rental property management, covering housing units, landlords, and modern tenant interaction.',
    category: 'Real Estate',
    website: 'www.gorentally.lk',
    modules: [
      {
        name: 'Property and Unit Management',
        features: ['Business Insight Dashboard', 'Record Property Details', 'Manage Parking Slots', 'List Housing Units', 'Manage Rental Applicants', 'Create Rental Applications', 'Generate Agreements', 'Property Inspections']
      },
      {
        name: 'Tenant & Operational Services',
        features: ['Manage Deliveries', 'Manage Visitors', 'Receipt Rental Payments', 'Schedule Payments', 'Record Utility Bills', 'Property Rental Reports', 'Manage Landlords', 'Manage Landlord Payments', 'Customer Task Requests']
      },
      {
        name: 'Jobs and Maintenance',
        features: ['Create Job for Tasks', 'Schedule Tasks', 'Create Work Orders', 'Manage Suppliers', 'Supplier Invoicing', 'Generate Payment Vouchers']
      },
      {
        name: 'Finance and System',
        features: ['Bank Reconciliation', 'Accounting Reports', 'Manage System Users', 'Manage User Permissions', 'Customisable Configurations', 'User Notifications', 'Send Customer Emails', 'SMS Messaging', 'Push Notifications', 'Mobile App for Customers']
      }
    ]
  },
  {
    id: 'microfinance',
    name: 'Micro finance management',
    tagline: 'Empowering Small-Scale Financial Systems',
    description: 'A specialized platform for the microfinance sector, prioritizing collection efficiency and portfolio transparency.',
    category: 'Finance',
    website: 'www.efserp.com',
    modules: [
      {
        name: 'Lending Operations',
        features: ['Loan Application & Processing', 'Credit Evaluation & Scoring', 'Disbursement Management', 'Repayment Scheduling', 'Rescheduling & Settlements']
      },
      {
        name: 'Recovery & Collections',
        features: ['Real-time Collection Tracking', 'Arrears Management', 'Recovery Action Tracking', 'SMS Receipting', 'Portfolio Quality Reports (PAR)']
      },
      {
        name: 'Member Accounts',
        features: ['Savings Management', 'Fixed Deposits', 'Interest Calculations', 'Withdrawal Processing', 'Member Profile Management']
      },
      {
        name: 'Core Financials',
        features: ['General Ledger Integration', 'Cash Flow Analysis', 'MIS Dashboards', 'Multi-branch Support', 'Audit Logs']
      }
    ]
  },
  {
    id: 'inventory-pos',
    name: 'Inventory and POS system',
    tagline: 'Modern Retail & Inventory Control',
    description: 'Fast, reliable, and detailed retail management for high-velocity sales environments.',
    category: 'Retail',
    website: 'sellsmart.beit.lk',
    modules: [
      {
        name: 'Point of Sale (POS)',
        features: ['Fast Checkout Interface', 'Barcode/QR Scanning', 'Multi-payment Support', 'E-receipts & Thermal Printing', 'Offline Sales Mode']
      },
      {
        name: 'Inventory Control',
        features: ['Multi-location Stock Tracking', 'Low Stock Alerts', 'Stock Adjustment & Write-offs', 'Batch/Serial Number Tracking', 'Stock Transfer Management']
      },
      {
        name: 'Purchasing & SRM',
        features: ['Supplier Relationship Management', 'Purchase Order Workflow', 'Goods Received Note (GRN)', 'Supplier Credit Tracking']
      },
      {
        name: 'Sales Analytics',
        features: ['Real-time Sales Dashboards', 'Product Performance Analysis', 'Daily/Monthly Profit Reports', 'Loyalty & Discount Schemes']
      }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'evaluation',
    title: 'Evaluation & Selection',
    description: 'Comprehensive ERP evaluation, selection, and implementation tailored to your scale and objectives.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'modernisation',
    title: 'Customisation & Modernisation',
    description: 'Expert ERP customisation and modernisation to align legacy systems with current operational realities.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 'government',
    title: 'Public-Sector Systems',
    description: 'Specialized government ERP frameworks and enterprise systems designed for public-sector complexities.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 'reengineering',
    title: 'Business Re-engineering',
    description: 'Deep business process analysis and re-engineering to ensure enterprise systems actually work.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    id: 'integration',
    title: 'Systems Integration',
    description: 'Seamless systems integration and data consolidation to provide a single source of truth.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    id: 'optimisation',
    title: 'Stabilisation & Optimisation',
    description: 'ERP stabilisation and post-implementation optimisation to ensure long-term ROI and operational clarity.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];
