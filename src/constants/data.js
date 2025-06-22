import { MdBattery5Bar } from "react-icons/md";
import { FaDna } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";
import { GiIceCube } from "react-icons/gi";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaRobot } from "react-icons/fa6";
import { GiReactor } from "react-icons/gi";
import { FaInfinity } from "react-icons/fa6";
import circle from "../assets/circle.jpg";
import chamber from "../assets/chamber.jpg";
import connectors from "../assets/connectors.jpg";
import rings from "../assets/rings.jpg";
import hero from "../assets/hero.jpg";
import cores from "../assets/cores.jpg";

export const capabilities = [
    {
        icon: MdBattery5Bar,
        title: "Infinite Quantum Output",
        text: "Harness the limitless power of quantum energy. The Corevion generates an uninterrupted flow of energy, capable of powering entire cities, all within a compact system. By tapping into quantum singularity, the Core achieves infinite output, forever adapting to growing energy demands.",
        iconColor: "var(--greenColor)",
        borderColor: "var(--greenColorBorder)",
        shadow: "var(--cardShadowGreen)",
        hoverShadow: "var(--cardShadowGreenHover)",
        scale: 1.05
    },
    {
        icon: FaDna,
        title: "Self-Stabilizing Fusion Ring",
        text: "A cutting-edge fusion system that stabilizes itself in real-time. The Self-Stabilizing Fusion Ring uses advanced AI to monitor and control its own internal dynamics, ensuring that the fusion reaction remains balanced, even under extreme conditions. No external stabilization systems required—ever.",
        iconColor: "var(--purpleColor)",
        borderColor: "var(--purpleColorBorder)",
        shadow: "var(--cardShadowPurple)",
        hoverShadow: "var(--cardShadowPurpleHover)",
        scale: 1.05
    },
    {
        icon: FaBrain,
        title: "AI-Guided Containment System",
        text: "An intelligent containment structure, driven by a powerful AI. The AI-Guided Containment System ensures that the Corevion's energy remains securely contained within its core structure. Through continuous data analysis, it self-adjusts to fluctuations, preventing energy leakage or system malfunctions.",
        iconColor: "var(--pinkColor)",
        borderColor: "var(--pinkColorBorder)",
        shadow: "var(--cardShadowPink)",
        hoverShadow: "var(--cardShadowPinkHover)",
        scale: 1.05
    },
    {
        icon: GiIceCube,
        title: "Cryo-Thermal Heat Regulation",
        text: "The Corevion operates at extreme temperatures, but with its Cryo-Thermal Heat Regulation, overheating is never a problem. Using an advanced thermal management system, the Core maintains optimal temperature levels by efficiently dissipating heat while simultaneously absorbing extreme cold—allowing the Core to run continuously without external cooling.",
        iconColor: "var(--cyanColor)",
        borderColor: "var(--cyanColorBorder)",
        shadow: "var(--cardShadowCyan)",
        hoverShadow: "var(--cardShadowCyanHover)",
        scale: 1.05
    },

]

export const comparison = [
    {
        label: "Output Yield:",
        icon: FaFireFlameCurved,
        corevion: "Extreme",
        standard: "Moderate"
    },
    {
        label: "Stability:",
        icon: FaCheck,
        corevion: "Quantum Locked",
        standard: "Fluctuating"
    },
    {
        label: "Size:",
        icon: GiIceCube,
        corevion: "Compact",
        standard: "Bulky"
    },
    {
        label: "Cooling Required:",
        icon: IoMdClose,
        corevion: "None",
        standard: "External Systems"
    },
    {
        label: "Ai Integration:",
        icon: FaRobot,
        corevion: "Neutral Containment System",
        standard: "Absent"
    },
    {
        label: "Energy Source:",
        icon: GiReactor,
        corevion: "Singularity Reactor",
        standard: "Conventional Battery"
    },
    {
        label: "Longevity:",
        icon: FaInfinity,
        corevion: "Infinite Lifecycle",
        standard: "3-5 years lifespan"
    },
]

export const products = [
  {
    id: 0,
    image: hero,
    title: "COREVION CORE",
    price: "₿0.872",
    subheading: "Quantum Power Module",
    text: "The Corevion Core is engineered for zero-latency quantum output, maintaining atomic cohesion across unstable environments. Designed with next-gen lattice shielding and a fully self-regulating stabilizer core, it's ready for autonomous deployment.",
    bullets: [
      "Quantum-linked feedback array",
      "Self-calibrating modulator coils",
      "Flux-insulated inner chassis"
    ],
    specs: [
      {
        label: "Output Frequency",
        value: "13.6 Hz"
      },
      {
        label: "Stabilization",
        value: "AI-Aided"
      },
      {
        label: "Dimensions",
        value: "480×330×120 mm"
      },
      {
        label: "Energy Tier",
        value: "Class-Z Level 3"
      }
    ]
  },
  {
    id: 1,
    image: connectors,
    title: "COREVION CORE X",
    price: "₿0.945",
    subheading: "Enhanced Stabilization Node",
    text: "Core X pushes the limits of autonomous deployment with hyper-coherence feedback layers and dual-phase shielding. Optimized for deep-range, multi-node alignment across harsh-field conditions.",
    bullets: [
      "Dual-phase flux shield",
      "Hyper-coherence feedback array",
      "Phase-tuned quantum mesh"
    ],
    specs: [
      {
        label: "Output Frequency",
        value: "14.9 Hz"
      },
      {
        label: "Stabilization",
        value: "Autonomous (Multi-node)"
      },
      {
        label: "Dimensions",
        value: "510×340×130 mm"
      },
      {
        label: "Energy Tier",
        value: "Class-Z Level 4"
      }
    ]
  },
  {
    id: 2,
    image: circle,
    title: "CONTAINMENT DOCK",
    price: "₿0.343",
    subheading: "Stasis Containment Bay",
    text: "The Containment Dock ensures low-leakage, high-fidelity modular storage for active cores or volatile elements. Adaptive cradle mounts adjust to tier specifications in real-time.",
    bullets: [
      "Multi-tier dynamic stasis cradles",
      "Anti-flux external shielding",
      "Volatile-readiness protocol"
    ],
    specs: [
      {
        label: "Capacity",
        value: "2 Active Cores"
      },
      {
        label: "Containment Mode",
        value: "Tier-Variable"
      },
      {
        label: "Dimensions",
        value: "400×310×150 mm"
      },
      {
        label: "Energy Tier",
        value: "Passive Support"
      }
    ]
  },
  {
    id: 3,
    image: cores,
    title: "COREVION CORE S",
    price: "₿0.798",
    subheading: "Compact Power Unit",
    text: "Core S delivers Corevion-grade stability in a more compact housing. Ideal for modular grid builds and Tier-2 runtime operations, without sacrificing precision.",
    bullets: [
      "Reduced-form lattice shield",
      "Tier-2 optimized stabilizer",
      "Fast-swap modular anchors"
    ],
    specs: [
      {
        label: "Output Frequency",
        value: "12.4 Hz"
      },
      {
        label: "Stabilization",
        value: "Tier-2 Active"
      },
      {
        label: "Dimensions",
        value: "380×290×110 mm"
      },
      {
        label: "Energy Tier",
        value: "Class-Y Level 2"
      }
    ]
  },
  {
    id: 4,
    image: rings,
    title: "COREVION BEACON",
    price: "₿0.289",
    subheading: "Quantum Signal Emitter",
    text: "Beacon modules project lattice-synced signals to establish precision vector-locking. Enables remote triangulation and pulse-matching for Corevion networks.",
    bullets: [
      "High-gain vector emitter",
      "Synced quantum pulse core",
      "Triangulation-assist nodes"
    ],
    specs: [
      {
        label: "Signal Range",
        value: "7,000 km (Lattice-synced)"
      },
      {
        label: "Beacon Sync",
        value: "Corevion Mesh V2"
      },
      {
        label: "Dimensions",
        value: "300×200×70 mm"
      },
      {
        label: "Energy Tier",
        value: "Low Active"
      }
    ]
  },
  {
    id: 5,
    image: chamber,
    title: "COREVION NODE",
    price: "₿0.512",
    subheading: "Network Control Unit",
    text: "The Node governs localized synchronization between multiple Corevion modules. Supports real-time recalibration and distributed signal distribution with onboard AI assistance.",
    bullets: [
      "Distributed sync controller",
      "Redundant AI-assisted calibration",
      "Thermally isolated shell"
    ],
    specs: [
      {
        label: "Node Limit",
        value: "Up to 12 Modules"
      },
      {
        label: "Latency",
        value: "0.06s (avg)"
      },
      {
        label: "Dimensions",
        value: "450×310×120 mm"
      },
      {
        label: "Energy Tier",
        value: "Class-Z Level 2"
      }
    ]
  }
];

export const logs = [
    {
        date: "2072-04-19 16:33 UTC",
        title: "LOG-7132-A",
        text: "> Pulse readings normalized after 4.2s delay. Minor flux detected but within containment range.",
        button: "STABLE"
    },
    {
        date: "2072-05-02 09:42 UTC",
        title: "LOG-728-B",
        text: "> Pulse harmonics locked at 13.6Hz. No deviation detected across nodes. Core holding equilibrium under 98% load.",
        button: "STABLE"
    },
    {
        date: "2072-05-04 22:15 UTC",
        title: "LOG-731-C",
        text: "> Unexpected feedback loop triggered during phase shift. Auto-stabilizers engaged. Damage confined to Node-7. Investigation pending.",
        button: "ALERT"
    },
    {
        date: "2072-05-03 17:08 UTC",
        title: "LOG-729",
        text: "> [REDACTED] clearance verified. Initiating protocol sweep. Subject [REDACTED] authorized for relocation to Sector 3X.",
        button: "REDACTED"
    },
    {
        date: "2072-05-07 02:02 UTC",
        title: "LOG-735-X",
        text: "> New containment lattice deployed. Initial readings within safe range. Quantum bleed at 0.02%, acceptable for live trial.",
        button: "TESTING"
    },
    {
        date: "2072-04-28 13:50 UTC",
        title: "LOG-726-A",
        text: "> Internal AI subsystem updated. Predictive shielding improved by 12.4%. Latency between node recalibrations reduced by 6ms.",
        button: "STABLE"
    },
    {
        date: "2072-05-08 00:01 UTC",
        title: "LOG-739-Z",
        text: `> "We saw it pulse. Not like before."\n— Dr. Iyen, final entry before communications blackout.`,
        button: "REDACTED"
    },

]