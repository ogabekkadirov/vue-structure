import { model } from './properties/model'
import { columns } from './properties/columns'
import { filter } from './properties/filter'
import { rules } from './properties/rules'
import { pagination } from './../properties/pagination'
import { sort } from './../properties/sort'
import { links } from './properties/links'
export const state = {
    items: [],
    item: JSON.parse(JSON.stringify(model)),
    columns: columns,
    filter: JSON.parse(JSON.stringify(filter)),
    rules: rules,
    sort: JSON.parse(JSON.stringify(sort)),
    links: links,
    permissions: [],
    pagination: JSON.parse(JSON.stringify(pagination)),
}