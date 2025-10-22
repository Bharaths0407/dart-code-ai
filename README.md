# DartCode AI Project

## Live URL
https://dartcode-ai.netlify.app

## Repository
https://github.com/Bharaths0407/dart-code-ai.git

## Tech Stack
- **Framework:** Vue 3  
- **Styling:** TailwindCSS  
- **UI Components:** ShadCN UI  
- **Icons:** lucide-vue-next  
- **Package Manager:** Bun

---

## Features Implemented
- **Responsive design** (desktop + mobile)  
- **Accordion feature** implemented using ShadCN UI for FAQ / collapsible content  
- **Mobile menu toggle** (interactive element)  
- Smooth layout and styling using **TailwindCSS utilities**  

---

## Pixelay Screenshots
Pixelay was used to compare the implemented page to the Figma design:

- Desktop overlay: `/Pixelay/Desktop/Home Page 1.png`  
- Mobile overlay: `/Pixelay/Mobile/Home page 1.png`
- Notes of the Observation (./Pixelay/notes.md) 

---

## Trade-offs / Improvements
- Images and SVGs are not fully optimized for performance; compression could improve load times.
- Animations (hover effects, scroll transitions, accordion) could be smoother to better match Figma’s feel.
- Accessibility could be enhanced: e.g., adding proper ARIA labels, improving color contrast, and ensuring semantic HTML.
- Accordion component styling and animation could be refined to match Figma’s prototype more closely.
- Desktop font sizes, button sizes, and spacing could be fine-tuned for perfect design fidelity.
- Mobile layout uses slightly larger section heights than the Figma design; adjustments could improve visual balance.
- Some sections could benefit from consistent spacing and alignment across breakpoints.

---

## How to Run Locally (Bun)

**Steps to install and run the Project**
```bash
git clone https://github.com/Bharaths0407/dart-code-ai.git

cd dartcode

bun install

bun run dev
