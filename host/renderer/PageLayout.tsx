import type { JSX, Component } from 'solid-js'
import './PageLayout.css'
import { PageContextProvider, usePageContext } from './usePageContext'
import type { PageContext } from './types'
import type { Store } from 'solid-js/store'
import { Dynamic } from 'solid-js/web'

export { PageLayout }

interface Props {
  pageContext: Store<PageContext>
}
interface Children {
  children: JSX.Element
}

const PageLayout: Component<Props> = (props) => {
  return (
    <PageContextProvider pageContext={props.pageContext}>
      <Layout>
        <Content>
          <Page />
        </Content>
      </Layout>
    </PageContextProvider>
  )
}

function Page() {
  const pageContext = usePageContext()
  return (
    <>
      <Dynamic component={pageContext.Page} {...(pageContext.pageProps ?? {})} />
    </>
  )
}

const Layout: Component<Children> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        'max-width': '900px',
        margin: 'auto'
      }}
    >
      {props.children}
    </div>
  )
}

const Content: Component<Children> = (props) => {
  return (
    <div
      style={{
        padding: '20px',
        'padding-bottom': '50px',
        'min-height': '100vh',
        'width': '100%'
      }}
    >
      {props.children}
    </div>
  )
}
