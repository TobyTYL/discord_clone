import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = () => {
    const { userId } = auth();
    if (!userId) throw new Error("Unauthorized");
    return { userId: userId };
}

export const ourFileRouter = {
    serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        //配置了两种文件上传路由
        // serverImage 路由：只允许上传图片，最大文件大小为 4MB，最大文件数量为 1
        .middleware(() => handleAuth())
        .onUploadComplete(() => { }),
    messageFile: f(["image", "pdf"])
        // messageFile 路由：处理图像和 PDF 文件的上传。
        .middleware(() => handleAuth())
        .onUploadComplete(() => { })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;