import { useState } from 'react';
import { Box, Icon, Input, Section } from 'tgui-core/components';
import { createSearch } from 'tgui-core/string';

import { useBackend } from '../backend';
import { useTranslation } from '../i18n/useTranslation';
import { NtosWindow } from '../layouts';

export const NtosRecords = (props) => {
  const { act, data } = useBackend();
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const { mode, records } = data;

  const isMatchingSearchTerms = createSearch(searchTerm);

  return (
    <NtosWindow width={600} height={800}>
      <NtosWindow.Content scrollable>
        <Section textAlign="center">
          {t('NANOTRASEN PERSONNEL RECORDS (CLASSIFIED)')}
        </Section>
        <Section>
          <Input
            placeholder={t('Filter results...')}
            value={searchTerm}
            fluid
            textAlign="center"
            onChange={setSearchTerm}
            expensive
          />
        </Section>
        {mode === 'security' &&
          records.map((record) => (
            <Section
              key={record.id}
              hidden={
                !(
                  searchTerm === '' ||
                  isMatchingSearchTerms(
                    record.name +
                      ' ' +
                      record.rank +
                      ' ' +
                      record.species +
                      ' ' +
                      record.gender +
                      ' ' +
                      record.age +
                      ' ' +
                      record.fingerprint,
                  )
                )
              }
            >
              <Box bold>
                <Icon name="user" mr={1} />
                {record.name}
              </Box>
              <br />
              {t('Rank')}: {record.rank}
              <br />
              {t('Species')}: {record.species}
              <br />
              {t('Gender')}: {record.gender}
              <br />
              {t('Age')}: {record.age}
              <br />
              {t('Fingerprint Hash')}: {record.fingerprint}
              <br />
              <br />
              {t('Criminal Status')}: {record.wanted || t('DELETED')}
            </Section>
          ))}
        {mode === 'medical' &&
          records.map((record) => (
            <Section
              key={record.id}
              hidden={
                !(
                  searchTerm === '' ||
                  isMatchingSearchTerms(
                    record.name +
                      ' ' +
                      record.bloodtype +
                      ' ' +
                      record.mental_status +
                      ' ' +
                      record.physical_status,
                  )
                )
              }
            >
              <Box bold>
                <Icon name="user" mr={1} />
                {record.name}
              </Box>
              <br />
              {t('Bloodtype')}: {record.bloodtype}
              <br />
              {t('Minor Disabilities')}: {record.mi_dis}
              <br />
              {t('Major Disabilities')}: {record.ma_dis}
              <br />
              <br />
              {t('Notes')}: {record.notes}
              <br />
              {t('Notes Contd')}: {record.cnotes}
            </Section>
          ))}
      </NtosWindow.Content>
    </NtosWindow>
  );
};
