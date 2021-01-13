import styled from "styled-components"
import { prop, switchProp } from "styled-tools"

const Heading = styled.h2`
  color: ${prop("theme.colors.text")};
  font-size: ${switchProp(
    "as",
    {
      h1: prop("theme.fonts.h1"),
      h2: prop("theme.fonts.h2"),
      h3: prop("theme.fonts.h3"),
      h4: prop("theme.fonts.h4"),
      h5: prop("theme.fonts.h5"),
      h6: prop("theme.fonts.h6"),
    },
    prop("theme.fonts.h2")
  )};
  margin: 0.4rem 0 0.6rem;
`

export default Heading
