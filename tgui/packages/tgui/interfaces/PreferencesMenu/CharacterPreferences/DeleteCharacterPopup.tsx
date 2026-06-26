import { useEffect, useState } from 'react';
import { useBackend } from 'tgui/backend';
import { useTranslation } from 'tgui/i18n/useTranslation';
import { Box, Button, Modal, Stack } from 'tgui-core/components';

import type { PreferencesMenuData } from '../types';

type Props = {
  close: () => void;
};

export function DeleteCharacterPopup(props: Props) {
  const { data, act } = useBackend<PreferencesMenuData>();
  const { t } = useTranslation();
  const [secondsLeft, setSecondsLeft] = useState(3);

  const { close } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((current) => current - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Modal>
      <Stack vertical textAlign="center" align="center">
        <Stack.Item>
          <Box fontSize="3em">{t('Wait!')}</Box>
        </Stack.Item>

        <Stack.Item maxWidth="300px">
          <Box>
            {t(
              "You're about to delete {name} forever. Are you sure you want to do this?",
              {
                name: data.character_preferences.names[data.name_to_use],
              },
            )}
          </Box>
        </Stack.Item>

        <Stack.Item>
          <Stack fill>
            <Stack.Item>
              {/* Explicit width so that the layout doesn't shift */}
              <Button
                color="danger"
                disabled={secondsLeft > 0}
                width="80px"
                onClick={() => {
                  act('remove_current_slot');
                  close();
                }}
              >
                {secondsLeft <= 0
                  ? t('Delete')
                  : t('Delete ({seconds})', { seconds: String(secondsLeft) })}
              </Button>
            </Stack.Item>

            <Stack.Item>
              <Button onClick={close}>{t("No, don't delete")}</Button>
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    </Modal>
  );
}
