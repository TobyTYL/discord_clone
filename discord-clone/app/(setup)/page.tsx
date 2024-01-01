import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
    const profile = await initialProfile();
    // 根据用户的个人资料 ID 查询用户所属的第一个服务器。
    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });
    // 如果找到了服务器（即 server 存在），则执行 redirect 函数，将用户重定向到该服务器的页面（例如 /servers/{server.id}）。
    // 否则，显示 InitialModal 组件。
    if (server) {
        return redirect(`/servers/${server.id}`);
    }
    return <InitialModal />;
}

export default SetupPage;