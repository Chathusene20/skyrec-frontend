import { createClient } from "@supabase/supabase-js"

const anonKey= "sb_publishable_OP5zayot03t1fuNmk8x75Q_IyNJUeS-"
const supabaseUrl="https://rbmiuvlczkdxsaiewlxr.supabase.co"

const supabase= createClient(supabaseUrl,anonKey);

/*
 supabase.storage.from("images").upload(file.name,  file , {
            upsert: false,
            casheControl: '3600',
          }).then (
            
                ()=>{
                    const publicUrl = supabase.storage.from("images").getPublicUrl(file.name).data.publicUrl
                    console.log (publicUrl);
                }
            
          )
*/

export default function mediaUpload(file){
    return new Promise((resolve,reject)=> {
           if(file==null){
            reject ("No file selected ");
           }else {
            const timestamp = new Date().getTime();
            const fileName = timestamp+file.name


            supabase.storage
             .from("images")
             .upload(fileName,  file, {
                upsert: false,
                casheControl: '3600',
          }).then ( ()=>{
                    const publicUrl = supabase.storage
                       .from("images")
                       .getPublicUrl(fileName).data.publicUrl;

                    resolve(publicUrl);
                }
            
          ).catch(
            ()=> {
                reject ("An error occured")
            }
          )
           }
        }
    );
}