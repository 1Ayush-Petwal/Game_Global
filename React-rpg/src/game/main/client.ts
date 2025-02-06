import { RpgClient, RpgModule } from '@rpgjs/client'
import chat from './chat/client/gui/chat.vue'

@RpgModule<RpgClient>({
    gui: [
        {
            // id: 'rpg-chat',
            component: chat
        }
    ]
})
export default class RpgClientEngine { }