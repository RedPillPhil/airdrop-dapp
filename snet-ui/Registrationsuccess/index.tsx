import React from 'react';
import Typography from '@mui/material/Typography';
import GradientBox from '../../snet-ui/GradientBox';
import { Box } from '@mui/system';
// import Image from "next/image";
// import success from "public/images/success.png";

import InfoIcon from '@mui/icons-material/Info';
import { Container, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { SUCCESSFUL_REGISTRATION_STRING } from 'utils/airdropWindows';
import { LoadingButton } from '@mui/lab';
import History from 'snet-ui/History';
import colors from '../Theme/colors';

type RegistrationSuccessProps = {
  onViewSchedule: () => void;
  onViewRules: () => void;
  onViewNotification: () => void;
  windowId: number;
  totalWindows: number;
  claimStartDate: string;
};

export default function Success({
  onViewSchedule,
  onViewRules,
  onViewNotification,
  windowId,
  totalWindows,
  claimStartDate,
}: RegistrationSuccessProps) {
  return (
    <Box>
      <GradientBox sx={{ py: 2, pb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
            <img src="/images/success.png" alt="SingularityNET" height="137px" width="137px" />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', pb: 3 }}>
          <Box>
            <Typography align="center" variant="h3" pb={1.5} sx={{ color: `${colors.GOLDEN_YELLOW}` }}>
              Congratulations
            </Typography>
            <Box>
              <Typography align="center" fontWeight="bold" variant="h5" color="text.secondary" pb={1.5}>
                {SUCCESSFUL_REGISTRATION_STRING}
              </Typography>
            </Box>
            <Box>
              <Typography align="center" variant="body2" color="textAdvanced.secondary" fontWeight="500">
                Registration ID: {}
              </Typography>
            </Box>
            <Box
              sx={{
                my: 3,
                mx: 28,
                display: 'flex',
                border: 0.3,
                bgcolor: 'note.main',
                borderRadius: 1,
                borderColor: 'note.main',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  my: 1,
                  py: 1,
                  m: 1,
                }}
              >
                <InfoIcon color="primary" />
                <Typography variant="body2" color="textAdvanced.primary">
                  You can start claiming your tokens from {claimStartDate}. Please use 'Registration ID' when contacting
                  support.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Stack spacing={3} direction="row" justifyContent="center">
                <LoadingButton
                  variant="outlined"
                  color="bgHighlight"
                  onClick={onViewNotification}
                  sx={{ textTransform: 'capitalize' }}
                >
                  <Typography color="text.secondary" fontSize="14px" fontWeight="600">
                    Get Notifications
                  </Typography>
                </LoadingButton>
                <Button
                  variant="outlined"
                  color="bgHighlight"
                  onClick={onViewSchedule}
                  sx={{ textTransform: 'capitalize' }}
                >
                  <Typography color="text.secondary" fontSize="14px" fontWeight="600">
                    View Schedule
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  color="bgHighlight"
                  onClick={onViewRules}
                  sx={{ textTransform: 'capitalize' }}
                >
                  <Typography color="text.secondary" fontSize="14px" fontWeight="600">
                    View Rules
                  </Typography>
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </GradientBox>
    </Box>
  );
}
