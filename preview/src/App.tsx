import { Button, Typography, Box, Input, Switch } from '@pui/components';
import { CircularProgress, Eye, Close } from '@pui/icons';
import type { ThemeColor } from '@pui/theme';
import { useState } from 'react';

const COLORS: ThemeColor[] = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

export default function App() {
   const [inputValue, setInputValue] = useState('');
   const [switchValue, setSwitchValue] = useState(false);

   return (
      <Box p={3} display="flex" flexDirection="column" gap={2}>
         <Typography variant="h1" color="primary">
            🎉 PUI Components Restored!
         </Typography>

         <Typography variant="h2">Available Components:</Typography>

         <Box display="flex" gap={2} alignItems="center">
            <Typography variant="h3">Layout:</Typography>
            <Box background="#f0f9ff" p={2} borderRadius="6px">
               <Typography>This is a Box component!</Typography>
            </Box>
         </Box>

         <Box display="flex" gap={2} alignItems="center">
            <Typography variant="h3">Buttons:</Typography>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
         </Box>

         <Box display="flex" gap={2} alignItems="center">
            <Typography variant="h3">Button Colors:</Typography>
            {COLORS.map((color) => (
               <Button key={color} color={color} variant="container" size="small">
                  {color}
               </Button>
            ))}
         </Box>

         <Box display="flex" gap={2} alignItems="center">
            <Typography variant="h3">Button Variants:</Typography>
            <Button variant="container">Container</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
         </Box>

         <Box display="flex" gap={2} alignItems="center">
            <Typography variant="h3">Inputs:</Typography>
            <Input
               placeholder="Outline input"
               variant="outline"
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
            />
            <Input placeholder="Filled input" variant="filled" startIcon={<Eye />} />
            <Input placeholder="Standard input" variant="standard" endIcon={<Close />} />
         </Box>

         <Box display="flex" gap={2} alignItems="center">
            <Typography variant="h3">Input with Icons:</Typography>
            <Input
               placeholder="Search..."
               startIcon={<Eye />}
               endIcon={<CircularProgress />}
               helperText="This input has start and end icons"
            />
         </Box>

         <Box display="flex" gap={2} alignItems="center">
            <Typography variant="h3">Switches:</Typography>
            <Switch size="small" checked={switchValue} onChange={(e) => setSwitchValue(e.target.checked)} />
            <Switch size="medium" color="success" />
            <Switch size="large" color="error" />
         </Box>

         <Box display="flex" gap={2} alignItems="center">
            <Typography variant="h3">Switch Colors:</Typography>
            {COLORS.map((color) => (
               <Switch key={color} color={color} defaultChecked />
            ))}
         </Box>

         <Box display="flex" gap={2} alignItems="center">
            <Typography variant="h3">Icons:</Typography>
            <CircularProgress />
            <Eye />
            <Close />
         </Box>

         <Box display="flex" gap={2} alignItems="center">
            <Typography variant="h3">Typography Variants:</Typography>
            <Box display="flex" flexDirection="column" gap={1}>
               <Typography variant="h1">Heading 1</Typography>
               <Typography variant="h2">Heading 2</Typography>
               <Typography variant="h3">Heading 3</Typography>
               <Typography variant="h4">Heading 4</Typography>
               <Typography variant="h5">Heading 5</Typography>
               <Typography variant="h6">Heading 6</Typography>
               <Typography variant="p">Paragraph text</Typography>
            </Box>
         </Box>

         <Box backgroundColor="#f0fdf4" p={2} borderRadius="8px">
            <Typography variant="h3" color="success">
               ✅ Successfully Restored Components!
            </Typography>
            <Typography variant="p">The following components are now working:</Typography>
            <Box p={1}>
               <ul>
                  <li>
                     <strong>Box</strong> - Layout component with flexbox properties
                  </li>
                  <li>
                     <strong>Button</strong> - Full-featured button with variants, colors, sizes
                  </li>
                  <li>
                     <strong>Input</strong> - Text input with variants, icons, helper text
                  </li>
                  <li>
                     <strong>Switch</strong> - Toggle switch with colors and sizes
                  </li>
                  <li>
                     <strong>Typography</strong> - Text component with semantic variants
                  </li>
                  <li>
                     <strong>Icons</strong> - CircularProgress, Eye, Close
                  </li>
               </ul>
            </Box>
            <Typography variant="p" color="info">
               More components can be migrated from the original px-ui package as needed!
            </Typography>
         </Box>
      </Box>
   );
}
