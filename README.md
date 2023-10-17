# Comment Box Component

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Comment Dialog Box

### Tech Stack:

- React (NextJS)
- CSS

### Focus: Make Reusable Components

### Component Breakdown along with primitives used to build it:

- composites
  - AudioRecorder
    - AudioRecorder
    - AudioRecorderDelete - Icon
    - AudioRecorderTime
    - AudioRecorderTrigger - Icon
    - AudioRecorderWave
  - CommentBox
    - CommentBox - Popover, useOverlayPosition
    - CommentBoxHeader
    - CommentBoxBody
    - CommentBoxFooter
    - CommentCard - Avatar, Icon
  - MentionDropdown - Select, Textarea, SelectOptions, SelectItem
- primitives
  - Avatar
  - Button
  - Divider
  - Icon
  - Overlay
  - Popover - Overlay
  - Select
    - Select
    - SelectItem
    - SelectOptions - Popover, useOverlayPosition
    - SelectText - Icon
  - Textarea

### Hooks Implemented:

- useOverlayPosition

### Features Completed:

- Priority dropdown
- @mention dropdown
- Audio recording
- Provide options for dark mode and light mode
- Break down the components in primitive components. Dev can take a few primitive components to construct their own comment dialog.
- Dev should be able to use css variables or parts or slots to customize the UI.

### Further Improvements:

- Add typings
- Component Documentation
- Add accessibility
- Handle some advanced cases for some complex components
  - For eg: Popover position calculation, on screen resize
- Improve MentionDropdown component API, couldn’t do it due to time constraint.
- Improve Styling, couldn’t make it pixel perfect due to time constraint.
- Make it responsive

### Demo Link : [https://comment-box-rosy.vercel.app/](https://comment-box-rosy.vercel.app/)
