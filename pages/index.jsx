import { styled } from "@b2list/config/stitches.config"
import { FormattedMessage } from "react-intl"
import Button from "@b2list/components/Button"
import Link from "next/link"

const Box = styled('div', {
  margin: 10
})

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
})

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})

export default function Home() {
  return (
    <Box css={{ paddingY: '$6' }}>            
      <Container size={{ '@initial': '1', '@bp1': '2' }}>        
        <Text as="h1">
          <FormattedMessage id="home.text" />  
        </Text>        
      </Container>
      <Link href="/register">
        <Button color="primary">
          <FormattedMessage id="go.register"/>  
        </Button>  
      </Link>          
    </Box>
  )
}
