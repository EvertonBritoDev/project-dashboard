import styled from 'styled-components'

const LoginArea = styled.div`
  background: #666;
`

const LoginImg = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  width: 50vw;
  height: 100vh;
`

function Registration() {
  return (
    <>
      <LoginArea>Login</LoginArea>
      <LoginImg />
    </>
  )
}
export default Registration
