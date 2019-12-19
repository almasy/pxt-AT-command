//% weight=100 color=#0fbc11 icon="" block="AT"
namespace AT {
    //% block="set UART |RX %tx|TX %rx|Baud rate %baudrate"
    //% tx.defl=SerialPin.P8
    //% rx.defl=SerialPin.P12
    export function initUART(tx: SerialPin, rx: SerialPin, baudrate: BaudRate) {
        serial.redirect(
            tx,
            rx,
            baudrate
        )
    }
    //% block="Send AT command %s to UART"
    export function sendAT(s: string): void {
        serial.writeString(s + "\u000D" + "\u000A")
    }
}