import '@/styles/globals.css'

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

App.getInitialProps = () => {
  return {};
};

export default App