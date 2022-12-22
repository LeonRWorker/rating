import { Container, Card, Final, Star, Icon, HowDidWeDo, Please, Options, Option, Alert, Submit, Illustrations, Illustration, Selected, ThankYou, WeAppreciate } from "./styles"
import star from "../../assets/star.svg"
import illustration from "../../assets/illustration-thank-you.svg"
import { useState } from "react"

export const Rating = () => {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(true)
  const handleSubmit = () => {
    if (index >= 1 && index <= 5) {
      setShow(false)
    } else {
      setIndex(6)
    }
  }
  return (
    <Container>
      { show && (
        <Card>
          <Star>
            <Icon src={star} />
          </Star>
          <HowDidWeDo>
            How did we do ?
          </HowDidWeDo>
          <Please>
            Please let us know how we did width your support request. All feedback is appreciated to help us improve our offering!
          </Please>
          <Options>
            <Option type={'radio'} name="rating" onClick={() => { setIndex(1) }} />
            <Option type={'radio'} name="rating" onClick={() => { setIndex(2) }} />
            <Option type={'radio'} name="rating" onClick={() => { setIndex(3) }} />
            <Option type={'radio'} name="rating" onClick={() => { setIndex(4) }} />
            <Option type={'radio'} name="rating" onClick={() => { setIndex(5) }} />
          </Options>
          { index == 6 && (<Alert>Select an option </Alert>) }
          <Submit onClick={handleSubmit} >Submit</Submit>
        </Card>
      )}
      { !show && (
        <Final>
          <Illustrations>
            <Illustration src={illustration} />
          </Illustrations>
          <Selected>
            You selected { index } out of 5
          </Selected>
          <ThankYou>
            Thank You!
          </ThankYou>
          <WeAppreciate>
            We appreciate you taking the time to give a rating if ou ever need more support, don't hesitate to get in touch!
          </WeAppreciate>
        </Final>
      ) }
    </Container>
  )
}