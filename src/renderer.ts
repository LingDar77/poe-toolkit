import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark();
const toggleDark = useToggle(isDark);


const dark = () =>
{
    console.log('dark');
}

export { dark }