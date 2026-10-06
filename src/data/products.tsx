import React from "react";
import { IconType } from "react-icons";
import {
  RiArchiveLine,
  RiCalculatorLine,
  RiDashboardLine,
  RiDeviceLine,
  RiIdCardLine,
  RiP2pLine,
  RiInformationLine,
  RiBillLine,
  RiBankCardLine,
  RiCalendarEventLine,
} from "react-icons/ri";

export interface Feature {
  icon: IconType;
  label: string;
}

export interface Product {
  id: string;
  tabLabel: string;
  headingTitle: React.ReactNode;
  highlightTitle: string;
  description: string;
  demoUrl: string;
  imageSrc: string;
  imageAlt: string;
  features: Feature[];
}

export const productsData: Product[] = [
  {
    id: "juno-pos",
    tabLabel: "Juno POS",
    headingTitle: (
      <>
        Juno <span className="text-brand-red">Point of Sales</span>
      </>
    ),
    highlightTitle:
      "The Most Comprehensive & Cost-Effective Retail Management Ecosystem in Indonesia.",
    description:
      "Juno is more than just a point of sale it's the operational hub for your growing business. Built for speed and reliability, Juno seamlessly synchronizes your daily transactions, multi-branch inventory, and financial reporting. Pre-integrated with leading payment gateways and logistics platforms, we provide an enterprise-grade retail experience designed to scale with your operations.",
    demoUrl: "https://www.junopos.com",
    imageSrc: "/assets/products/junopos.webp",
    imageAlt: "Juno POS",
    features: [
      { icon: RiP2pLine, label: "Multi-Branch Synchronization" },
      { icon: RiCalculatorLine, label: "Automated Tax Calculation" },
      { icon: RiIdCardLine, label: "Staff & Access Role Management" },
      { icon: RiDashboardLine, label: "Built-in CRM & Loyalty" },
      { icon: RiArchiveLine, label: "Real-time Inventory & Pricing" },
      { icon: RiDeviceLine, label: "Omnichannel & Multi-Device Support" },
    ],
  },
  {
    id: "wellspring-peoples",
    tabLabel: "Wellspring People's",
    headingTitle: (
      <>
        Wellspring <span className="text-brand-red">People’s</span>
      </>
    ),
    highlightTitle: "A Digital Home for the Wellspring Community.",
    description:
      "A unified portal for residents to access neighborhood updates, track maintenance bills (IPL), complete seamless digital payments, and stay updated on upcoming community events. Fostering a safe, comfortable, clean, and connected neighborhood ecosystem.",
    demoUrl: "https://wellspring.amayaperdana.id",
    imageSrc: "/assets/products/wellspring.webp",
    imageAlt: "Wellspring People's",
    features: [
      { icon: RiInformationLine, label: "Community Info & Guidelines" },
      { icon: RiBillLine, label: "IPL Billing Details & History" },
      { icon: RiBankCardLine, label: "Seamless Online IPL Payment" },
      { icon: RiCalendarEventLine, label: "Upcoming Events & Schedules" },
    ],
  },
];
