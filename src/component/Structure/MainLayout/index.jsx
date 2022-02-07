import { node } from 'prop-types'

import A11yNavigation from '@/component/Primitive/A11yNavigation'
import Footer from '@/component/Structure/Footer'
import Main from '@/component/Structure/Main'
import SiteContainer from '@/component/Structure/SiteContainer'

const MainLayout = ({ children }) => (
  <SiteContainer>
    <A11yNavigation>
      <a href="#content">Jump to main content</a>
      <a href="#navigation">Jump to primary navigation</a>
    </A11yNavigation>
    <Main>{children}</Main>
    <Footer />
  </SiteContainer>
)

MainLayout.propTypes = {
  children: node.isRequired
}

export default MainLayout
