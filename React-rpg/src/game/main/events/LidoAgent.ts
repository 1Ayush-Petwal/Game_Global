import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'LIDO_AGENT',
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female')
    }
    async onAction(player: RpgPlayer) {
        // await player.showText('Hi, I am a Lido AI - agent', {
        //     talkWith: this
        // })
        const gui = player.gui('chat')
        gui.open({ hello: 'world' })
        // gui.on('accept', () => {
        //     player.allRecovery()
        // })
        // player.gold += 10
    }
}