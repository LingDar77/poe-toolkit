

import { ref } from 'vue'

export let config = {
    isPanelCollapsed: true,
    enableAnimate: true,
};

export let parseConfig = () =>
{
    const local = localStorage.getItem('config');
    if (local)
        config = JSON.parse(local);
}

export let saveConfig = () =>
{
    localStorage.setItem('config', JSON.stringify(config));
}