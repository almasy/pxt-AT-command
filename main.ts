//% weight=100 color=#0fbc11 icon="" block="AT"
namespace AT {
    //% block="Send AT command %s to serial"
    export function sendAT(s: string): void {
        serial.writeString(s + "\u000D" + "\u000A")
    }
    //% block="set UART |RX %tx|TX %rx|Baud rate %baudrate"
    //% tx.defl=SerialPin.P8
    //% rx.defl=SerialPin.P12
    export function initWIFI(tx: SerialPin, rx: SerialPin, baudrate: BaudRate) {
        serial.redirect(
            tx,
            rx,
            baudrate
        )

}
}