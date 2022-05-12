import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field((_type) => ID)
  id: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  full_name: string;

  @Field()
  username: string;

  @Field()
  display_name: string;

  @Field()
  user_title: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  photo: string;

  @Field()
  document: string;

  @Field()
  gender: string;

  @Field()
  biography: string;

  @Field()
  birthday: string;

  @Field()
  active: boolean;

  @Field()
  admin: boolean;

  @Field()
  blog_post_count: number;

  @Field()
  blog_topic_count: number;

  @Field()
  course_count: number;

  @Field()
  lesson_count: number;

  @Field()
  media_space_content_count: number;

  @Field()
  site_public: string;

  @Field()
  address_public: string;

  @Field()
  phone_public: string;

  @Field()
  email_public: string;
}
