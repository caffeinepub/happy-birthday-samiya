# Happy Birthday Samiya

## Current State
New project, no existing application.

## Requested Changes (Diff)

### Add
- Full-screen birthday surprise page with dark (#0a0a0a) background
- Twinkling gold stars scattered across the background
- Header text: "Hey Samiya, I have a surprise for you!"
- Clickable black gift box with golden cross-ribbon (vertical + horizontal)
- On click: box animates (scale + rotate then disappears), confetti blast with gold/white colors, birthday message fades in
- Birthday message: "Happy Birthday, Samiya! 🎂" with gold gradient text, a warm note, and "✨ Keep Shining ✨"

### Modify
N/A

### Remove
N/A

## Implementation Plan
- Single React page component replicating the HTML/CSS/JS logic
- Use canvas-confetti npm package for confetti
- Twinkling stars via CSS keyframe animation generated in useEffect
- Box open animation via CSS class toggle
- Message fade-in after box disappears
- No backend needed
