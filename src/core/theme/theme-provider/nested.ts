const hasSymbol = typeof Symbol === 'function' && Symbol.for;

export default hasSymbol ? Symbol.for('pxui.nested') : '__PXUI_THEME_NESTED__';
