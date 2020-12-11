import { useTranslation } from 'react-i18next'
import { Item } from 'react-native-picker-select'

export default () => {
  const { t } = useTranslation()
  return [
    {
      label: t('more.sections.security.auth_intervals.immediately'),
      value: 0,
    },
    {
      label: t('more.sections.security.auth_intervals.after_1_min'),
      value: 60,
    },
    {
      label: t('more.sections.security.auth_intervals.after_5_min'),
      value: 60 * 5,
    },
    {
      label: t('more.sections.security.auth_intervals.after_15_min'),
      value: 60 * 15,
    },
    {
      label: t('more.sections.security.auth_intervals.after_1_hr'),
      value: 60 * 60,
    },
    {
      label: t('more.sections.security.auth_intervals.after_4_hr'),
      value: 60 * 60 * 4,
    },
  ] as Item[]
}