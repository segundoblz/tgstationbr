import { Button, NoticeBox, Section, Table } from 'tgui-core/components';
import { formatMoney } from 'tgui-core/format';
import { decodeHtmlEntities } from 'tgui-core/string';

import { useBackend } from '../../backend';
import { useTranslation } from '../../i18n/useTranslation';
import type { CargoData } from './types';

export function CargoRequests(props) {
  const { act, data } = useBackend<CargoData>();
  const { t } = useTranslation();
  const { requests = [], requestonly, can_send, can_approve_requests, displayed_currency_name} = data;

  return (
    <Section fill scrollable>
      {requests.length === 0 && <NoticeBox success>{t('No Requests')}</NoticeBox>}
      {requests.length > 0 && (
        <Table>
          <Table.Row header color="gray">
            <Table.Cell>ID</Table.Cell>
            <Table.Cell>{t('Object')}</Table.Cell>
            <Table.Cell>{t('Orderer')}</Table.Cell>
            <Table.Cell>{t('Reason')}</Table.Cell>
            <Table.Cell>{t('Account')}</Table.Cell>
            <Table.Cell>{t('Cost')}</Table.Cell>
            {(!requestonly || !!can_send) && !!can_approve_requests && (
              <Table.Cell>{t('Actions')}</Table.Cell>
            )}
          </Table.Row>

          {requests.map((request) => (
            <Table.Row key={request.id} className="candystripe" color="label">
              <Table.Cell collapsing>#{request.id}</Table.Cell>
              <Table.Cell>{request.object}</Table.Cell>
              <Table.Cell>
                <b>{request.orderer}</b>
              </Table.Cell>
              <Table.Cell color="lightgray" width="25%">
                <i>{decodeHtmlEntities(request.reason)}</i>
              </Table.Cell>
              <Table.Cell collapsing>
                {request.account}
              </Table.Cell>
              <Table.Cell collapsing color="gold">
                {formatMoney(request.cost)}{displayed_currency_name}
              </Table.Cell>
              {(!requestonly || !!can_send) && !!can_approve_requests && (
                <Table.Cell collapsing>
                  <Button
                    icon="check"
                    color="good"
                    onClick={() =>
                      act('approve', {
                        id: request.id,
                      })
                    }
                  />
                  <Button
                    icon="times"
                    color="bad"
                    onClick={() =>
                      act('deny', {
                        id: request.id,
                      })
                    }
                  />
                </Table.Cell>
              )}
            </Table.Row>
          ))}
        </Table>
      )}
    </Section>
  );
}
