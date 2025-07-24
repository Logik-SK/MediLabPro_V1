// src/config/routePageConfig.js

import {
  faBookOpen, faUser, faUserDoctor, faUserTie, faCalendarAlt, faHeartbeat,
  faCreditCard, faIndianRupeeSign, faFlask, faEnvelopeOpenText, faBoxOpen,
  faShoppingCart, faUsers, faCalculator, faChartBar, faCog, faBullhorn,
  faSignOutAlt,
  faHospitalUser,
  faCalendarCheck,
  faUserCheck,
  faNotesMedical,
  faFilePrescription,
  faFileInvoiceDollar,
  faReply
} from '@fortawesome/free-solid-svg-icons';

export const routePageConfig = [
  {
    section: "Front Desk",
    items: [
      {
        label: "Billing (B2C)",
        path: "/billing",
        icon: faBookOpen,
        page: "LabBillingPage",
        subItems: [
          {
            label: "New Billing",
            path: "/billing/patient",
            icon: faBookOpen,
            page: "LabBillingPage"
          },
          {
            label: "Manage Bills",
            path: "/billing/manage",
            icon: faBookOpen,
            page: "LabBillingManagePage"
          },
          {
            label: "Manage Sample",
            path: "/billing/manage-sample",
            icon: faBookOpen,
            page: "LabBillingManageSamplePage"
          }
        ]
      },
      {
        label: "Patient",
        path: "/patients",
        icon: faUser,
        page: "PatientPage"
      },
      {
        label: "Referral Doctor",
        path: "/referral-doctor",
        icon: faUserDoctor,
        page: null,
        subItems: [
          {
            label: "Manage Doctors",
            path: "/referral-doctor/manage",
            icon: faUserTie,
            page: "ReferralDoctorManagePage"
          },
          {
            label: "Doctors IP Directory",
            path: "/referral-doctor/ip-directory",
            icon: faUserTie,
            page: "ReferralDoctorIPPage"
          },
          {
            label: "Account Checklist",
            path: "/referral-doctor/account-checklist",
            icon: faUserTie,
            page: "ReferralDoctorAccountChecklistPage"
          }
        ]
      },
      {
        label: "Agent",
        path: "/agent",
        icon: faUserTie,
        page: null,
        subItems: [
          {
            label: "Add Agent",
            path: "/agent/add",
            icon: faUserTie,
            page: "AgentAddPage"
          },
          {
            label: "View Agents",
            path: "/agent/list",
            icon: faUserTie,
            page: "AgentListPage"
          }
        ]
      },
      {
        label: "Appointment",
        path: "/appointment",
        icon: faCalendarAlt,
        page: null,
        subItems: [
          {
            label: "New Appointment",
            path: "/appointment/new",
            icon: faCalendarAlt,
            page: "NewAppointmentPage"
          },
          {
            label: "Manage Appointments",
            path: "/appointment/manage",
            icon: faCalendarAlt,
            page: "ManageAppointmentsPage"
          }
        ]
      },
      {
        label: "OPD",
        path: "/opd",
        icon: faHospitalUser,
        page: "null",
        subItems: [
          {
            label: "Manage Appointments",
            path: "/opd/appointments",
            icon: faCalendarCheck,
            page: "ManageAppointmentsPage"
          },
          {
            label: "Patient Check-In",
            path: "/opd/check-in",
            icon: faUserCheck,
            page: "PatientCheckInPage"
          },
          {
            label: "Consultation Notes",
            path: "/opd/notes",
            icon: faNotesMedical,
            page: "ConsultationNotesPage"
          },
          {
            label: "Prescription Logs",
            path: "/opd/prescriptions",
            icon: faFilePrescription,
            page: "PrescriptionLogsPage"
          },
          {
            label: "OPD Billing",
            path: "/opd/billing",
            icon: faFileInvoiceDollar,
            page: "OpdBillingPage"
          },
          {
            label: "Follow-Up Schedule",
            path: "/opd/follow-up",
            icon: faReply,
            page: "OpdFollowUpPage"
          }
        ]
      },

      {
        label: "CC Section (B2B)",
        path: "/cc-section",
        icon: faCreditCard,
        page: "CCSectionPage"
      },
      {
        label: "Reception Cash",
        path: "/reception-cash",
        icon: faIndianRupeeSign,
        page: "ReceptionCashPage"
      }
    ]
  },
  {
    section: "Lab Desk",
    items: [
      {
        label: "Clinical Master",
        path: "/lab/clinical-master",
        icon: faFlask,
        page: "ClinicalMasterPage"
      },
      {
        label: "Lab Test Report",
        path: "/lab/test-report",
        icon: faEnvelopeOpenText,
        page: "LabTestReportPage"
      }
    ]
  },
  {
    section: "Account Desk",
    items: [
      {
        label: "Products",
        path: "/accounts/products",
        icon: faBoxOpen,
        page: "ProductsPage"
      },
      {
        label: "Purchase",
        path: "/accounts/purchase",
        icon: faShoppingCart,
        page: null,
        subItems: [
          {
            label: "Add Purchase",
            path: "/accounts/purchase/add",
            icon: faShoppingCart,
            page: "AddPurchasePage"
          },
          {
            label: "Purchase History",
            path: "/accounts/purchase/history",
            icon: faShoppingCart,
            page: "PurchaseHistoryPage"
          }
        ]
      },
      {
        label: "HR",
        path: "/accounts/hr",
        icon: faUsers,
        page: "HRPage"
      },
      {
        label: "Finance",
        path: "/accounts/finance",
        icon: faCalculator,
        page: null,
        subItems: [
          {
            label: "Ledger",
            path: "/accounts/finance/ledger",
            icon: faCalculator,
            page: "LedgerPage"
          },
          {
            label: "Invoices",
            path: "/accounts/finance/invoices",
            icon: faCalculator,
            page: "InvoicesPage"
          }
        ]
      }
    ]
  },
  {
    section: "Data Analysis",
    items: [
      {
        label: "Reports",
        path: "/analysis/reports",
        icon: faChartBar,
        page: null,
        subItems: [
          {
            label: "Daily Reports",
            path: "/analysis/reports/daily",
            icon: faChartBar,
            page: "DailyReportsPage"
          },
          {
            label: "Monthly Summary",
            path: "/analysis/reports/monthly",
            icon: faChartBar,
            page: "MonthlySummaryPage"
          }
        ]
      },
      {
        label: "Graph",
        path: "/analysis/graphs",
        icon: faChartBar,
        page: "GraphPage"
      }
    ]
  },
  {
    section: "Admin Desk",
    items: [
      {
        label: "Master Settings",
        path: "/admin/settings",
        icon: faCog,
        page: "MasterSettingsPage"
      },
      {
        label: "Marketing",
        path: "/admin/marketing",
        icon: faBullhorn,
        page: null,
        subItems: [
          {
            label: "Campaigns",
            path: "/admin/marketing/campaigns",
            icon: faBullhorn,
            page: "CampaignsPage"
          },
          {
            label: "Leads",
            path: "/admin/marketing/leads",
            icon: faBullhorn,
            page: "LeadsPage"
          }
        ]
      },
      {
        label: "Subscription",
        path: "/admin/subscription",
        icon: faUser,
        page: "SubscriptionPage"
      }
    ]
  },
  {
    section: "Logout",
    items: [
      {
        label: "Logout",
        path: "/logout",
        icon: faSignOutAlt,
        page: "LogoutPage"
      }
    ]
  }
];

export function getPathByLabel(label) {
  for (const section of routePageConfig) {
    for (const item of section.items) {
      if (item.label === label) {
        return item.path;
      }

      if (item.subItems && item.subItems.length > 0) {
        for (const subItem of item.subItems) {
          if (subItem.label === label) {
            return subItem.path;
          }
        }
      }
    }
  }
  return undefined;
}
