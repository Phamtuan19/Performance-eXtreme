import { Avatar, AvatarGroup, Badge, Box, Button, Radio, Switch } from '@/components/atoms';

export default function App() {
   return (
      <div style={{ padding: '2rem' }}>
         <Box position="relative" mb={2} display="flex" gap={3}>
            <Badge content={1000} maxContent={99} color="error">
               <Button>Button</Button>
            </Badge>
            <Badge content={99} color="success">
               <Button>Button</Button>
            </Badge>
            <Badge content={99} dot color="warning">
               <Button>Button</Button>
            </Badge>
         </Box>

         <Box>
            <Switch loading size="large" color="primary" disabled />
            <Switch loading ml={2} size="medium" />
            <Switch ml={2} size="small" color="warning" />

            <Radio autoFocus />
         </Box>

         <Box mt={2} display="flex" gap={2} flexDirection="column">
            <Box display="flex" gap={2} alignItems="center">
               <Avatar src="https://i.pravatarc.cc/150/adasd" title="User A" />
               <Avatar shape="square" title="U" showBadge />
               <Avatar src="broken.jpg" title="B" showBadge badgeColor="#44b700" />
            </Box>

            <AvatarGroup maxCount={3} spacing={-10} size="medium" shape="circle" direction="ltr">
               <Avatar src="https://randomuser.me/api/portraits/women/1.jpg" alt="User 1" />
               <Avatar src="https://randomuser.me/api/portraits/men/2.jpg" alt="User 2" />
               <Avatar src="https://randomuser.me/api/portraits/women/3.jpg" alt="User 3" />
               <Avatar src="https://randomuser.me/api/portraits/men/4.jpg" alt="User 4" />
               <Avatar src="https://randomuser.me/api/portraits/women/5.jpg" alt="User 5" />
            </AvatarGroup>

            {/* Sử dụng collapseAvatar để custom hiển thị số avatar còn lại */}
            <AvatarGroup
               maxCount={2}
               //    spacing={-8}
               size={40}
               shape="square"
               collapseAvatar={(remainingCount) => (
                  <Avatar size={40} shape="square" style={{ backgroundColor: '#666', color: '#fff' }}>
                     +{remainingCount}
                  </Avatar>
               )}
            >
               <Avatar src="https://randomuser.me/api/portraits/men/10.jpg" />
               <Avatar src="https://randomuser.me/api/portraits/women/11.jpg" />
               <Avatar src="https://randomuser.me/api/portraits/men/12.jpg" />
               <Avatar src="https://randomuser.me/api/portraits/women/13.jpg" />
            </AvatarGroup>

            {/* Điều chỉnh hướng xếp từ phải sang trái */}
            <AvatarGroup maxCount={4} shape="square">
               <Avatar src="https://randomuser.me/api/portraits/men/21.jpg" />
               <Avatar src="https://randomuser.me/api/portraits/women/22.jpg" />
               <Avatar src="https://randomuser.me/api/portraits/men/23.jpg" />
            </AvatarGroup>
         </Box>
      </div>
   );
}
