

# Replace About Section Profile Picture

## Overview

Replace the current portrait image (`karl-portrait.jpg`) with the new uploaded walking photo in both the German and English About sections.

## Changes

### 1. Copy uploaded image to project

Copy `user-uploads://Walking.jpeg` to `src/assets/karl-walking.jpg`.

### 2. Update `src/components/AboutSection.tsx`

- Change import from `karl-portrait.jpg` to `karl-walking.jpg`
- Update the `alt` text to reflect the new image

### 3. Update `src/components/AboutSectionEn.tsx`

- Same import and alt text change as above

## Files Modified

| File | Change |
|------|--------|
| `src/assets/karl-walking.jpg` | New file (copied from upload) |
| `src/components/AboutSection.tsx` | Update image import |
| `src/components/AboutSectionEn.tsx` | Update image import |

