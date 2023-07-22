import { BASE_PATH } from "../../constants";
import Entity from "./Entity";

export class Manager extends Entity {
  constructor() {
    super();
  }

  async getManager(id) {
    return await this.handlePost(`${BASE_PATH}/a/managers/show/${id}`);
  }

  async getAllManagers() {
    return await this.handlePost(`${BASE_PATH}/a/managers`);
  }

  async storeManager(
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
    managementExperience,
    nameOfClub,
    managementLevels,
    honors
  ) {
    return await this.handlePost(`${BASE_PATH}/a/managers/store`, {
      name,
      family,
      father_name:fatherName,
      birth_date:birthDate,
      place_birth:placeOfBirth,
      identity_no:identityNo,
      national_code:nationalCode,
      mobile,
      tel,
      field_study:fieldOfStudy,
      email,
      home_address:homeAddress,
      work_address:workAddress,
      sports_field:sportsField,
      management_experience:managementExperience,
      name_club:nameOfClub,
      management_levels:managementLevels,
      honors,
    });
  }

  async deleteManager(id) {
    return await this.handlePost(`${BASE_PATH}/a/managers/delete/${id}`);
  }
}

