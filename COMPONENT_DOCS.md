# Tabs Component - Design System

A fully accessible, production-ready Tabs component for React with TypeScript, built with a focus on accessibility, flexibility, and design system best practices.

## Features

✅ **Two Tab Variants**
- `Pill` - Rounded background style
- `Underline` - Underline indicator style

✅ **Badge Integration**
- Optional badges on tabs with three variants:
  - `neutral` - Gray background
  - `positive` - Green background  
  - `negative` - Red background

✅ **Accessibility**
- Full ARIA support (`role="tablist"`, `role="tab"`, `aria-selected`)
- Keyboard navigation (Arrow keys, Home, End)
- Focus management
- Disabled state support

✅ **Flexible API**
- Controlled and uncontrolled modes
- Easy to customize
- TypeScript support with full type safety

✅ **Responsive**
- Mobile-friendly with horizontal scrolling support
- Adapts to different screen sizes

✅ **Testing**
- 20+ unit tests covering all functionality
- 100% test coverage for core components
- Uses Vitest + React Testing Library

✅ **Documentation**
- Comprehensive Storybook stories
- 10+ story examples
- JSDoc comments on all props

## Components

### Badge
Simple badge component for displaying additional information.

**Props:**
- `children: ReactNode` - Badge content
- `variant?: "neutral" | "positive" | "negative"` - Visual style (default: "neutral")
- `className?: string` - Additional CSS classes

**Example:**
```tsx
<Badge variant="positive">5</Badge>
```

### Tab
Individual tab component within a Tabs container.

**Props:**
- `id: string` - Unique identifier
- `label: string` - Tab label text
- `isSelected?: boolean` - Whether tab is selected
- `isDisabled?: boolean` - Whether tab is disabled
- `onClick?: (id: string) => void` - Selection callback
- `badgeLabel?: string` - Optional badge text
- `badgeVariant?: BadgeVariant` - Badge style
- `variant?: "pill" | "underline"` - Tab style (default: "pill")
- `className?: string` - Additional CSS classes

**Example:**
```tsx
<Tab
  id="emails"
  label="Emails"
  isSelected={true}
  badgeLabel="5"
  badgeVariant="positive"
  variant="pill"
/>
```

### Tabs
Container component that manages multiple Tab components with accessibility features.

**Props:**
- `tabs: TabItem[]` - Array of tab configuration objects
- `defaultSelectedId?: string` - Initially selected tab
- `selectedId?: string` - Currently selected tab (controlled mode)
- `onTabChange?: (tabId: string) => void` - Selection callback
- `variant?: "pill" | "underline"` - Tab style (default: "pill")
- `className?: string` - Additional CSS classes

**TabItem Interface:**
```tsx
interface TabItem {
  id: string;
  label: string;
  badgeLabel?: string;
  badgeVariant?: BadgeVariant;
  isDisabled?: boolean;
}
```

**Example:**
```tsx
const tabs = [
  { id: "emails", label: "Emails", badgeLabel: "5" },
  { id: "files", label: "Files", badgeLabel: "2", badgeVariant: "positive" },
  { id: "edits", label: "Edits", isDisabled: true },
];

<Tabs
  tabs={tabs}
  defaultSelectedId="emails"
  variant="pill"
  onTabChange={(id) => console.log("Selected:", id)}
/>
```

## Usage

### Basic Usage
```tsx
import { Tabs } from "@/components";

function MyComponent() {
  const tabs = [
    { id: "tab-1", label: "Tab 1" },
    { id: "tab-2", label: "Tab 2" },
    { id: "tab-3", label: "Tab 3" },
  ];

  return (
    <Tabs
      tabs={tabs}
      defaultSelectedId="tab-1"
      variant="pill"
    />
  );
}
```

### Controlled Mode
```tsx
import { useState } from "react";
import { Tabs } from "@/components";

function MyComponent() {
  const [selected, setSelected] = useState("tab-1");

  return (
    <Tabs
      tabs={tabs}
      selectedId={selected}
      onTabChange={setSelected}
      variant="underline"
    />
  );
}
```

### With Badges
```tsx
const tabs = [
  { id: "inbox", label: "Inbox", badgeLabel: "3", badgeVariant: "positive" },
  { id: "archive", label: "Archive", badgeLabel: "Error", badgeVariant: "negative" },
  { id: "trash", label: "Trash" },
];

<Tabs tabs={tabs} variant="pill" />
```

## Keyboard Navigation

When a tab has focus:
- **Arrow Left/Up** - Move to previous tab
- **Arrow Right/Down** - Move to next tab
- **Home** - Jump to first tab
- **End** - Jump to last tab
- **Enter/Space** - Select focused tab

Disabled tabs are automatically skipped during keyboard navigation.

## Styling

All components use plain CSS (no CSS-in-JS or preprocessors). CSS files are located alongside components:

- `src/components/Badge/Badge.css`
- `src/components/Tab/Tab.css`
- `src/components/Tabs/Tabs.css`

### CSS Classes

**Badge:**
- `.badge` - Base class
- `.badge--neutral` - Neutral variant
- `.badge--positive` - Positive variant
- `.badge--negative` - Negative variant

**Tab:**
- `.tab` - Base class
- `.tab--pill` - Pill variant
- `.tab--underline` - Underline variant
- `.tab--selected` - Selected state
- `.tab--disabled` - Disabled state
- `.tab__label` - Label text
- `.tab__badge` - Badge wrapper

**Tabs:**
- `.tabs` - Base class
- `.tabs--pill` - Pill variant
- `.tabs--underline` - Underline variant

## Design Specifications

### Colors
- Primary text: `#3d3d3d`
- Dark text: `#1a1a1a`
- Light gray: `#a0a0a0`
- Pill background: `#f5f5f5`
- Active pill: `#1a1a1a` (dark)
- Badge neutral: `#f0f0f0`
- Badge positive: `#d1fae5`
- Badge negative: `#fee2e2`

### Typography
- Tab label: 14px, 500 weight, Inter font
- Badge text: 12px, 500 weight, Inter font
- Line-height: 1.5 (150%)

### Spacing
- Tab padding: 8px 16px
- Badge padding: 2px 8px
- Tab-to-badge gap: 8px
- Pill gap: 8px
- Border radius (badge): 12px
- Border radius (pill): 20px

## Testing

Run tests with:
```bash
pnpm test
```

Tests include:
- Component rendering
- State management (selected, disabled)
- User interactions (click, keyboard)
- Accessibility attributes
- Badge integration
- Keyboard navigation
- Both controlled and uncontrolled modes

## Storybook

View all component examples and variants:
```bash
pnpm storybook
```

Storybook stories include:
- All component variants
- All states (default, hover, active, focus, disabled)
- Badge integration examples
- Keyboard navigation demo
- Responsive example
- Controlled mode example

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility Compliance

- ✅ WCAG 2.1 Level AA compliant
- ✅ Full keyboard support
- ✅ Screen reader friendly
- ✅ Focus management
- ✅ Proper ARIA roles and attributes
- ✅ Color contrast compliance

## Development

### File Structure
```
src/components/
├── Badge/
│   ├── Badge.tsx
│   ├── Badge.css
│   ├── Badge.test.tsx
│   └── Badge.stories.tsx
├── Tab/
│   ├── Tab.tsx
│   ├── Tab.css
│   ├── Tab.test.tsx
│   └── Tab.stories.tsx
├── Tabs/
│   ├── Tabs.tsx
│   ├── Tabs.css
│   ├── Tabs.test.tsx
│   └── Tabs.stories.tsx
└── index.ts
```

### Build Commands
```bash
# Type check
pnpm tsc

# Lint and format
pnpm check
pnpm check:fix

# Test
pnpm test

# Storybook
pnpm storybook

# Build storybook
pnpm build-storybook

# Dev server
pnpm dev
```

## License

This component is part of the Design System project.
