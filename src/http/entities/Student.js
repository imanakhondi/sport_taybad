import { BASE_PATH } from "../../constants";
import Entity from "./Entity";

export class Student extends Entity {
  constructor() {
    super();
  }

  async getStudent(id) {
    return await this.handlePost(`${BASE_PATH}/a/students/show/${id}`);
  }

  async getAllStudents() {
    return await this.handlePost(`${BASE_PATH}/a/students`);
  }

  async storeStudent(
    name,
    family,
    fatherName,
    birthDate,
    placeOfBirth,
    identityNo,
    nationalCode,
    mobile,
    tel,
    fieldOfStudy,
    email,
    homeAddress,
    workAddress,
    sportsField,
    gameExperience,
    records
  ) {
    return await this.handlePost(`${BASE_PATH}/a/students/store`, {
      name,
      family,
      father_name: fatherName,
      birthDate,
      place_birth: placeOfBirth,
      identityNo,
      national_code: nationalCode,
      mobile,
      tel,
      field_study: fieldOfStudy,
      email,
      home_address: homeAddress,
      work_address: workAddress,
      sports_field: sportsField,
      game_experience: gameExperience,
      records,
    });
  }

  async deleteStudent(id) {
    return await this.handlePost(`${BASE_PATH}/a/students/delete/${id}`);
  }
}
