import type { ReactNode } from "@lynx-js/react";
import type { CSSProperties } from "@lynx-js/types";
import "./SafeArea.scss";

export default function SafeArea({
    children,
    top = false,
    bottom = false,
    left = false,
    right = false,
    style }: {
        children: ReactNode;
        top?: boolean,
        bottom?: boolean,
        left?: boolean,
        right?: boolean,
        style?: CSSProperties
    }) {
        
        const isIOS = SystemInfo.platform === "iOS";
        const pixelDensity = SystemInfo.pixelRatio || 1;

        console.log("pixelDenisity:"+ pixelDensity);
        console.log("isIos:"+ isIOS);
     
        const defProp = {
            baseTop: isIOS ? 44 : 24,     // iOS solitamente richiede un padding superiore maggiore
            baseBottom: isIOS ? 34   : 48,  // iOS ha spesso un padding inferiore specifico (area home indicator)
            baseLeft: 0,
            baseRight: 0,
          };

          const safeAreaStyle = {
            padding-top: defProp.baseTop * pixelDensity,
            padding-bottom: defProp.baseBottom * pixelDensity,
            padding-left: defProp.baseLeft * pixelDensity,
            padding-right: defProp.baseRight * pixelDensity,
            ...style,
          };
    return (
        <view style="safeAreaStyle">
            {children}
        </view>
    );
}