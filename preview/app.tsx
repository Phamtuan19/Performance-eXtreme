import { Box, Button, Input, Select, Tooltip } from '@PUI/components/atoms';

export default function App() {
   return (
      <Box display="flex" flexDirection="column" gap={3} p={2}>
         <Box display="flex" gap={3}>
            <Tooltip title="tooltip" placement="right">
               <Button variant="container">tooltip</Button>
            </Tooltip>
            <Button variant="text" color="primary">
               tooltip
            </Button>
         </Box>
         <Select
            options={[
               { label: 'Option 1', value: 'opt1' },
               { label: 'Option 2', value: 'opt2' },
            ]}
            minWidth={15}
         />

         <Input width={500} />
      </Box>
   );
}
