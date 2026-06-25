import { Box, NoticeBox, Section, Stack } from 'tgui-core/components';

import { useTranslation } from '../../i18n/useTranslation';

const ORDER_TEXT = `Each department on the station will order crates from their own personal consoles. These orders are ENTIRELY FREE! They do not come out of cargo's budget, and rather put the consoles on cooldown. So here's where you come in: The ordered crates will show up on your supply console, and you need to deliver the crates to the orderers. You'll actually be paid the full value of the department crate on delivery if the crate was not tampered with, making the system a good source of income.`;

const DISPOSAL_TEXT = `In addition to MULEs and hand-deliveries, you can also make use of the disposals mailing system. Note that a break in the disposal piping could cause your package to be lost (this hardly ever happens), so this is not always the most secure ways to deliver something. You can wrap up a piece of paper and mail it the same way if you (or someone at the desk) wants to mail a letter.`;

export function CargoHelp(props) {
  const { t } = useTranslation();

  return (
    <Stack fill vertical>
      <Stack.Item grow>
        <Section fill scrollable>
          <Section color="label" title={t('Department Orders')}>
            {t(ORDER_TEXT)}
            <br />
            <br />
            {t(
              'Examine a department order crate to get specific details about where the crate needs to go.',
            )}
          </Section>
          <Section title="MULEbots">
            <Box color="label">
              {t(
                'MULEbots are slow but loyal delivery bots that will get crates delivered with minimal technician effort required. It is slow, though, and can be tampered with while en route.',
              )}
            </Box>
            <br />
            <Box bold color="green">
              {t('Setting up a MULEbot is easy:')}
            </Box>
            <b>1.</b> {t('Drag the crate you want to deliver next to the MULEbot.')}
            <br />
            <b>2.</b>{' '}
            {t('Drag the crate on top of MULEbot. It should load on.')}
            <br />
            <b>3.</b> {t('Open your PDA.')}
            <br />
            <b>4.</b> {t('Click')} <i>Delivery Bot Control</i>.<br />
            <b>5.</b> {t('Click')} <i>Scan for Active Bots</i>.<br />
            <b>6.</b> {t('Choose your MULE.')}
            <br />
            <b>7.</b> {t('Click on')} <i>Destination: (set)</i>.<br />
            <b>8.</b> {t('Choose a destination and click OK.')}
            <br />
            <b>9.</b> {t('Click')} <i>Proceed</i>.
          </Section>
          <Section title={t('Disposals Delivery System')}>
            <Box color="label">{t(DISPOSAL_TEXT)}</Box>
            <br />
            <Box bold color="green">
              {t('Using the Disposals Delivery System is even easier:')}
            </Box>
            <b>1.</b> {t('Wrap your item/crate in packaging paper.')}
            <br />
            <b>2.</b> {t('Use the destinations tagger to choose where to send it.')}
            <br />
            <b>3.</b> {t('Tag the package.')}
            <br />
            <b>4.</b>{' '}
            {t('Stick it on the conveyor and let the system handle it.')}
            <br />
          </Section>
        </Section>
      </Stack.Item>
      <Stack.Item>
        <NoticeBox textAlign="center" info mb={0}>
          {t('Pondering something not included here? When in doubt, ask the QM!')}
        </NoticeBox>
      </Stack.Item>
    </Stack>
  );
}
