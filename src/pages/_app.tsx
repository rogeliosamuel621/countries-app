import { Header } from '@components/containers/Header'
import { ThemeProvider } from '@contexts/Theme.context'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="bg-light-2 dark:bg-dark-2 transition min-h-screen">
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
