import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    base_url: "https://aha.qingy.ing",
    mount: {
        manual: false,
        page_url: 'https://polym.notion.site/Notion-Hugo-2742875f4bfe80719072ee4735836022',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '2742875f4bfe80719072ee4735836022',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: '2742875f4bfe81028a94f918ade28f0e',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
