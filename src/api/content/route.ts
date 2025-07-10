import api from "@/lib/apiCentralize";
import { ContentResponse, TeacherKnowledgeResponse } from "@/resource/dto";

export const fetchContentByTopicID = async (
  id: string
): Promise<ContentResponse[]> => {
  try {
    const response = await api.get<{ data: ContentResponse[] }>(
      `content/${Number(id)}`
    );
    return response.data.data ?? [];
  } catch (err) {
    console.log("Error fetching content by topic ID:", err);
    return [];
  }
};

export const fetchContentByTopicANDTypeID = async (
  topicID: string,
  type: string
): Promise<ContentResponse[]> => {
  try {
    const response = await api.get<{ data: ContentResponse[] }>(
      `content/${Number(topicID)}/${Number(type)}`
    );
    return response.data.data ?? [];
  } catch (err) {
    console.log("Error fetching content by topic & type :", err);
    return [];
  }
};

export const fetchTeacherKnowledge = async (): Promise<
  TeacherKnowledgeResponse[]
> => {
  try {
    const response = await api.get<{ data: TeacherKnowledgeResponse[] }>(
      `content/teacher-knowledge`
    );
    return response.data.data ?? [];
  } catch (err) {
    console.log("Error fetching content by topic & type :", err);
    return [];
  }
};
