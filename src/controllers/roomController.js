const Database= require('../db/config')

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        let roomId = ''
        let isRoom = true

        while (isRoom) {
            // Gerar número da sala
            // Generate room number

            for (var i = 0; i < 6; i ++) {
                roomId += Math.floor(Math.random() * 10).toString()
            }

            // Verificar se o número da sala já existe
            // Check if the room number already exists

            const roomsExistIds = await db.all(`SELECT * FROM rooms`)

            isRoom = roomsExistIds.some(roomsExistId => roomsExistId === roomId)

            if (! isRoom) {
                // Insere a sala no banco
                // Insert the room into the bank
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`)
            }
        }      

        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}