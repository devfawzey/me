type List = {
    text: string,
    route: string,
    icon?: string,
    query?: any
}


// {
// "title": "Commerce-Hope",
//     "type": "ecommerce",
//         "tags": [
//             {
//                 "title": "NuxtJs",
//                 "color": "indigo"
//             },
//             {
//                 "title": "Ecommerce",
//                 "color": "primary"
//             }
//         ],
//             "src": "15",
//                 "link": "https://commerce-hope.vercel.app/"
// },
export interface WorkProjects {
    title: string,
    type: string,
    tags: Tag[],
    src: string,
    link: string,
    show?: boolean,
    made_with?: string
}

export type Tag = {
    title: string,
    color: string
}