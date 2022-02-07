import A11yNavigation from '.'

export default {
  title: 'Core/A11yNavigation',
  component: A11yNavigation
}

const Template = (args) => (
  <A11yNavigation {...args}>
    <a href="#content">Jump to main content</a>
    <a href="#navigation">Jump to primary navigation</a>
  </A11yNavigation>
)

export const Default = Template.bind({})
