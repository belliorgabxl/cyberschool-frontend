import api from "@/lib/apiCentralize";
import { ContentFileResponse } from "@/resource/dto";

export const fetchFile = async (): Promise<ContentFileResponse[]> => {
  try {
    const response = await api.get<{ data: ContentFileResponse[] }>(`file`);
    return response.data.data ?? [];
  } catch (err) {
    console.log("Error when fetch file : ", err);
    return [];
  }
};

export const fetchFileByContentID = async (
  id: string
): Promise<ContentFileResponse[]> => {
  try {
    const response = await api.get<{ data: ContentFileResponse[] }>(
      `file/${Number(id)}`
    );
    return response.data.data ?? [];
  } catch (err) {
    console.log("Error when fetch file by content  id : ", err);
    return [];
  }
};
