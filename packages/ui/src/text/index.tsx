import styled from 'styled-components'
import { prop } from 'styled-tools'

const Text = styled.p`
  color: ${prop('theme.colors.text')};
  font-size: ${prop('theme.fonts.text')};
  margin: .4rem 0;
`

export default Text