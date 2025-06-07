import { Button, Typography } from '@pui/components';
import { CircularProgress, Eye, Close } from '@pui/icons';
import type { ThemeColor } from '@pui/theme';
import { useState } from 'react';

const COLORS: ThemeColor[] = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

export default function App() {
   const [selected, setSelected] = useState('large');

   return (
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
         <Typography variant="h1" color="primary">
            🎉 PUI Monorepo Demo
         </Typography>

         <Typography variant="h2">Available Components:</Typography>

         <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="h3">Buttons:</Typography>
            <Button size="small">Small Button</Button>
            <Button size="medium">Medium Button</Button>
            <Button size="large">Large Button</Button>
         </div>

         <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="h3">Button Colors:</Typography>
            {COLORS.map((color) => (
               <Button key={color} color={color} variant="container">
                  {color}
               </Button>
            ))}
         </div>

         <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="h3">Button Variants:</Typography>
            <Button variant="container">Container</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
         </div>

         <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="h3">Icons:</Typography>
            <CircularProgress />
            <Eye />
            <Close />
         </div>

         <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="h3">Typography Variants:</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
               <Typography variant="h1">Heading 1</Typography>
               <Typography variant="h2">Heading 2</Typography>
               <Typography variant="h3">Heading 3</Typography>
               <Typography variant="h4">Heading 4</Typography>
               <Typography variant="h5">Heading 5</Typography>
               <Typography variant="h6">Heading 6</Typography>
               <Typography variant="p">Paragraph text</Typography>
            </div>
         </div>

         <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="h3">Typography Colors:</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
               {COLORS.map((color) => (
                  <Typography key={color} color={color}>
                     This is {color} colored text
                  </Typography>
               ))}
            </div>
         </div>

         <Typography variant="h3" color="success">
            ✅ Monorepo structure is working!
         </Typography>
         <Typography variant="p">Successfully importing from:</Typography>
         <ul>
            <li>
               <code>@pui/components</code> - Button, Typography
            </li>
            <li>
               <code>@pui/icons</code> - CircularProgress, Eye, Close
            </li>
            <li>
               <code>@pui/theme</code> - Theme types, ThemeProvider
            </li>
         </ul>
      </div>
   );
}
