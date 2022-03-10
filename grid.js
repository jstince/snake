const gridWidth = 37
const gridHeight = 27

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * gridWidth) + 1,
        y: Math.floor(Math.random() * gridHeight) + 1,
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > gridWidth || position.y < 1 || position.x > gridHeight
    )
}