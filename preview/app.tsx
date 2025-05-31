import { useState } from 'react';

import { Avatar, AvatarGroup, Badge, Box, Button, Checkbox, Input, Radio, Select } from '@PUI/components/atoms';
import { CircularProgress } from '@PUI/components/icons';
import type { ThemeColor } from '@PUI/core';

const COLORS: ThemeColor[] = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

export default function App() {
   const [selected, setSelected] = useState('large');

   return (
      <Box display="flex" flexDirection="column" gap={3} p={2}>
         <Box display="flex" gap={2}>
            <Select
               prefix={'hello'}
               suffixIcon={<>icon</>}
               width={200}
               options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                  { label: 'Option 4', value: '4' },
                  { label: 'Option 5', value: '5' },
                  { label: 'Option 6', value: '6' },
               ]}
            />
            <Select
               multiple
               width={200}
               options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                  { label: 'Option 4', value: '4' },
                  { label: 'Option 5', value: '5' },
                  { label: 'Option 6', value: '6' },
               ]}
            />
         </Box>
         <Box display="flex" gap={2}>
            <Radio
               size="large"
               label="Radio large"
               value="large"
               checked={selected === 'large'}
               onChange={() => setSelected('large')}
            />
            <Radio
               size="medium"
               label="Radio medium"
               value="medium"
               checked={selected === 'medium'}
               onChange={() => setSelected('medium')}
            />
            <Radio
               size="small"
               label="Radio small"
               value="small"
               checked={selected === 'small'}
               onChange={() => setSelected('small')}
            />
         </Box>
         <Box display="flex" gap={2}>
            <Input
               loading
               variant="outline"
               error
               helperText="Input helper text variant outline color error"
               defaultValue="Input helper text variant outline color error"
            />
            <Input variant="filled" helperText="Input helper text variant filled" />
            <Input variant="standard" helperText="Input helper text variant standard" />
         </Box>
         <Box display="flex" gap={2}>
            <Input
               error
               helperText="Input helper text error"
               sx={{
                  '& .px-input-icon-start': {
                     background: '#f5f5f5',
                  },
               }}
               endIcon={<CircularProgress />}
            />
            <Input variant="filled" helperText="Input helper text variant filled" endIcon={<CircularProgress />} />
            <Input variant="standard" helperText="Input helper text variant standard" endIcon={<CircularProgress />} />
         </Box>
         <Box display="flex" gap={2}>
            <Input
               error
               helperText="Input helper text error"
               startIcon={<CircularProgress />}
               endIcon={<CircularProgress />}
               disabled
            />
            <Input
               variant="filled"
               helperText="Input helper text variant filled"
               startIcon={<CircularProgress />}
               endIcon={<CircularProgress />}
               disabled
            />
            <Input
               variant="standard"
               helperText="Input helper text variant standard"
               startIcon={<CircularProgress />}
               endIcon={<CircularProgress />}
               disabled
            />
         </Box>
         <Box>
            <Checkbox color="error" label="checkBox" size="large" />
         </Box>
         <Box display="flex" gap={2}>
            <Badge content="1" dot animationType="wave">
               <Button>Badge</Button>
            </Badge>
            <Badge content="1" dot>
               <Button startIcon="I" />
            </Badge>
         </Box>
         <Box display="flex" alignItems="flex-end" gap={3}>
            <Button size="large">Button large</Button>
            <Button size="medium">Button medium</Button>
            <Button size="small">Button small</Button>
         </Box>
         <Box display="flex" alignItems="flex-end" gap={3}>
            {COLORS.map((color) => {
               return (
                  <Button size="medium" key={color} color={color}>
                     Button {color}
                  </Button>
               );
            })}
         </Box>
         <Box display="flex" alignItems="flex-end" gap={3}>
            {COLORS.map((color) => {
               return (
                  <Button size="medium" variant="outlined" key={color} color={color}>
                     Button
                  </Button>
               );
            })}
         </Box>
         <Box display="flex" alignItems="flex-end" gap={3}>
            {COLORS.map((color) => {
               return (
                  <Button size="medium" variant="text" key={color} color={color}>
                     Button
                  </Button>
               );
            })}
         </Box>
         <Box display="flex" alignItems="flex-end" gap={3}>
            <Avatar src="https://picsum.photos/300/200" size="large" />
            <Avatar size="medium" color="error">
               A
            </Avatar>
            <Avatar size="small" color="primary" title="Title" alt="Avatar Title"></Avatar>
         </Box>
         <Box display="flex" alignItems="flex-end" gap={3}>
            <AvatarGroup maxCount={2}>
               <Avatar src="https://picsum.photos/300/200" size="large" />
               <Avatar src="https://picsum.photos/300/200" size="large" />
               <Avatar src="https://picsum.photos/300/200" size="large" />
               <Avatar src="https://picsum.photos/300/200" size="large" />
               <Avatar src="https://picsum.photos/300/200" size="large" />
               <Avatar src="https://picsum.photos/300/200" size="large" />
            </AvatarGroup>
         </Box>
      </Box>
   );
}
