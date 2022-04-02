import tw from "twin.macro"
import Button from "../components/atom/Button"
import Input from "../components/atom/Input"
import LinkButton from "../components/atom/LinkButton"

const Container = tw.div`bg-grey-100 w-full h-full min-h-screen flex items-center justify-center`

const RoundedBox = tw.div`rounded-[10px] bg-white w-[542px] h-[609px] shadow-[0px_0px_6px_rgba(0, 0, 0, 0.1)] box-border pt-[49px] px-[44px] pb-[58px]`

const Logo = tw.img`w-[69px] h-[66px] object-contain mx-auto`

const Title = tw.div`font-bold text-[40px] text-center mt-[9px]`

export default function Login() {
  return (
    <Container>
      <RoundedBox>
        <Logo src="/logo.png" />
        <Title>ANTHILL</Title>
        <form>
          <div tw="mt-[39px]">
            <Input iconType="user" placeholder="Username" />
          </div>
          <div tw="mt-[45px]">
            <Input iconType="lock" placeholder="Password" type="password" />
          </div>
          <div tw="mt-[66px]">
            <Button label="Login" type="submit" />
          </div>
        </form>
        <div tw="flex justify-between mt-[21px]">
          <LinkButton label="Create account" />
          <LinkButton label="Forgot password?" />
        </div>
      </RoundedBox>
    </Container>
  )
}
