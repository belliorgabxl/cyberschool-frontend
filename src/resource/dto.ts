export type TopicResponse = {
  id: number;
  title: string;
  role: string;
  icon :string
  description: string;
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

export type ContentResponse = {
  id: number;
  title: string;
  content_text: string;
  content_description: string;
  content_type: string;
};
