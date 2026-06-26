import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Input,
  NoticeBox,
  RestrictedInput,
  Section,
  Stack,
  Table,
  Tooltip,
} from 'tgui-core/components';

import { useBackend } from '../backend';
import { useTranslation } from '../i18n/useTranslation';
import { NtosWindow } from '../layouts';

type Data = {
  name: string;
  owner_token: string;
  money: number;
  transaction_list: Transactions[];
  wanted_token: string;
};

type Transactions = {
  adjusted_money: number;
  reason: string;
};

export const NtosPay = (props) => {
  return (
    <NtosWindow width={495} height={655}>
      <NtosWindow.Content>
        <NtosPayContent />
      </NtosWindow.Content>
    </NtosWindow>
  );
};

export const NtosPayContent = (props) => {
  const { data } = useBackend<Data>();
  const { t } = useTranslation();
  const { name } = data;

  if (!name) {
    return (
      <NoticeBox>
        {t(
          'You need to insert your ID card into the card slot in order to use this application.',
        )}
      </NoticeBox>
    );
  }

  return (
    <Stack fill vertical>
      <Stack.Item>
        <Introduction />
      </Stack.Item>
      <Stack.Item>
        <TransferSection />
      </Stack.Item>
      <Stack.Item grow>
        <TransactionHistory />
      </Stack.Item>
    </Stack>
  );
};

/** Displays the user's name and balance. */
const Introduction = (props) => {
  const { data } = useBackend<Data>();
  const { t } = useTranslation();
  const { name, owner_token, money } = data;
  return (
    <Section textAlign="center">
      <Table>
        <Table.Row>{t('Hi, {name}.', { name })}</Table.Row>
        <Table.Row>
          {t('Your pay token is {token}.', { token: owner_token })}
        </Table.Row>
        <Table.Row>
          {money === 1
            ? t('Account balance: {money} credit', { money: String(money) })
            : t('Account balance: {money} credits', { money: String(money) })}
        </Table.Row>
      </Table>
    </Section>
  );
};

/** Displays the transfer section. */
const TransferSection = (props) => {
  const { act, data } = useBackend<Data>();
  const { t } = useTranslation();
  const { money, wanted_token } = data;

  const [token, setToken] = useState('');
  const [moneyToSend, setMoneyToSend] = useState(1);
  const [nameToToken, setNameToToken] = useState('');
  const [moneyToSendIsValid, setMoneyToSendIsValid] = useState(true);

  return (
    <Stack>
      <Stack.Item>
        <Section title={t('Transfer Money')}>
          <Box>
            <Tooltip
              content={t(
                'Enter the pay token of the account you want to transfer credits to.',
              )}
              position="top"
            >
              <Input
                placeholder={t('Pay Token')}
                width="190px"
                onChange={setToken}
              />
            </Tooltip>
          </Box>
          <Tooltip
            content={t('Enter amount of credits to transfer.')}
            position="top"
          >
            <RestrictedInput
              width="83px"
              minValue={1}
              maxValue={money}
              onChange={setMoneyToSend}
              onValidationChange={setMoneyToSendIsValid}
              value={moneyToSend}
            />
          </Tooltip>
          <Button
            disabled={!moneyToSendIsValid}
            onClick={() =>
              act('Transaction', {
                token: token,
                amount: moneyToSend,
              })
            }
          >
            {t('Send credits')}
          </Button>
        </Section>
      </Stack.Item>
      <Stack.Item>
        <Section title={t('Get Token')} width="270px" height="98px">
          <Box>
            <Input
              placeholder={t('Full name of account.')}
              width="190px"
              onChange={setNameToToken}
            />
            <Button
              onClick={() =>
                act('GetPayToken', {
                  wanted_name: nameToToken,
                })
              }
            >
              {t('Get it')}
            </Button>
          </Box>
          <Divider hidden />
          <Box nowrap>{wanted_token}</Box>
        </Section>
      </Stack.Item>
    </Stack>
  );
};

/** Displays the transaction history. */
const TransactionHistory = (props) => {
  const { data } = useBackend<Data>();
  const { t } = useTranslation();
  const { transaction_list = [] } = data;

  return (
    <Section fill title={t('Transaction History')}>
      <Section fill scrollable title={<TableHeaders />}>
        <Table>
          {transaction_list.map((log, index) => (
            <Table.Row
              key={index}
              className="candystripe"
              color={log.adjusted_money < 1 ? 'red' : 'green'}
            >
              <Table.Cell width="100px">
                {log.adjusted_money > 1 ? '+' : ''}
                {log.adjusted_money}
              </Table.Cell>
              <Table.Cell textAlign="center">{log.reason}</Table.Cell>
            </Table.Row>
          ))}
        </Table>
      </Section>
    </Section>
  );
};

/** Renders a set of sticky headers */
const TableHeaders = (props) => {
  const { t } = useTranslation();
  return (
    <Table>
      <Table.Row>
        <Table.Cell color="label" width="100px">
          {t('Amount')}
        </Table.Cell>
        <Table.Cell color="label" textAlign="center">
          {t('Reason')}
        </Table.Cell>
      </Table.Row>
    </Table>
  );
};
