import solid from 'vite-plugin-solid'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";

const config: UserConfig = {
  plugins: [
    federation({
      name: 'host',
      remotes: {
          remoteApp: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ['react', 'react-dom']
    }),
    solid({ ssr: true }),
    ssr()
  ]
}

export default config
