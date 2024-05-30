import {useState} from 'react'

import {
  DivContainer,
  PasswordContainer,
  HeadingEle,
  ParaEle,
  InputEle,
  ErrorPara,
} from './styledComponents'

const PasswordValidator = () => {
  const [input, setInput] = useState('')
  const [para, setPara] = useState(
    'Your password must be at least 8 characters',
  )

  const onChangeInput = event => {
    setInput(event.target.value)
    setPara(input.length > 8 ? '' : para)
  }

  return (
    <DivContainer>
      <div>
        <PasswordContainer>
          <HeadingEle>Password Validator</HeadingEle>
          <ParaEle>Check how strong and secure is your password</ParaEle>
          <InputEle type="password" value={input} onChange={onChangeInput} />
          <ErrorPara>{para}</ErrorPara>
        </PasswordContainer>
      </div>
    </DivContainer>
  )
}

export default PasswordValidator
