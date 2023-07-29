export const catogories = [
    {
        id: 1,
        title: 'Education',
        icon: await import('../assets/education.png').then((module) => module.default),
        color: 'green'
    },
    {
        id: 2,
        title: 'Healthcare',
        icon: await import('../assets/healthcare.png').then((module) => module.default),
        color: 'blue'
    },
    {
        id: 3,
        title: 'Shopping',
        icon: await import('../assets/shopping.png').then((module) => module.default),
        color: 'red'
    },
    {
        id: 4,
        title: 'Food',
        icon: await import('../assets/food.png').then((module) => module.default),
        color: 'yellow'
    },
    {
        id: 5,
        title: 'Other',
        icon: await import('../assets/other.png').then((module) => module.default),
        color: 'pink'
    }
]