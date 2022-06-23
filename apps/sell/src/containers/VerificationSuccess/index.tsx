import { useTitle } from '@bridgeup/common/hooks';
import { Box } from '@mui/material';
export function ResendVerification() {
  useTitle('Welcome to BridgeUp - BridgeUp');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="verify-account mt-36">
        <div className="text-32 text-bold">Welcome To BridgeUp</div>
        <div className="text-14 mt-5">
          Thanks for submitting your company details. You will hear back from us
          within the next 2 business days.
          <br />
          Have questions? Write to us at <strong>contact@bridgeup.com.</strong>
        </div>
      </div>
    </Box>
  );
}

export default ResendVerification;
