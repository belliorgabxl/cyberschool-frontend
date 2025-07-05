import api from "@/lib/apiCentralize";
import { StudentTopicReponse, TeacherTopicReponse, TopicResponse } from "@/resource/dto";


export const fetchAllTopic  = async (): Promise<TopicResponse[]> => {
  try {
    const res = await api.get<{ data: TopicResponse[] }>("topic/all-topic"); 
    return res.data.data ?? [];
  } catch (err) {
    console.log("Fetch error:", err);
    return [];
  }
};

export const fetchAllTeachTopic = async (): Promise<TeacherTopicReponse[]> =>{
    try{
        const res = await api.get<{data:TeacherTopicReponse[]}>("topic/teacher-topic")
        return res.data.data ?? [];
    }catch(err){
        console.log("Fetch All Teacher Topic is Errors.",err)
        return [];
    }
}


export const fetchAllStudentTopic = async (): Promise<StudentTopicReponse[]> =>{
    try{
        const res = await api.get<{data:StudentTopicReponse[]}>("topic/student-topic")
        return res.data.data ?? [];
    }catch(err){
        console.log("Fetch All Student Topic is Errors.",err)
        return [];
    }
}