import React from 'react';
import { Box, Text, Anchor, Heading, Paragraph } from 'grommet';

function PrivacyPage() {
  return (
    <Box pad='medium' flex='grow' fill='vertical' align='center' gap='medium' justify='start' style={{ minHeight: 'calc(100vh - 65pt)' }} >
      <Text color='appBarBackground' weight='700' size='300%' textAlign='center' >Quick Flip Privacy Policy</Text>
      <Box align='center' justify='start'>
        <Text color='appBarBackground' weight='700' size='200%' textAlign='center' >What information do you collect?</Text>
        <Text color='appBarBackground'>Nothing. Flip doesn't even need the internet.</Text>
        <Text color='appBarBackground' weight='700' size='200%' textAlign='center' >Do we keep any information about you?</Text>
        <Text color='appBarBackground'>No. We didn't have any to begin with.</Text>
        <Text color='appBarBackground' weight='700' size='200%' textAlign='center' >Why not?</Text>
        <Text color='appBarBackground'>Flip's Developer doesn't need or want it.</Text>
      </Box>
      <Box>
        <Text color='appBarBackground' weight='700' size='300%' textAlign='center' >Extensive Flip Privacy Policy</Text>
        <Paragraph color='appBarBackground' fill>
          By using Flip, you(hereunto known as User) agree to not hold liable any affiliated parties, including but not limited to the developer, for collecting no information. By providing Flip, a free service, the developer and associates agree to not collect or store any personal data, or any data that may be linked back to User. No data will be exchanged for profit, or progress of any individual or group, as no information is collected.
        </Paragraph>
      </Box>
    </Box>
  );
}

export default PrivacyPage;