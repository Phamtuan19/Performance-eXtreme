import { Box, Button, Spinner, Tooltip } from '@PUI/components/atoms';

export default function App() {
   return (
      <Box display="flex" flexDirection="column" gap={3}>
         hello
         <Spinner />
         <Tooltip title="tooltip">
            <Button>tooltip</Button>
         </Tooltip>
      </Box>
   );
}
