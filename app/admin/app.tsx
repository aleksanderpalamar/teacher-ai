"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";

import { UnitList } from "./unit/list";
import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";

import { LessonList } from "./lesson/list";
import { LessonEdit } from "./lesson/edit";
import { LessonCreate } from "./lesson/create";

import { ChallengeList } from "./challenge/list";
import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";

import { ChallengeOptionList } from "./challengeOption/list";
import { ChallengeOptionCreate } from "./challengeOption/create";
import { ChallengeOptionEdit } from "./challengeOption/edit";


const App = () => {
  const dataProvider = simpleRestProvider("/api")
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
        recordRepresentation="title"
      />
      <Resource
        name="units"
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
        recordRepresentation="title"
      />
      <Resource
        name="lessons"
        list={LessonList}
        edit={LessonEdit}
        create={LessonCreate}
        recordRepresentation="title"
      />
      <Resource
        name="challenges"
        list={ChallengeList}
        create={ChallengeCreate}
        edit={ChallengeEdit}
        recordRepresentation="question"
      />
      <Resource
        name="challengeOptions"
        list={ChallengeOptionList}
        create={ChallengeOptionCreate}
        edit={ChallengeOptionEdit}
        recordRepresentation="text"
        options={{ label: "Challenge Options" }}
      />
    </Admin>
  )
}

export default App;