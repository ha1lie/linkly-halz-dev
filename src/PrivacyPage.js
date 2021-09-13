import React from 'react';
import { Box, Text, Anchor, Heading, Paragraph } from 'grommet';

function PrivacyPage() {
  return (
    <Box pad='medium' flex='grow' fill='vertical' align='center' gap='medium' justify='start' style={{ minHeight: 'calc(100vh - 65pt)' }} >
      <Text color='appBarBackground' weight='700' size='300%' textAlign='center' >Quick Linkly Privacy Policy</Text>
      <Box align='center' justify='start'>
        <Text color='appBarBackground' weight='700' size='200%' textAlign='center'>What information do you collect?</Text>
        <Text color='appBarBackground'>Nothing. Linkly doesn't even need the internet.</Text>
        <Text color='appBarBackground' weight='700' size='200%' textAlign='center' >Do we keep any information about you?</Text>
        <Text color='appBarBackground'>No. We didn't have any to begin with.</Text>
        <Text color='appBarBackground' weight='700' size='200%' textAlign='center' >Why not?</Text>
        <Text color='appBarBackground'>Linkly's Developer doesn't need or want it.</Text>
      </Box>
      <Box>
        <Text color='appBarBackground' weight='700' size='300%' textAlign='center' >Extensive Linkly Privacy Policy</Text>
        <Paragraph color='appBarBackground' fill>
          By using Linkly(read "app"), you(read "user"), agree to not hold liable Hallie(read "developer") for any issues which you may claim to be at the fault of the app. The app is not waranteed, and may not function correctly on all devices(Though you can blame Xcode for that). Any issues can be channeled through any contact points of the developer, and those not shared will not be acknowledged in any further proceedings. The developer promises not to stalk you from the no information the developer gains off of you. You're not worth stalking. The developer agrees to provide the best service possible, though this will not include fixing unrelated issues because you can't rotate a <Anchor href='https://flip.halz.dev' target='_blank' style={{ textDecoration: 'none' }}>PDF</Anchor>. Not my problem. The app is open source, and all contained material is subject to according Copyright notices. All content is property of the developer, with the exception of the library found in the app's documentation. Don't steal work.
        </Paragraph>
      </Box>
    </Box>
  );
}

export default PrivacyPage;