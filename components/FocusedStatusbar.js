import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusbar = (props) => {
    const isFocused = useIsFocused()
  return (
    isFocused? <StatusBar animated={true} {...props} /> : null
  )
}

export default FocusedStatusbar