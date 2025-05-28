import { useTheme } from 'styled-components';

import { Box, Label, Select, Input } from '@PUI/components/atoms';

export default function App() {
   const theme = useTheme();
   console.log('🚀 ~ App ~ theme:', theme);

   return (
      <div style={{ padding: '2rem' }}>
         <Box my={4} display="flex" flexDirection="column">
            <Label required sx={{ color: { sm: 'error.main', lg: 'primary.main' } }}>
               Label
            </Label>
            <Box display="flex">
               <Select
                  //   loading

                  size="medium"
                  color="warning"
                  prefix={'User'}
                  placeholder="Select an option"
                  options={[
                     { label: 'Option 1', value: 'Option1' },
                     { label: 'Option 2', value: 'Option2' },
                     { label: 'Option 3', value: 'Option3' },
                     { label: 'Option 4', value: 'Option4' },
                     { label: 'Option 5', value: 'Option5' },
                     { label: 'Option 6', value: 'Option6' },
                     { label: 'Option 7', value: 'Option7' },
                     { label: 'Option 8', value: 'Option8' },
                     { label: 'Option 9', value: 'Option9' },
                     { label: 'Option 10', value: 'Option10' },
                     { label: 'Option 11', value: 'Option11' },
                     { label: 'Option 12', value: 'Option12' },
                     { label: 'Option 13', value: 'Option13' },
                     { label: 'Option 14', value: 'Option14' },
                  ]}
                  value={['Option1', 'Option2', 'Option3', 'Option4', 'Option5']}
                  width={200}
                  dropdownRender={(menu) => (
                     <div style={{ border: '1px solid #eee' }}>
                        <div style={{ padding: 8, fontWeight: 'bold' }}>Danh sách trái cây</div>
                        {menu} {/* Đây là toàn bộ các <Option> được render */}
                        <div style={{ padding: 8, borderTop: '1px solid #eee' }}>
                           <a onClick={() => alert('Thêm trái cây')}>+ Thêm mới</a>
                        </div>
                     </div>
                  )}
               />
               <Input size="medium" />
            </Box>
         </Box>
         <Box display="flex">
            <Select
               //   loading
               multiple
               size="medium"
               color="warning"
               prefix={'User'}
               placeholder="Select an option"
               defaultValue={['1', '2', '3', '4', '5']}
               options={[
                  { label: 'Option 1', value: 'Option1', id: '1' },
                  { label: 'Option 2', value: 'Option2', id: '2' },
                  { label: 'Option 3', value: 'Option3', id: '3' },
                  { label: 'Option 4', value: 'Option4', id: '4' },
                  { label: 'Option 5', value: 'Option5', id: '5' },
                  { label: 'Option 6', value: 'Option6', id: '6' },
                  { label: 'Option 7', value: 'Option7', id: '7' },
                  { label: 'Option 8', value: 'Option8', id: '8' },
                  { label: 'Option 9', value: 'Option9', id: '9' },
                  { label: 'Option 10', value: 'Option10', id: '10' },
                  { label: 'Option 11', value: 'Option11', id: '11' },
                  { label: 'Option 12', value: 'Option12', id: '12' },
                  { label: 'Option 13', value: 'Option13', id: '13' },
                  { label: 'Option 14', value: 'Option14', id: '14' },
               ]}
               width={200}
               fieldNames={{
                  value: 'id',
               }}
               onChange={(value, option) => {
                  console.log('🚀 ~ App ~ value:', value);
                  console.log('🚀 ~ App ~ option:', option);
               }}
            />
            <Input size="medium" />
         </Box>
      </div>
   );
}
