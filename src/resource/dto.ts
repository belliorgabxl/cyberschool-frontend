export type TopicResponse = {
  id: number;
  title: string;
  role: string;
  icon: string;
  description: string;
};

export type StudentTopicReponse = {
  id: number;
  title: string;
  role: string;
  description: string;
};

export interface FileItem {
  id: number;
  file_name: string;
  file_type: "info" | "video" | "question" | "test" | "others";
  file_url: string;
}

export type TeacherTopicReponse = {
  id: number;
  title: string;
  content_text: string;
  content_description: string | null;
  content_type: "short-video" | "others" | "video" | string;
  files: FileItem[];
};

export type ContentResponse = {
  id: number;
  title: string;
  content_text: string;
  content_description: string;
  content_type: string;
};

export type FileType = "video" | "info" | "question" | "test";

export type ContentFileResponse = {
  id: number;
  file_type: FileType;
  file_url: string;
};

export type TeacherKnowledgeResponse = {
  id: number;
  title: string;
  content_text: string;
  content_description: string | null;
  content_type: string;
  files: ContentFileResponse[];
};
