import {
  Box,
  AccessNote,
  Text,
  Icon,
  IconWrapper,
} from './VerifyFeedback.styled';
import { ReactComponent as SuccessIcon } from '../../../assets/images/verification/success.svg';

export default function VerifyFeedback() {
  return (
    <Box>
      <AccessNote>
        <Text>Thunk you for registration!</Text>
        <Icon>
          <IconWrapper>
            <SuccessIcon />
          </IconWrapper>
        </Icon>
      </AccessNote>
    </Box>
  );
}
