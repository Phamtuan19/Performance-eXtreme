import { Badge, Box, Button, Spinner, Tooltip, Typography } from '@/components/atoms';
import { Divider } from '@/components/atoms/divider';

export default function App() {
   return (
      <div style={{ padding: '2rem' }}>
         <Box>
            <Spinner color="error" size="small" />
            <Spinner color="error" size="medium" />
            <Spinner color="error" size="large" />
         </Box>
         <Box my={3} className="">
            <Tooltip title="Tooltip của tôi" placement="top-end">
               <Button>Hover me</Button>
            </Tooltip>
         </Box>
         <Box my={3} className="">
            <Tooltip title="Tooltip của tôi" placement="top-end">
               <Typography component={'span'}> Hover me</Typography>
            </Tooltip>
         </Box>

         <Box position="relative" mb={2} display="flex" gap={3}>
            <Badge content={1000} maxContent={99} color="error">
               <Button>Button</Button>
            </Badge>
            <Divider variant="vertical" orientation="right"></Divider>
            <Badge content={99} color="success">
               <Button>Button</Button>
            </Badge>
            <Divider variant="vertical" orientation="right"></Divider>
            <Badge content={99} dot color="warning">
               <Button>Button</Button>
            </Badge>
         </Box>
      </div>
   );
}
