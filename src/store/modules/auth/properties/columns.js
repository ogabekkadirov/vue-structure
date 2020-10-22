import i18n from '@/lang'

export const columns = {
    id: {
        show: true,
        title: i18n.t('messages.id'),
        sortable: true,
        column: 'id'
    },
    name: {
        show: true,
        title: i18n.t('messages.name'),
        sortable: true,
        column: 'name'
    },
    serial_number: {
        show: true,
        title: i18n.t('messages.serial_number'),
        sortable: true,
        column: 'serial_number'
    },
    ip_address: {
        show: true,
        title: i18n.t('messages.ip_address_device'),
        sortable: true,
        column: 'ip_address'
    },
    status: {
        show: true,
        title: i18n.t('messages.status'),
        sortable: true,
        column: 'status'
    },
    settings: {
        show: true,
        title: i18n.t('messages.settings'),
        sortable: true,
        column: 'settings'
    },
}