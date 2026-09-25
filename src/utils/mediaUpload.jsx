import { createClient } from "@supabase/supabase-js";

const anonKey = "sb_publishable_OP5zayot03t1fuNmk8x75Q_IyNJUeS-";
const supabaseUrl = "https://rbmiuvlczkdxsaiewlxr.supabase.co";

const supabase = createClient(supabaseUrl, anonKey);

export default async function mediaUpload(file) {
    if (!file) {
        throw new Error("No file selected");
    }

    const timestamp = new Date().getTime();
    const fileName = timestamp + "-" + file.name;

    const { error } = await supabase.storage
        .from("images")
        .upload(fileName, file, {
            upsert: false,
            cacheControl: "3600",
        });

    if (error) {
        console.error("Supabase upload error:", error);
        throw error;
    }

    const { data } = supabase.storage
        .from("images")
        .getPublicUrl(fileName);

    return data.publicUrl;
}