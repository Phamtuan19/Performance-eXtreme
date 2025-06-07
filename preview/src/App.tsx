import { CircularProgress, Eye, Close } from '@pui/icons';
import { cn } from '@pui/core';
import { useState } from 'react';

export default function App() {
   const [count, setCount] = useState(0);

   return (
      <div
         style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontFamily: 'system-ui, sans-serif',
         }}
      >
         <h1 style={{ color: '#2563eb', fontSize: '2rem', margin: 0 }}>🎉 PUI Monorepo Demo</h1>

         <div
            style={{
               background: '#f8fafc',
               padding: '1rem',
               borderRadius: '8px',
               border: '1px solid #e2e8f0',
            }}
         >
            <h2 style={{ margin: '0 0 1rem 0', color: '#1e293b' }}>Available Components Working:</h2>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
               <span>Icons from @pui/icons:</span>
               <CircularProgress />
               <Eye width={24} height={24} />
               <Close width={24} height={24} />
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
               <span>Utilities from @pui/core:</span>
               <button
                  onClick={() => setCount(count + 1)}
                  className={cn('px-4', 'py-2', 'bg-blue-500', 'text-white', 'rounded')}
                  style={{
                     background: '#3b82f6',
                     color: 'white',
                     padding: '0.5rem 1rem',
                     border: 'none',
                     borderRadius: '6px',
                     cursor: 'pointer',
                  }}
               >
                  Count: {count} (using cn utility)
               </button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
               <h3 style={{ margin: '0 0 0.5rem 0', color: '#059669' }}>✅ Successfully Built Packages:</h3>
               <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>
                     <code style={{ background: '#e5e7eb', padding: '0.125rem 0.25rem', borderRadius: '3px' }}>
                        @pui/core
                     </code>{' '}
                     - Utilities, helpers, hooks
                  </li>
                  <li>
                     <code style={{ background: '#e5e7eb', padding: '0.125rem 0.25rem', borderRadius: '3px' }}>
                        @pui/theme
                     </code>{' '}
                     - Theme system, colors, breakpoints
                  </li>
                  <li>
                     <code style={{ background: '#e5e7eb', padding: '0.125rem 0.25rem', borderRadius: '3px' }}>
                        @pui/icons
                     </code>{' '}
                     - Icon components
                  </li>
               </ul>
            </div>

            <div
               style={{
                  background: '#fef3c7',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #f59e0b',
               }}
            >
               <h3 style={{ margin: '0 0 0.5rem 0', color: '#92400e' }}>⚠️ In Progress:</h3>
               <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>
                     <code style={{ background: '#e5e7eb', padding: '0.125rem 0.25rem', borderRadius: '3px' }}>
                        @pui/components
                     </code>{' '}
                     - UI components (has styled-components type issues)
                  </li>
                  <li>
                     <code style={{ background: '#e5e7eb', padding: '0.125rem 0.25rem', borderRadius: '3px' }}>
                        @pui/material
                     </code>{' '}
                     - Meta package (depends on components)
                  </li>
               </ul>
            </div>
         </div>

         <div
            style={{
               background: '#f0fdf4',
               padding: '1rem',
               borderRadius: '8px',
               border: '1px solid #22c55e',
            }}
         >
            <h2 style={{ margin: '0 0 1rem 0', color: '#15803d' }}>✅ Monorepo Migration Complete!</h2>
            <p style={{ margin: 0, color: '#166534' }}>
               Successfully restructured from single package to modular monorepo with clean separation of concerns. Core
               functionality is working and ready for further development!
            </p>
         </div>
      </div>
   );
}
