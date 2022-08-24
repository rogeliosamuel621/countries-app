import { Header } from '@components/containers/Header'
import { ThemeProvider } from '@contexts/Theme.context'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <div className="bg-light-2 dark:bg-dark-2 transition">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
