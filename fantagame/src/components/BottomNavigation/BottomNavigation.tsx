import './BottomNavigation.css'
import type { ReactNode } from "@lynx-js/react";

interface NavigationItem {
    children: ReactNode;
}


export function BottomNavigation({ children }: NavigationItem) {
    return (
        <view className="BottomNavigation">
            {children}
        </view>
    );
}



