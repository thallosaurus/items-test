import { RouterLink } from 'vue-router';
import { h } from 'vue'
import { Home16Regular } from '@vicons/fluent'
import { DataObjectFilled, LogInFilled, ManageAccountsSharp } from '@vicons/material';
import { User } from '@vicons/fa';
import { TestPipe } from '@vicons/tabler';
import { NIcon } from 'naive-ui'

function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

export const menuOptions = [
    {
        key: "home",
        label: () => h(RouterLink, {
            to: "/"
        }, () => 'Home'),
        icon: renderIcon(Home16Regular),
    },
    {
        key: "test",
        label: () => h(RouterLink, {
            to: "/test"
        }, () => 'Test'),
        icon: renderIcon(TestPipe),
    },
    {
        key: "items",
        label: () => h(RouterLink, {
            to: "/items"
        }, () => 'Items'),
        icon: renderIcon(DataObjectFilled),
    },
    {
        key: "users",
        label: () => h(RouterLink, {
            to: "/users"
        }, () => 'Users'),
        icon: renderIcon(User),
    },
];