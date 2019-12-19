//% weight=100 color=#0fbc11 icon="\uf1eb" block="ATcommand"
namespace WIFI_AT {
    //% block="Send AT command %s to WIFI module"
    export function foo(s: string): void {
        serial.writeString(s + "\u000D" + "\u000A")
    }

}
