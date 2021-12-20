import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import renameNodeModules from "rollup-plugin-rename-node-modules";

const config = {
  input: 'src/index.ts',
  external: ['react/jsx-runtime', 'styled-components', 'tslib'],
  output: [
    {
      dir: "dist",
      format: "es",
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: 'src'
    }
  ],
  plugins: [
    postcss({
      modules: true,
      minimize: true
    }),
    typescript(),
    renameNodeModules("external")
  ]
}

export default config
