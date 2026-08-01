# 🎨 Interactive Sketchbook & Retro Desk Portfolio

A highly interactive personal portfolio website blending a hand-drawn sketchbook aesthetic with a dynamic 3D interactive desk workspace.

This portfolio is built using **Next.js (App Router)**, **React**, **Three.js (React Three Fiber)**, **TypeScript**, and **Tailwind CSS**. It showcases projects, experience, skills, and resume details through highly immersive, tactile, and responsive user interfaces.

---

## ✨ Immersive Interactive Features

### 🖥️ 3D Desk Workspace (`Scene.tsx`)
- Rendered using `@react-three/fiber` and `@react-three/drei`.
- Loads a custom-modeled 3D workspace desk (`Ash.glb`) that users can rotate and inspect using smooth **OrbitControls** and responsive loading/spawn animations.

### 📺 Retro CRT TV Project Showcase (`ProjectShowcase.tsx`)
- A physical-looking, interactive retro TV and DVD player interface.
- **Controls**: Interactive Play/Pause, Next/Previous channel, Stop, and Eject buttons.
- **DVD Tray**: Opens and closes to select different projects.
- **Cassette Tape & Vol Knob**: Visual animations and state changes.
- **CRT Screen Shader**: Simulates vintage scanlines, curved displays, and flicker effects using Tailwind and custom React states.

### 📱 Realistic iPad Resume Viewer (`IPad.tsx`)
- An interactive digital iPad replica complete with hardware buttons.
- **Power Button**: Toggles the screen state on and off.
- **Export PDF**: Action bar trigger to download a formatted PDF resume (`resume.pdf`).
- **Layout**: Clean grid-based view of Education, Experience, Honors, Projects, and Tech Stack.

### 🎟️ Perforated Ticket Stack Experience (`Ticket.tsx`)
- A ticket-stub styled card component displaying internship and role highlights.
- Features detailed retro perforations and notches.
- **Dynamic Stack**: Rendered as a stacked deck that cycles to the next card with subtle rotation and scaling animations on click.

### ✏️ Hand-Drawn Sketchbook Theme
- Scattered doodles, paper textures, stickers (e.g., Cat, Rabbit, Flower, Godzilla).
- Clean, hand-drawn typography (e.g., `Gochi Hand`, `Bree Serif`, etc.) combined with modern layouts.
- Custom custom UI components (from the `sketchbook-ui` library).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Logic**: React 19 & TypeScript
- **Styling**: Tailwind CSS v4 & custom animations
- **3D Rendering**: Three.js, React Three Fiber (`@react-three/fiber`), React Three Drei (`@react-three/drei`)
- **Animations**: Framer Motion & custom CSS transitions
- **Icons**: Lucide React & React Icons
- **Backend/Forms**: Nodemailer (integrated API contact form)
- **Component Library**: Sketchbook UI

---

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router entry points & global styles
├── components/           # Reusable interactive components
│   ├── 3-D/              # Three.js 3D Canvas Scene
│   ├── IPad/             # Interactive iPad resume viewer & data
│   ├── Models/           # 3D GLTF Model loaders (Ash.glb)
│   ├── Ticket/           # Custom perforated tickets for Experience section
│   ├── TV/               # CRT TV components, DVD controls, DVD Tray, Carousel
│   └── ui/               # General UI elements (Doodles, Tags, Headers, Navbar)
├── context/              # Global React Contexts (e.g., LoadingContext)
├── hooks/                # Custom React hooks (e.g., useDVDPlayer)
├── lib/                  # Shared data, color constants, and technologies dictionary
├── styles/               # Global css configurations
└── types/                # TypeScript type definitions
```

---

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Angadveer185/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory and add the following keys for the contact form functionality:
   ```env
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   RECEIVER_EMAIL=your-recipient-email@example.com
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
