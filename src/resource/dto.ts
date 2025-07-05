export type TopicResponse = {
  id: number;
  file_type: "video" | "image" | "pdf";
  file_url: string;
};

export type StudentTopicReponse = {
  id: number;
  title: string;
  role: string;
  description: string;
};

export type TeacherTopicReponse = {
  id: number;
  title: string;
  role: string;
  description: string;
};
