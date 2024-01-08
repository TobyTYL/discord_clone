import { Menu } from "lucide-react"


import { Button } from "@/components/ui/button";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ServerSidebar } from "@/components/server/server-sidebar";

export const MobileToggle = ({
    serverId
}: {
    serverId: string;
}) => {
    return (

        <div className="w-[72px]">
            <NavigationSidebar />
        </div>

    )
}