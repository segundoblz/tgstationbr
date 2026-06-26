import { Box, Input, NoticeBox, Section } from 'tgui-core/components';
import type { BooleanLike } from 'tgui-core/react';

import { useBackend } from '../backend';
import { useTranslation } from '../i18n/useTranslation';
import { NtosWindow } from '../layouts';

type Data = {
  valid_id: BooleanLike;
  redeemed_coupons: CouponData[];
  printed_coupons: CouponData[];
};

type CouponData = {
  goody: string;
  discount: number;
};

export const NtosCouponMaster = (props) => {
  const { act, data } = useBackend<Data>();
  const { t } = useTranslation();
  const { valid_id, redeemed_coupons = [], printed_coupons = [] } = data;
  return (
    <NtosWindow width={400} height={400}>
      <NtosWindow.Content scrollable>
        {!valid_id ? (
          <NoticeBox danger>
            {t('No valid bank account detected. Insert a valid ID.')}
          </NoticeBox>
        ) : (
          <>
            <NoticeBox info>
              {t(
                'You can print redeemed coupons by right-clicking a photocopier.',
              )}
            </NoticeBox>
            <Input
              fontSize={1.2}
              placeholder={t('Insert your coupon code here')}
              onEnter={(value) =>
                act('redeem', {
                  code: value,
                })
              }
            />
            <Section title={t('Redeemed Coupons')}>
              {redeemed_coupons.map((coupon, index) => (
                <Box key={index} className="candystripe">
                  {coupon.goody} (
                  {t('{discount}% OFF', { discount: String(coupon.discount) })})
                </Box>
              ))}
            </Section>
            <Section title={t('Printed Coupons')}>
              {printed_coupons.map((coupon, index) => (
                <Box key={index} className="candystripe">
                  {coupon.goody} (
                  {t('{discount}% OFF', { discount: String(coupon.discount) })})
                </Box>
              ))}
            </Section>
          </>
        )}
      </NtosWindow.Content>
    </NtosWindow>
  );
};
