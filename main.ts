
/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */


//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: 在此处描述您的函数
     * @param s 在此处描述参数, eg: "Hello"
     */
    //% block="Send AT command %s to WIFI module"
    export function foo(s: string): void {
        serial.writeString(s + "\u000D" + "\u000A")
    }

}
