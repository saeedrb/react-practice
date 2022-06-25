import '../styles/globals.css'
import {QueryClient, QueryClientProvider} from "react-query"

function MyApp({ Component, pageProps }) {
  const client = new QueryClient();
  return <QueryClientProvider client={client}><Component {...pageProps} /></QueryClientProvider>
}

export default MyApp
